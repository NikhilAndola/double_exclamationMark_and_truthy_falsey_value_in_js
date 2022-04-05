# What's the double exclamation mark for in JavaScript?

If you have ever noticed a double exclamation mark (!!) in someone's JavaScript code you may be curious what it's for and what it does. It's really simple: it's short way to cast a variable to be a boolean (true or false) value. Let me explain.

**typeof JavaScript != 'static'**

JavaScript is not a static language, rather it is a dynamic language. That means that a variable can reference or hold a value of any **type**, and further, that **type** can be changed at any point. Whether you prefer a static or dynamic language is for you to decide.

But, we can certainly have a notion of a type in JavaScript. Here is a quick list of the various data types in JavaScript:

* Boolean
* String
* Number
* Object

* A boolean data type is the simplest of all data types as it is a simple bit value: 0 (false) or 1 (true). *

## **True versus Truthy**

We can set a variable to a boolean value and use it when evaluating an if-statement. Here's our simply example.

```
function() {
  var thisIsTrue = true;
  if (thisIsTrue) {
    window.alert('It certainly is!');
  }
}
```

When the function above is executed we will get the alert It certainly is! because the variable thisIsTrue is being set to the boolean value of true.

Now, let's look at how JavaScript can evaluate a value that is not a boolean to be casted to a boolean.

```
function() {
  var nothing = '';
  if (nothing) {
    window.alert('Nothing');
  } else {
    window.alert('Huh?');
  }
}
```

When the function above is executed we will get the alert Huh? because the value of the variable nothing is being evaluated to be false. This is what is commonly referred to as truthy versus falsey.

### The following values are considered by JavaScript to be *falseys*:

* Empty string: ""
* 0
* null
* undefined
* NaN

### The following values are considered by JavaScript to be *truthys*:

* Object: {}
* Array: []
* Not empty string: "anything"
* Number other than zero: 3.14
* Date: new Date();

The JavaScript engine that is executing your code will attempt to convert (or coerce) a value to a boolean when necessary, such as when evaluated in an if-statement.

## So, why double exclamation marks?

In some cases you may want to cast a variable to be explicitly boolean. Why? Well, the number one reason is that most of time developers do not use type safe comparison operators.

The type safe comparison operators are:

Strictly equal: ===
Strictly unequal: !==
When using the type safe comparison operators you are both checking that the values are equal (or unequal) and that their type is the same. Without the type safe comparison operators you are allowing the JavaScript engine the freedom to coerce your variables to true or false based on the truthy/falsey logic.

To cast your JavaScript variables to boolean, simply use two exclamation signs:

```
function() {
  var name = 'Brian';

  //alert 'string'
  window.alert(typeof name);

  //cast to boolean
  var bool = !!name;

  //alert 'boolean'
  window.alert(typeof bool);
}
```

In the example code above we are casting the string *"Brian"* to a *boolean* value. Therefore the second alert will indicate that the variable is now a *boolean* value.
