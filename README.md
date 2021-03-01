# IS219 OOP Principles

[![Build Status](https://travis-ci.com/jar243/is219-oop-principles.svg?branch=main)](https://travis-ci.com/jar243/is219-oop-principles) 
[![Coverage Status](https://coveralls.io/repos/github/jar243/is219-oop-principles/badge.svg?branch=main)](https://coveralls.io/github/jar243/is219-oop-principles?branch=main)

Object-oriented programming is an abstract method of programming that encapsulates code within an object. An object can have traits, perform actions, and have child objects that inherit its traits. This in many ways models our real-world way of thinking when it comes to objects.

While not originally developed to be an object-oriented language, as Javascript has grown in popularity the past decade it has implemented many common OOP features seen in other languages.

This tutorial serves as basic introduction to the core OOP principles as implemented in Javascript. Code with tests is provided.

## 1) Encapsulation

Simply put, encapsulation enables an object to store its related variables and methods within itself, drawing a clear line between what is and is not part of an object. In Javascript, internal variables and methods are accessed using the 'this' keyword. In my example, I set an internal variable inside the object constructor and retrieve it with a get method.

## 2) Abstraction

Abstraction provides a way for an object to make some of its methods or variables private and unique to itself, only able to be accessed internally and not by outside code. This helps prevent errors by reducing external failure points or ways for a confused developer to accidently change something they're not supposed it. Unfortunately, Javascript doesn't have many strict abstraction options, with ES6 only recently adding private tokens in the form of '#' in front of variables. Most Javascript libraries still use a form of 'soft' private variables by placing an underscore in front of the variable or method name. It is still accessible from the outside, but alerts other developers that it should not be messed with.

## 3) Inheritance

Inheritance is a way of having a broader, multi-use class be used as a starting point for a more specific class, thus 'inheriting' the parent class's variables and methods. This allows developers to cut down on duplicate code that might be used by multiple classes of similiar type. In Javascript this is implemented using the 'extends' keyword in the class declaration. In my example, I create a Mammal class with the method 'isAlive' and a Human class that extends Mammal with the method 'canSpeak.' Human possesses both methods, inheriting isAlive from Mammal.

## 4) Polymorphisms

Polymorphisms allow a developer to make a blueprint for a class. Classes that use this blueprint may have extrememly different internal workings, but still use the same public methods, allowing them to be used interchangeably by outside code. Javascript doesn't have a strict enforcer of the creation of a 'blueprint' like a Java interface, but the concept can be applied the same.

# OOP Design Patterns

When programming using object-oriented techniques, similiar problems often call for similiar solutions. Developers who have worked with OO languages for the past couple decades have put names to these common solutions to make it easier to communicate ideas and code structure. Below are three examples of design patterns and how they're applied.

## Structural: Composite

A composite allows for any number of objects to be nested inside another parent object, creating an almost tree-like structure. The parent object, although containing potentially hundreds of layers of child objects, can still be used as though it were a single object. This is especially helpful in our calculator app, as oftentimes more than one calculation is being performed at once. Using PEMDAS and a Calculation Class that takes advantage of the composite design pattern, one can encapsulate a very long, multi operational math equation into a single, easy to understand tree of individual calculations.

```js
class CompositeCalculation {

  constructor(dividend, divisor) {
    this.dividend = dividend;
    this.divisor = divisor;
  }

  getResult() {
    let dividendVal = (this.dividend instanceof CompositeCalculation) ? this.dividend.getResult() : this.dividend;
    let divisorVal = (this.divisor instanceof CompositeCalculation) ? this.divisor.getResult() : this.divisor;
    return dividendVal / divisorVal;
  }

}
```

## Creational: Builder

The composite design mentioned above, although a sound architecture for handling equations of any length, does not take into account its own creation. Some additional code will be needed to take a user's equation, parse it, and create the composite Calculation. This is where the builder design pattern could be useful. The CalculationBuilder class would accept an equation string in its whole format, seperate the equation into its individual Calculations, then nest them into a composite Calculation object using PEMDAS.

```js
class CalculationBuilder {

  constructor() {

  }

  build(equationStr) {
    let args = equationStr.replace(' ', '').split('/')
    let stack = []
    
    for (let i in args) {
      let arg = args[i]
      if (stack.length < 2) {
        stack.push(arg)
      }
      if (stack.length === 1) {
        continue
      }
      let divisor = stack.pop()
      let dividend = stack.pop()
      let calc = new CompositeCalculation(dividend, divisor)
      stack.push(calc)
    }

    return stack[0]
  }

}
```

## Behavioral: Memento

A memento class, in combination with a caretaker, provides a method for your app to keep a historical record of its previous states and to return to an older/newer state as needed by the user. In the case of the calculator app, a very simple CalculationMemento class could be used to keep a record of previous calculations performed by the user and to retrieve them as needed.