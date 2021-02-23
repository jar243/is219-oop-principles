# IS219 OOP Principles
Object-oriented programming is an abstract method of programming that encapsulates code within an object. An object can have traits, perform actions, and have child objects that inherit its traits. This in many ways models our real-world way of thinking when it comes to objects.

While not originally developed to be an object-oriented language, as Javascript has grown in popularity the past decade it has implemented many common OOP features seen in other languages.

This tutorial serves as basic introduction to the core OOP principles as implemented in Javascript. Code with tests is provided.

## 1) Encapsulation

Simply put, encapsulation enables an object to store its related variables and methods within itself, drawing a clear line between what is and is not part of an object. In Javascript, internal variables and methods are accessed using the 'this' keyword. In my example, I set an internal variable inside the object constructor and retrieve it with a get method.

## 2) Abstraction

Abstraction provides a way for an object to make some of its methods or variables private and unique to itself, only able to be accessed internally and not by outside code. This helps prevent errors by reducing external failure points or ways for a confused developer to accidently change something they're not supposed it. Unfortunately, Javascript doesn't have many strict abstraction options, with ES6 only recently adding private tokens in the form of '#' in front of variables. Most Javascript libraries still use a form of 'soft' private variables by placing an underscore in front of the variable or method name. It is still accessible from the outside, but alerts other developers that it should not be messed with.

## 3) Inheritance

## 4) Polymorphisms

Polymorphisms allow a developer to make a blueprint for a class. Classes that use this blueprint may have extrememly different internal workings, but still use the same public methods, allowing them to be used interchangeably by outside code.
