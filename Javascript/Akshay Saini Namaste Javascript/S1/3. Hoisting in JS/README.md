# Hoisting in JavaScript  

Hoisting in JavaScript refers to the behavior where **variable and function declarations** are moved (or "hoisted") to the top of their containing scope **during the compilation phase**, before the code execution.  

---

## Variables  

### `var` Hoisting  
- Variables declared using `var` are hoisted, but **only the declaration is moved to the top**.  
- The initialization (if any) stays in place.  
- Until initialization, the variable is **undefined**.  

```js
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

### `let` and `const` Hoisting (Temporal Dead Zone)  
- Variables declared with `let` and `const` are **hoisted**, but they are **not initialized** until execution reaches the declaration.  
- This creates a **Temporal Dead Zone (TDZ)** from the start of the block until the variable is declared.  
- Accessing them before declaration results in a **ReferenceError**.  

```js
console.log(y); // ReferenceError
let y = 10;
```

### Temporal Dead Zone (TDZ)  
- The **Temporal Dead Zone** is the time between the **hoisting** of a variable and its **initialization**.  
- Any attempt to access the variable during this phase results in a **ReferenceError**.  
- The TDZ ensures that `let` and `const` do not allow access before the declaration line, preventing unintended behaviors.  

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 20;
console.log(a); // 20
```

---

## Functions  

### Function Declarations  
- Function declarations are **fully hoisted** (both the function declaration and body).  
- This means they can be **called before they are defined**.  

```js
sayHello(); // "Hello"

function sayHello() {
  console.log("Hello");
}
```

### Function Expressions  
- Function expressions (assigned to a variable) **are not fully hoisted**.  
- If declared with `var`, only the declaration is hoisted, and the variable remains **undefined** until assigned.  
- If declared with `let` or `const`, accessing them before declaration results in a **ReferenceError**.  

```js
console.log(greet); // undefined
var greet = function () {
  console.log("Hello");
};

// Using let or const
console.log(greetArrow); // ReferenceError
const greetArrow = () => console.log("Hello");
```

---

## Arrow Functions and Hoisting  
- Arrow functions follow the **same hoisting rules as function expressions**.  
- Declaring them with `var` results in **undefined**.  
- Declaring them with `let` or `const` results in a **ReferenceError** before initialization.  

```js
console.log(sum); // undefined
var sum = (a, b) => a + b;

console.log(multiply); // ReferenceError
let multiply = (a, b) => a * b;
```

---

## Class Hoisting  
- **Classes are hoisted** like functions, but they remain in a **Temporal Dead Zone (TDZ)**.  
- Accessing a class before its declaration results in a **ReferenceError**.  

```js
new MyClass(); // ReferenceError
class MyClass {}
```

---

## Summary  
- `var` is hoisted with an initial value of `undefined`.  
- `let` and `const` are hoisted but stay in a **Temporal Dead Zone (TDZ)**.  
- The **Temporal Dead Zone** is the phase between hoisting and initialization, where accessing the variable results in a **ReferenceError**.  
- Function declarations are fully hoisted.  
- Function expressions and arrow functions behave like variables in hoisting.  
- Classes are hoisted but also remain in **TDZ**.  

