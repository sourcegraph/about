local foo(x, y=10) = x + y;

local object = {
  // A method
  foo(x): x * x,
};

{
  call_inline_function:
    (function(foo) foo * foo)(5),

  call_foo: foo(2),
  
  call_method_foo: object.foo(3),
}
