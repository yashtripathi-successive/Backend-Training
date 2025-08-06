## Typescript 

# What is TypeScript?

A superset of JavaScript that adds static typing, and it helps catch errors during development (before runtime).


# Setup

npm install -g typescript
tsc --init     # initialize tsconfig.json
tsc filename.ts   # compile to JavaScript


# Basic Types

let isDone: boolean = false;
let age: number = 25;
let userName: string = "Alice";
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 5];
let anyValue: any = "Could be anything";
let nothing: void = undefined;
let neverReturns: never = (() => { throw new Error("Oops") })();


# Type Inference

let x = 10; // Inferred as number


# Functions

function greet(name: string): string {
  return "Hello " + name;
}

// Optional and default parameters
function log(message: string, level: string = "INFO") {
  console.log(`[${level}] ${message}`);
}


# Interfaces

interface Person {
  name: string;
  age: number;
  greet(): void;
}

const user: Person = {
  name: "Bob",
  age: 30,
  greet() {
    console.log("Hello!");
  },
};


# Type Alias and Union Types

type ID = number | string;

function getId(id: ID) {
  console.log(id);
}


# Enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;


# Classess

class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}


# Generics

function identity<T>(value: T): T {
  return value;
}

let output = identity<string>("Hello");
