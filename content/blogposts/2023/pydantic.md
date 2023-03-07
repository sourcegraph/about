---
title: Exploring Pydantic with Samuel Colvin
description: This is a template for writing content on the Sourcegraph blog!
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2023-03-06T00:00
tags: [blog]
slug: pydantic-tds-video-podcast
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

<Alert type="secondary">Going forward we are going to combine the video and Tour de Source (aka Code Deep Dives) into one blog post. We look forward to your feedback.</Alert>

We had the pleasure of interviewing [Samuel Colvin](https://twitter.com/samuel_colvin) creator of [Pydantic](https://docs.pydantic.dev/). Pydantic is an open source data validation library for Python. It validates external data based on Python type hints, which means developers don't need to learn a new data validation specification format or DSL.

<YouTube
  title="Exploring Pydantic with Samuel Colvin" 
  id="dfMbBKoPE20"
  showTitle={true}
/>

<hr className="my-6" />

### Tour de Source
<br />

#### Type hints in Python: Not much use at runtime

Before we take the plunge, let's look at how type hints work in Python.

By default, Python's type hints are great for generating documentation, static analysis, and our understanding of code. But they aren't much use at runtime.

![Hide the pain Harold tries Python type hints](https://user-images.githubusercontent.com/154435/218059807-9a0e95a8-affd-4806-af5e-20724820e6b5.jpg)

Here's an example illustrating how Python type hints are just hints at runtime:

```python
definitely_an_int: int = "3"
print(definitely_an_int)
#> 3
type(definitely_an_int)
#> <class 'str'>
print(definitely_an_int * 5)
#> 33333
def multiply(a: int, b: int) -> int:
    return a * b
multiply(4, 5)
#> 20
multiply('4', 5)
#> '44444'
```

This should come as no surprise, though. In [PEP 484 – Type Hints](https://peps.python.org/pep-0484/), which laid the foundation for gradual typing in Python, the Python maintainers were crystal clear about this:

> It should also be emphasized that **Python will remain a dynamically typed language, and the authors have no desire to ever make type hints mandatory, even by convention.**

This is why we'll often see defensive practices, such as casting user-generated data to required types:

```python
def multiply(a: int, b: int) -> int:
    return int(a) * int(b)
#> 
multiply('4', 5)
#> 20
```

#### pydantic validates and coerces external data in Python

To see exactly what pydantic does, here's an example of pydantic in action:

```python
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel

class User(BaseModel):
    id: int
    name = 'John Doe'
    signup_ts: Optional[datetime] = None
    friends: List[int] = []

external_data = {'id': '123', 'signup_ts': '2017-06-01 12:22', 'friends': [1, '2', b'3']}
user = User(**external_data)
print(user)
#> User id=123 name='John Doe' signup_ts=datetime.datetime(2017, 6, 1, 12, 22) friends=[1, 2, 3]
print(user.id)
#> 123
type(user.id)
#> <class 'int'>
```

Even though the external data passed to our `User` model used a string for the `id` field, pydantic validated the data and coerced the string to an int.

You'll also notice the list of type `int` accepts a list with an int, a string, and bytes.

This makes pydantic especially useful when dealing with external data from the command line, a JSON API, or environment variables, where almost all data consumed by Python enter our apps as strings.

Coercion-by-default may seem controversial at first, but the more we think about this, the more it makes sense—pydantic doesn't guarantee or even attempt to make Python a statically typed language. It just helps us handle external data safely without defensive casting and type checking.

One thing that sets pydantic apart from other Python data validation libraries is its use of Python type hints. We don't need to learn a new type schema or DSL to make use of pydantic—just add Python type annotations to models that inherit from pydantic's `BaseModel` and pydantic takes care of the rest.

It is handwavy to say "pydantic takes care of the rest" and a valid concern with runtime data validation is performance, so let's take a more detailed look at exactly how pydantic validates data while remaining fast.

We'll walk through our pydantic example above and focus on how the `id` field is validated.

#### Using pydantic in Python starts with… Python, of course

We've noted that to use pydantic in our Python models, we need to inherit from pydantic's `BaseModel` and then instantiate our model. Let's see how `BaseModel`'s `__init__` function is defined:

```python
    def __init__(__pydantic_self__, **data: Any) -> None:
        """
        Create a new model by parsing and validating input data from keyword arguments.

        Raises ValidationError if the input data cannot be parsed to form a valid model.

        Uses something other than `self` for the first arg to allow "self" as a field name.

        `__tracebackhide__` tells pytest and some other tools to omit the function from tracebacks
        """
        __tracebackhide__ = True
        values, fields_set = __pydantic_self__.__pydantic_validator__.validate_python(data)
        _object_setattr(__pydantic_self__, '__dict__', values)
        _object_setattr(__pydantic_self__, '__fields_set__', fields_set)
        if hasattr(__pydantic_self__, '__pydantic_post_init__'):
            __pydantic_self__.__pydantic_post_init__(context=None)
```

For simplicity, let's gloss over some detail here to get to the heart of what this class does: validating data.

We see that the validation of external data is handled by a function called `__pydantic_validator__.validate_python`:

```python
        values, fields_set = __pydantic_self__.__pydantic_validator__.validate_python(data)
```

<Badge text="Search code" color="white-outlined" link="https://sourcegraph.com/github.com/pydantic/pydantic@41ac98aee41aeb6e6592091055a61406036425d7/-/blob/pydantic/main.py?L159" size="small" />

<br /> <br />

We need to find how `__pydantic_validator__.validate_python` works but it isn't one of `BaseModel`'s methods. Stepping through the definition of `BaseModel`, we'll see that `BaseModel` inherits from the `ModelMetaclass`:

```python
    class ModelMetaclass(ABCMeta):
```

<Badge text="Search code" color="white-outlined" link="https://sourcegraph.com/github.com/pydantic/pydantic@41ac98aee41aeb6e6592091055a61406036425d7/-/blob/pydantic/main.py?L49" size="small" />

<br /> <br />

The `ModelMetaclass`'s `__new__` function does a bunch of heavy lifting, but if we step through this, we'll see that pydantic adds methods to our model by calling `_model_construction.complete_model_class` on our class.

Let's jump to `_model_construction.complete_model_class`:

```python
def complete_model_class(
    cls: type[BaseModel],
    name: str,
    validator_functions: ValidationFunctions,
    serialization_functions: SerializationFunctions,
    bases: tuple[type[Any], ...],
    *,
    raise_errors: bool = True,
    types_namespace: dict[str, Any] | None = None,
) -> bool:
    """
    Collect bound validator functions, build the model validation schema and set the model signature.

    Returns `True` if the model is successfully completed, else `False`.

    This logic must be called after class has been created since validation functions must be bound
    and `get_type_hints` requires a class object.
    """
```
<Badge text="Search code" color="white-outlined" link="https://sourcegraph.com/github.com/pydantic/pydantic@41ac98a/-/blob/pydantic/_internal/_model_construction.py?L119-136" size="small" />

<br /> <br />

Here we see that pydantic builds a model validation schema based on `get_type_hints`, which uses Python's standard `get_type_hints` when available:

https://sourcegraph.com/github.com/pydantic/pydantic@41ac98a/-/blob/pydantic/_internal/_typing_extra.py?L216-223

We'll take a look at how the schema is generated from type hints later, but for now, we're trying to find where validation takes place. We're still looking for a `__pydantic_validator__` method.

Jumping back to `complete_model_class`, we see that `__pydantic_validator__` is an instance of `SchemaValidator`:

https://sourcegraph.com/github.com/pydantic/pydantic@41ac98a/-/blob/pydantic/_internal/_model_construction.py?L170

The `SchemaValidator` class is imported from a module called `pydantic_core`:

https://sourcegraph.com/github.com/pydantic/pydantic@41ac98a/-/blob/pydantic/_internal/_model_construction.py?L14

### Faster Python data validation in Rust: A deep dive into pydantic-core

This brings us to the most interesting change from pydantic v1 to v2. In pydantic v2, most data types are validated by a binary compiled from Rust.

![A meme of a Trojan horse. Rust is in the horse, with pydantic introducing the library as Python.](https://user-images.githubusercontent.com/154435/218059911-c680c366-65da-498f-ac02-efd3b499b133.jpg)

The [pydantic-core](https://sourcegraph.com/github.com/pydantic/pydantic-core) package is a new addition to pydantic v2 and the change makes complete sense: This is where we'll find the Rust code. Isolating the Rust binaries from the pydantic Python package will make it easier to develop the core as a separate dependency, keeping pydantic itself pure Python.

The clear API boundary created by separating the core validation logic from Python may also enable maintainers to take a different direction with the core validation in future versions while keeping the Python API stable.

Let's dive into pydantic-core. As with any Python library, we can start by looking at the `__ini__.py` file:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a3367/-/blob/pydantic_core/__init__.py

In this `__init__.py` file, we see that we're simply importing and exporting types from `._pydantic_core`. But when we look for `_pydantic_core.py`, there's nothing but a stub file with type hints, called `_pydantic_core.pyi`.

This is because `_pydantic_core.py` is exported by a Rust macro from PyO3. When generating a Python module from Rust with PyO3, the `src/lib.rs` file is used as the default entry point. In pydantic-core's `src/lib.rs` file, we'll find a definition for the `_pydantic_core` Python module we were looking for earlier, but in Rust:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a3367/-/blob/src/lib.rs?L40-58

We can see the types that our Python code in the `__init__.py` file from earlier imports and exports. The one we're looking for that is used to instantiate a validator in pydantic is `SchemaValidator`:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/validators/mod.rs?L55-63

In particular, we're interested in the `validate_python` function from `SchemaValidator` because this is what is called in pydantic:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/validators/mod.rs?L98-113

Internally, this calls `SchemaValidator.validator.validate()`. We'll look at how pydantic builds `validator` using `build_validator`:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/validators/mod.rs?L316-399

We see that `build_validator` uses a macro to build a match statement that returns the correct validators for a given type from the schema:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/validators/mod.rs?L304-314

The first field we're validating in our example above is the `id` field, which should validate as type `int`.

By looking at the available validators in `build_validator`, we can see that type `int` should match `IntValidator`:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/validators/mod.rs?L340

Let's take a look at `IntValidator`. We're interested in the `IntValidator.validate` function in particular, because this is what is called to validate an integer.

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/validators/int.rs?L42-57

We see that `IntValidator.validate` takes an argument `input`, that is, a reference to an object that implements the `Input` trait. `IntValidator.validate` then calls the `validate_int` method from the `Input` trait.

We'll find `validate_int` in the abstract `Input` trait:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/input/input_abstract.rs?L25-30

From the comments on the abstract `Input` trait, we can also see how strict versus lax validation is implemented.

The `validate_int` methods from `Input` calls either `strict_int` or `lax_int`, depending on whether the `strict` argument is true or false:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/input/input_abstract.rs?L113-119

Since we're validating a Python object with type `PyAny`, we'll look at `lax_int` from the `Input` trait that is implemented by `PyAny`:

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/input/input_python.rs?L285-295

Here we see that pydantic-core jumps through multiple steps to try to extract a 64-bit signed integer from `input`. This is coercion-by-default we mentioned earlier in action.

1. First, we try to extract an `i64` directly and return it if possible.

2. If an integer can't be extracted directly, we attempt to convert `input` to a string using the `maybe_as_string` method. If `maybe_as_string` successfully converts `input` to a string, we attempt to parse the string as an integer using `str_as_int` and return the integer if it parses successfully.

https://sourcegraph.com/github.com/pydantic/pydantic-core@27a33670d32f32d0d1df3736b2c5cd004bf9bfe1/-/blob/src/input/shared.rs?L48-57

3. If `maybe_as_string` or `str_as_int` failed, we attempt to extract a float from `input`, then convert the float to an int using `float_as_int`.

4. Finally, if none of the attempts above manage to extract an integer, `lax_int` returns an error, which pydantic-core returns as a validation error.

Back in our `IntValidator.validate` function, we see that if `lax_int` succeeds, we pass the return value (now an integer) to Python using PyO3's `into_py` method, as a Python `int`.

This is why, in our example, the string `"123"` validates as an `int` when entered as the `User.id` and its type changes to `int` after validation.

Validating an unconstrained integer is likely one of the simplest validations carried out by pydantic, but this simple example allowed us to explore most of the steps involved in validation without getting stuck on the intricacies of a more complex type.

## Why Rust?

On average, using Rust makes pydantic v2 about 17 times faster than v1. Some data types are up to 50 times faster.

https://sourcegraph.com/github.com/pydantic/pydantic-core/-/blob/README.md?L71-72

That is quite an improvement, especially when considering that pydantic was already one of the fastest data validation libraries in Python.

Rust also simplifies writing safer code than native Python modules written in C.

### Meet Samuel Colvin, pydantic's maintainer

![Samuel Colvin](https://user-images.githubusercontent.com/154435/218060000-e7cfe70d-bfe8-4e3c-abfb-f9a349060653.jpg)

Building pydantic v2 is a monumental undertaking and we'd like to introduce you to the driving force behind this project.

Recently, Beyang and Justin from Sourcegraph had the pleasure of sitting down with Samuel Colvin, who maintains pydantic, to chat about his plans for pydantic v2. You can see a recording of our livestream [on Twitch](https://www.twitch.tv/videos/1724142180).

Samuel has been working on pydantic since 2017 when he realized the untapped value of type hints in Python. Recently, pydantic has been downloaded from PyPI around 22 million times per month.

We hope to sit down with Samuel again when pydantic v2 is released, to see how Sourcegraph can help developers upgrade their usage of pydantic.

#### How to sponsor pydantic's development

If you use pydantic and would like to contribute financially to the sustainability of a popular Python library, [Samuel is accepting sponsorships on GitHub](https://github.com/sponsors/samuelcolvin).

### Further reading on pydantic and pydantic-core

- [Pydantic V2 Plan](https://docs.pydantic.dev/blog/pydantic-v2/): Samuel's plans for pydantic v2.
- [How Pydantic V2 leverages Rust's Superpowers](https://fosdem.org/2023/schedule/event/rust_how_pydantic_v2_leverages_rusts_superpowers/): Samuel's talk at FOSDEM 2023.
- [The PyO3 user guide](https://pyo3.rs/): An introduction to PyO3: Publish Rust-based Python packages.

