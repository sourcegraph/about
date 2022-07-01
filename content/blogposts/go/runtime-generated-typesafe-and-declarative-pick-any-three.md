---
title: 'Runtime Generated, Typesafe, and Declarative - Pick Any Three'
authors:
  - name: Jon Bodner
publishDate: 2017-07-14T00:00-07:00
tags: [
  "gophercon"
]
slug: runtime-generated-typesafe-and-declarative-pick-any-three
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5aNRjQxFd6mKi46EoaWqU/1daac9ca1f076a1e11b9fb539dfadd35/proteus1.png
published: true
---


Liveblog by Matt King

## About the speaker

[Jon Bodner](https://twitter.com/JonathanBodner1) is part of the Technology Fellows Program at Capital One, currently working on a fork of the LGTM project with the hopes of open sourcing it soon. His team is helping to transform Capital One through introduction and integration of new technologies, working to shorten release cycles, and generally pushing forward an "open source first" culture.

He is a software engineer, lead developer, and architect. He's worked in just about every corner of the software industry including on-line commerce, education, finance, government, healthcare, and internet infrastructure.

His favorite member of One Direction is the auto-tune box.



## Overview

Go code is sometimes called repetitive. By adopting techniques like tags, reflection, and runtime function generation, you can focus on the algorithm and not the boilerplate. Jon shows off Proteus, which uses these ideas to implement a runtime generated, type-safe, SQL-injection-proof DAO layer.

You can view Jon's code on [Sourcegraph](https://sourcegraph.com/github.com/jonbodner/proteus-talk/) or clone it on [GitHub](https://github.com/jonbodner/proteus-talk)

## What happens when geeks get together?
We brag about language features. Take these examples:

"My language has immutability"
```go
(let [my-vector [1 2 3 4]
	  my-map {:fred "ethel}
	  my-list {list 4 3 2 1}]
	list(
		(conj my-vector 5)
		(assoc my-map :ricky "lucy")
		(conj my-list 5)
		;the originals are intact
		my-vector
		my-map
		my-list))
```

"My language has generics"
```go
case class ListNode(+T)(h: T, t: ListNode[T]) {
	def head: T = h
	def trail: ListNode[T] = t
	def prepend[U >: T](elem: U): ListNode[U] = ListNode(elem, this)
}
```

"My language has unreadible syntax"
```go
life←{↑1 ⍵∨.∧3 4=+/, ̄1 0 1∘.⊖ ̄1 0 1∘.⌽⊂⍵}
```

I'm not sure why we brag about features because that last example is unreadable. Could you imagine if you were making a change to a critical path and every change was packed with complex features? To me that would be awful.

One of the best features of Go is it's lack of features.

To start off let's define the requirements so we can implement a runtime generated, type-safe, SQL-injection-proof DAO layer similar to the Java implementation.

#### Requirements
- Specify the queries inline with the code.
- Generate the code to implement the queries.
- Ensure type safety.
- Prevent SQL injection attacks.
- Make sure performance is reasonable.
- Most importantly, it needs to feel like Go. We want a library not a framework. It should work with standard sql libraries.

## Proteus
This talk is based on Proteus is a simple tool for generating an application's data access layer.

### Under the Hood
Let's start with a simple `init` and `main` function that is responsible for setting up the `PostgresDB`
```go
var personDao PersonDao

func init() {
	err := Build(&personDao, Postgres)
	if err != nil {
		panic(err)
	}
}

func main() {
	db := setupDbPostgres()
	wrapper := Adapt(db)
	DoPersonStuff(wrapper)
}

func DoPersonStuff(wrapper Wrapper) {
	count, err := personDao.Create(wrapper, "Fred", 20)
	fmt.Println("create:", count, err)

	person, err := personDao.Get(wrapper, 1)
	fmt.Println("get:", person, err)

	people, err := personDao.GetAll(wrapper)
	fmt.Println("get all:", people, err)

	count, err = personDao.Update(wrapper, 1, "Freddie", 30)
	fmt.Println("update:", count, err)

	person, err = personDao.Get(wrapper, 1)
	fmt.Println("get #2:", person, err)

	count, err = personDao.Delete(wrapper, 1)
	fmt.Println("delete:", count, err)
}
```

Before we dive into writing a full implementation of `DoPersonStuff` it's important to understand the reflect package.

### Reflection

We can use the [reflect package](https://golang.org/pkg/reflect/#pkg-examples) to get the type of a variable, the kind of a variable, the type of a pointer, and create a type token.
```go
// Get the type of a variable
varType := reflect.TypeOf(var)

// Once you know the type you can get the kind of a variable (slice, map, pointer, struct, interface, string, etc)
varKind := varType.Kind()

// Get the type of a pointer, map, slice, channel, or array
underlyingType := varType.Elem()

// Create a type token (an io.Reader in this case)
token := reflect.TypeOf((*io.Reader)(nil)).Elem()
```

In addition to getting the type you can use [reflect package](https://golang.org/pkg/reflect/#pkg-examples) to find the values.

First create a `reflect.Value` and in order to modify it we need to make it a pointer.
```go
var := 10
var2 := 20
varVal := reflect.ValueOf(&var)
varVal2 := reflect.ValueOf(var2)
```

Reading the value of a pointer is straightforward as well:
```go
// For a pointer
varVal.Elem().Interface()
varVal2.Interface()
```

To modify the value we will use the pointer created earlier:
`varVal.Elem().Set(varVal2)`

If we wanted to create a new pointer value so we can modify it we will use `reflect.New`

`newVarVal := reflect.New(varVal2.Type())`

Now that we've covered the basics lets dive into the first problem.

### How do you store the metadata?
We can use struct tags. (Note: In case you missed it, Fatih Arslan gave an amazing [talk](https://about.sourcegraph.com/go/writing-a-go-tool-to-parse-and-modify-struct-tags) on writing a go tool to parse and modify struct tags. The tool, [gomodifytags](https://sourcegraph.com/github.com/fatih/gomodifytags) is very popular.)

We use the struct tags to get the fields and the values so that we can store our queries.

### How do you turn a SQL string into runnable code?
To turn a SQL string into runnable code we generate functions at runtime using the reflect package. For example:
```go
type Calculator func(a, b int) int

func MemoizeCalculator(c Calculator) Calculator {
	t := reflect.TypeOf(c)
	type vals struct {
		a,b int
	}
	cache := map[vals]int{}
	// Generated function
	v := reflect.MakeFunc(t, func(args []reflect.Value) []reflect.Value {
  		a := args[0].Interface().(int)
		b := args[1].Interface().(int)
		v := vals{a:a, b:b}
		result, ok := cache[v]
		if !ok {
			result = c(a,b)
			cache[v] = result
		}
		return []reflect.Value{reflect.ValueOf(result)}
		})
		return v.Interface().(Calculator)
}
```

So let's say we have these two functions that take advantage of our memoization:
```go
func AddSlowly(a, b int) int {
  time.Sleep(1 * time.Second)
  return a + b
}

func AddNormally(a, b int) int {
  return a + b
}
```
This has lots of overhead if you were to use these generated functions, however in the database implementation this is okay.

### Struct fields can be functions
We use the struct to hold our generated queries. Let's start to put the above concepts together by creating a struct with fields that are functions.

```go
type PersonDao struct {
	Create func(/*Parameters*/) `proq:"CREATE SQL QUERY GOES HERE"`
	Get    func(/*Parameters*/) `proq:"READ SQL QUERY GOES HERE"`
	Update func(/*Parameters*/) `proq:"UPDATE SQL QUERY GOES HERE"`
	Delete func(/*Parameters*/) `proq:"DELETE SQL QUERY GOES HERE"`
}

var personDao PersonDao

func init() {
	err := Build(&personDao)
	if err != nil {
		panic(err)
	}
}
```

When you use these, it looks like standard Go code.

```go
func DoPersonStuff() {
	personDao.Create()
	personDao.Get()
	personDao.Update()
	personDao.Delete()
}
func main() {
	DoPersonStuff()
}
```

```go
func Build(dao interface{}) error {
	daoPointerType := reflect.TypeOf(dao)
	//must be a pointer to struct
	if daoPointerType.Kind() != reflect.Ptr {
		return errors.New("Not a pointer")
	}
	daoType := daoPointerType.Elem()
	//if not a struct, error out
	if daoType.Kind() != reflect.Struct {
		return errors.New("Not a pointer to struct")
	}
	daoPointerValue := reflect.ValueOf(dao)
	daoValue := reflect.Elem(daoPointerValue)
	// Iterate over the fields in the struct and we call a function at implementation and once we iterate over the fields we are done.
	for i := 0; i < daoType.NumField(); i++ {
		curField := daoType.Field(i)
		query, ok := curField.Tag.Lookup("proq")
		if curField.Type.Kind() != reflect.Func || !ok {
			continue
		}
		funcType := curField.Type
		implementation, err := makeImplementation(funcType, query)
		if err != nil {
			continue
		}
		fieldValue := daoValue.Field(i)
		fieldValue.Set(reflect.MakeFunc(funcType, implementation))
	}
	return nil
}

func makeImplementation(funcType reflect.Type, query string)
                       (func([]reflect.Value) []reflect.Value, error) {
  return func(args []reflect.Value) []reflect.Value {
		fmt.Printf("I'm a placeholder for query string %s\n", query)
		return nil
	}, nil
}
```
Running the implementation we can see our stubbed DAO implementation for create, get, update, and delete.


![proteus1](//images.contentful.com/le3mxztn6yoo/5aNRjQxFd6mKi46EoaWqU/1daac9ca1f076a1e11b9fb539dfadd35/proteus1.png)

This is good because it shows that the basic concept works. So now we need to get it to run database queries.

Next we want to integrate this with Go SQL libraries.

## Reuse, Don't Rewrite
We will use [sql.DB](https://godoc.org/database/sql#DB) and [sql.TX](https://godoc.org/database/sql#Tx).

`sql.DB` is a database handle representing a pool of zero or more underlying connections. The sql package automatically creates and frees connections automatically; it also maintains a free pool of idle connections.

`sql.TX` is an in-progress database transaction. A transaction must end with a call to `Commit` or `Rollback`.

Queries can be broken into two types:
- Read
- Add, update, or delete

We need to write a querier that returns rows from the datastore and an executor that runs queries that modify the datastore.

```go
// Querier runs queries that return Rows from the datastore
type Querier interface {
  Query(query string, args ...interface{}) (Rows, error)
}

// Executor runs queries that modify the datastore.
type Executor interface {
  Exec(query string, args ...interface{}) (sql.Result, error)
}
```

A problem that arises is returning `sql.Rows != returning Rows` where `Rows` is defined as

```go
type Rows interface {
	Next() bool
	Err() error
	Columns() ([]string, error)
	Scan(dest ...interface{}) error
	Close() error
}
```
The solution is to create an adapter struct and a factory function.
```go
func Adapt(sqle Sql) Wrapper {
  return sqlAdapter{sqle}
}

type sqlAdapter struct {
  Sql
}

func (w sqlAdapter) Exec(query string, args ...interface{}) (sql.Result, error) {
  return w.Sql.Exec(query, args...)
}

func (w sqlAdapter) Query(query string, args ...interface{}) (Rows, error) {
  return w.Sql.Query(query, args...)
}

// sqlExecutor matches the interface provided by several types in the standard go sql package.
type Sql interface {
  Exec(query string, args ...interface{}) (sql.Result, error)
  Query(query string, args ...interface{}) (*sql.Rows, error)
}
```

Now we can improve our stubbed implementation of `makeImplementation` to use the executor and querier.

```go
var exType = reflect.TypeOf((*Executor)(nil)).Elem()
var qType = reflect.TypeOf((*Querier)(nil)).Elem()
func makeImplementation(funcType reflect.Type, query string)
                       (func([]reflect.Value) []reflect.Value, error) {
  if funcType.NumIn() == 0 {
   return nil, errors.New("need to supply an Executor or Querier parameter")
  }
  switch fType := funcType.In(0); {
    case fType.Implements(exType):
          return makeExecutorImplementation(funcType, query)
    case fType.Implements(qType):
          return makeQuerierImplementation(funcType, query)
    default:
          return nil, errors.New("first parameter must be of type api.Executor or api.Querier")
    }
}
```

Two new functions were introduced depending on which case statement is used:
```go
func makeExecutorImplementation(funcType reflect.Type, query string)
                               (func([]reflect.Value) []reflect.Value, error) {
	return func(args []reflect.Value) []reflect.Value {
		executor := args[0].Interface().(Executor)
		fmt.Println("I'm execing query",query)
		result, err := executor.Exec(query/*args are coming soon*/)
		fmt.Println("I got back results", result, "and error",err)
		return nil
	}, nil
}

func makeQuerierImplementation(funcType reflect.Type, query string)
                              (func([]reflect.Value) []reflect.Value, error) {
	return func(args []reflect.Value) []reflect.Value {
	querier := args[0].Interface().(Querier)
	fmt.Println("I'm querying query",query)
	rows, err := querier.Query(query/*args are coming soon*/)
	fmt.Println("I got back rows", rows, "and error",err)
		return nil
	}, nil
}
```

We also define a new interface Wrapper that is a wrapper for our querier and executor interfaces.
```go
type Wrapper interface {
  Executor
  Querier
}
```

Going back to our stubbed client code, we modify `PersonDao struct` to include SQL commands.

```go
type PersonDao struct {
  Create func(Executor /*Parameters*/) `proq:"INSERT INTO PERSON(name, age) VALUES(:name:, :age:)"`
  Get    func(Querier /*Parameters*/)  `proq:"SELECT * FROM PERSON WHERE id = :id:"`
  Update func(Executor /*Parameters*/) `proq:"UPDATE PERSON SET name = :name:, age=:age: where id=:id:"`
  Delete func(Executor /*Parameters*/) `proq:"DELETE FROM PERSON WHERE id = :id:"`
}

func DoPersonStuff(wrapper Wrapper) {
    personDao.Create(wrapper)
    personDao.Get(wrapper)
    personDao.Update(wrapper)
    personDao.Delete(wrapper)
}

func main() {
	db := setupDbPostgres() wrapper := Adapt(db) DoPersonStuff(wrapper)
}
```

When you run the code you'll see that we are actually talking to the database, there are errors because this is not valid SQL syntax. Again, this confirms we are talking to the database and getting errors back from the database.

Next, associate the parameters to query placeholders.
- Function:  `Update func(e Executor, id int, name string, age int)`
- Query: `UPDATE PERSON SET name = :name:, age=:age: where id=:id:`

Since Go doesn't save parameters names we cannot use `reflect` to get them at runtime. So we use a second struct tag key/value pair to map the names to their position `prop:"id,name,age"`. It's then necessary to define a ParamAdapter because different bases use different parameter notation.

```go
type ParamAdapter func(pos int) string
func MySQL(pos int) string {
	return "?"
}
func Sqlite(pos int) string { return "?"
}
func Postgres(pos int) string { return fmt.Sprintf("$%d", pos)
}
func Oracle(pos int) string { return fmt.Sprintf(":%d", pos)
}
```

### From Struct Tags to SQL

- Struct Tag proq: `UPDATE PERSON SET name = :name:, age=:age: where id=:id:`
- Struct Tag prop: `id,name,age`

Convert the prop to `map[string]int`

- Struct Tag proq: `UPDATE PERSON SET name = :name:, age=:age: where id=:id:`
- nameOrderMap: `{“id”:1, “name”:2, “age”:3}`

Convert `proq` and `nameordermap` to `query` and `paramOrder`
- SQL Query: `UPDATE PERSON SET name = $1, age=$2 where id=$3`
- paramOrder: `[]paramInfo{ {“name”,2}, {“age”,3}, {“id”,1} }`

Now we are ready to return back values.

### Executors First
The executor type will be an `int64` and an `error`. The executor will first look at the `sql.Result` and `error` returned. If there is an error we handle it. Otherwise, we get the number of rows modified and once again handle the error if necessary. Lastly, we return the number of rows and a `nil` error.

```go
var errType = reflect.TypeOf((*error)(nil)).Elem()
var errZero = reflect.Zero(errType)

func makeExecutorImplementation(funcType reflect.Type, query string, paramOrder []paramInfo)
                               (func([]reflect.Value) []reflect.Value, error) {
  return func(args []reflect.Value) []reflect.Value {
    executor := args[0].Interface().(Executor)
    queryArgs := buildQueryArgs(args, paramOrder)
    fmt.Println("I'm execing query", query, "with args", queryArgs) result, err := executor.Exec(query, queryArgs...)
        var count int64
        if err == nil {
            count, err = result.RowsAffected()
        }
        var errVal reflect.Value
        if err == nil {
            errVal = errZero
        } else {
            errVal = reflect.ValueOf(err).Convert(errType)
        }
        return []reflect.Value{reflect.ValueOf(count), errVal}
    }, nil
}
```

Our client code is modified as:
```go
type PersonDao struct {
    Create func(e Executor, name string, age int) (int64, error) `proq:"INSERT INTO PERSON(name, age) VALUES(:name:, :age:)" prop:"name,age"`
    Get    func(q Querier, id int) `proq:"SELECT * FROM PERSON WHERE id = :id:" prop:"id"`
    Update func(e Executor, id int, name string, age int) (int64, error) `proq:"UPDATE PERSON SET name = :name:, age=:age: where id=:id:" prop:"id,name,age"`
    Delete func(e Executor, id int) (int64, error) `proq:"DELETE FROM PERSON WHERE id = :id:" prop:"id"`
}

func DoPersonStuff(wrapper Wrapper) {
    count, err := personDao.Create(wrapper, "Fred", 20)
    fmt.Println(“create",count,err)
    personDao.Get(wrapper, 1)
    count, err = personDao.Update(wrapper, 1, "Freddie", 30)
    fmt.Println("update",count,err)
    personDao.Get(wrapper, 1)
    count, err = personDao.Delete(wrapper, 1)
    fmt.Println(“delete",count,err)
    count, err = personDao.Delete(wrapper, 1)
    fmt.Println("delete",count,err) }
```

However, returning the count of the rows isn't really what we are looking for. We want to return back data from our queries. To do this we need to implement our queries.

### Return back values
To return back real data we need to define a struct with struct tags to map fields to query results.
```go
type Person struct {
	Id   int    `prof:"id"`
	Name string `prof:"name"`
	Age  int    `prof:"age"`
}
```
The return type will be a pointer to a struct and an error
```go
Get func(q Querier, id int) (*Person, error) `proq:"SELECT * FROM PERSON WHERE id = :id:" prop:"id"`
```

Let's update our `makeQuerierImplementation` to return a value back from the database:
```go
func makeQuerierImplementation(funcType reflect.Type, query string, paramOrder []paramInfo) (func([]reflect.Value) []reflect.Value, error) {
  firstResult := funcType.Out(0)
  zeroVal := reflect.Zero(firstResult)
  returnType := firstResult.Elem()
  mapper := buildMapper(returnType, zeroVal)
  return func(args []reflect.Value) []reflect.Value {
        querier := args[0].Interface().(Querier)
        queryArgs := buildQueryArgs(args, paramOrder)
        fmt.Println("I'm querying query", query, "with args", queryArgs)
        rows, err := querier.Query(query, queryArgs...)
        if err != nil {
           return []reflect.Value{zeroVal, reflect.ValueOf(err).Convert(errType)}
        }
        result, err := mapOneRow(rows, mapper, zeroVal)
        rows.Close()
        if err != nil {
           return []reflect.Value{result, reflect.ValueOf(err).Convert(errType)}
        }
        return []reflect.Value{result, errZero}
    }, nil
}
```

Build a mapper:
```go
func buildMapper(returnType reflect.Type, zeroVal reflect.Value) Builder {
    //build map of col names to field names (makes this 2N instead of N^2)
    colFieldMap := map[string]fieldInfo{}
    for i := 0; i < returnType.NumField(); i++ {
        sf := returnType.Field(i)
        tagVal := sf.Tag.Get("prof")
       colFieldMap[tagVal] = fieldInfo{
           name:      sf.Name,
           fieldType: sf.Type,
           pos:       i,
       }
    }
    return func(cols []string, vals []interface{}) (reflect.Value, error) {
        returnVal := reflect.New(returnType)
        err := populateReturnVal(returnVal, cols, vals, colFieldMap)
        if err != nil {
           return zeroVal, err
        }
        return returnVal, err
    }
}
```

Populate the return value:
```go
func populateReturnVal(returnVal reflect.Value, cols []string, vals []interface{}, colFieldMap map[string]fieldInfo) error {
    val := returnVal.Elem()
    for k, v := range cols {
        if sf, ok := colFieldMap[v]; ok {
            curVal := vals[k]
            rv := reflect.ValueOf(curVal)
            if rv.Elem().Elem().Type().ConvertibleTo(sf.fieldType) {
                val.Field(sf.pos).Set(rv.Elem().Elem().Convert(sf.fieldType))
            } else {
                return fmt.Errorf("Unable to assign value %v of type %v to struct field %s of type %v", rv.Elem().Elem(), rv.Elem().Elem().Type(), sf.name, sf.fieldType)
            }
       }
    }
    return nil
}
```

Lastly, map the row:
```go
func mapOneRow(rows Rows, mapper Mapper, zeroVal reflect.Value) (reflect.Value, error) {
    if !rows.Next() {
        if err := rows.Err(); err != nil {
            return zeroVal, err
        }
        return zeroVal, nil
    }
    cols, err := rows.Columns()
    if err != nil {
        return zeroVal, err
    }
    vals := make([]interface{}, len(cols))
    for i := 0; i < len(vals); i++ {
        vals[i] = new(interface{})
    }
    err = rows.Scan(vals...)
    if err != nil {
        return zeroVal, err
    }
    return mapper(cols, vals)
}
```
Now we are returning real values back from our datastore, but this is only for single rows. In the real world, we typically want more than just one value to be returned.

### Returning multiple values
To do this we use a slice of a struct and an error for the return type. The function looks like:
```go
GetAll func(q Querier) ([]Person, error) `proq:"SELECT * FROM PERSON"`
```

We follow the same implementation as before, but we do this for multiple rows instead of a single row.
```go
func makeQuerierImplementation(funcType reflect.Type, query string, paramOrder []paramInfo)
                              (func([]reflect.Value) []reflect.Value, error) {
    // skipping unchanged code
    rowMapper := mapOneRow
    if firstResult.Kind() == reflect.Slice {
        rowMapper = func(rows Rows, mapper Mapper, zeroVal reflect.Value) (reflect.Value, error) {
        return mapAllRows(returnType, rows, mapper, zeroVal)
    }
}
//skipping more unchanged code
    result, err := rowMapper(rows, mapper, zeroVal)
// skipping the rest of the unchanged code
}

func mapAllRows(returnType reflect.Type, rows Rows, mapper Mapper, zeroVal reflect.Value) (reflect.Value, error) {
    cols, err := rows.Columns()
    if err != nil {
        return zeroVal, err
    }
    outSlice := reflect.MakeSlice(reflect.SliceOf(returnType), 0, 0)
    for rows.Next() {
        if err := rows.Err(); err != nil {
            return zeroVal, err
        }
        vals := make([]interface{}, len(cols))
        for i := 0; i < len(vals); i++ {
            vals[i] = new(interface{})
        }
        err = rows.Scan(vals...)
        if err != nil {
            return zeroVal, err
        }

        curVal, err := mapper(cols, vals)
        if err != nil {
            return zeroVal, err
        }
        outSlice = reflect.Append(outSlice, curVal.Elem())
    }
    if err := rows.Err(); err != nil {
        return zeroVal, err
    }
    if outSlice.Len() == 0 {
        return zeroVal, nil
    }
    return outSlice, nil
}
```

Check out the full implementation on [Sourcegraph](https://sourcegraph.com/github.com/jonbodner/proteus-talk/).


## Recap
Go can be used to create declaration-driven code. By combining struct tags, function generation, reflection, and templating we can increase productivity and provide the functionality in other languages. All while keeping type safety and performance. And most importantly we can write code that feels like Go.

Proteus is not limited to SQL and adding support for NoSQL is simple, just implement the necessary adapter functions and Proteus will take care of the rest.
