## Arrays in JS

- Arrays in JavaScript are ordered collections of elements, such as numbers, strings, or objects. 
- They are zero-indexed and can store multiple values in a single variable.

### forEach()

The forEach() method in JavaScript is used to iterate over an array and execute a provided function once for each element.
It does not return a new array.

syntax:
```js
//index, array are optional, array is given for reference to original array

array.forEach((element, index, array) => {
  // Code to execute
});
```

Example:
```js
arr.forEach(function(val){
  //do the task for each value, e.g.
  console.log(val + " hello");
})
```

### map()

The map() method in JavaScript creates a new array by applying a function to each element of an existing array without modifying the original array.

Syntax:
```js
//since this method returns an array, we need to store it in some variable
var returnedArr = arr.map(function(val){
  //do the task for each element and RETURN it
})

//with all possible parameters
let newArray = array.map((element, index, array) => {
  return transformedElement;
});
```

Example:
```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// Output: [2, 4, 6]
```

### filter()

The filter() method creates a new array containing elements that satisfy a given condition. It does not modify the original array.
- It is useful for filtering elements based on conditions.

Syntax:
```js
let newArr= arr.filter((){
  //return true if fulfils condition, then the element will be added to new array
  //else return false or by default returns false, the element won't be added to the array
})

//with all possible params
let newArray = array.filter((element, index, array) => {
  return condition;
});
```

Example:
```js
//example 1
var newArr = arr.filter(function(val){
  if(val > 3) return true;
  //by default returns false
})

//example 2
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Output: [2, 4]
```

### find()

The find() method in JavaScript returns the first element in an array that satisfies a given condition. If no element is found, it returns undefined.

Syntax:
```js
let result = array.find((element, index, array) => {
  return condition;
});
```

Example:
```js
//example 1
var ans = arr.find(function(val){
  if(val==2) return val;
})

//example 2
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(num => num > 3);
console.log(found);

// Output: 4
```

### indexOf()

The indexOf() method returns the first index at which a given element is found in an array. If the element is not found, it returns -1.

Syntax:
```js
array.indexOf(element, fromIndex);

//params
//element: The value to search for.
//fromIndex (optional): The index from where the search starts. Default is 0.
```

Example:
```js
let numbers = [10, 20, 30, 20];

console.log(numbers.indexOf(20));
// Output: 1

console.log(numbers.indexOf(20, 2));
// Output: 3 (search starts from index 2)

console.log(numbers.indexOf(50));
// Output: -1 (not found)
```

## Objects

Objects in JavaScript are key-value pairs used to store multiple related values. They can hold properties (data) and methods (functions).

Example:
```js
let obj = {
  key1: "value1",
  key2: 42,
  key3: function() {
    return "Hello!";
  }
};
```
```js
let person = {
  name: "Saakshi",
  age: 22,
  greet: function() {
    return "Hello!";
  }
};

console.log(person.name); // Output: Saakshi
console.log(person["age"]); // Output: 22
console.log(person.greet()); // Output: Hello!
```

## Asynchronous JS

Asynchronous JavaScript allows code to run without blocking execution. It is used for tasks like fetching data, reading files, or timers.

JavaScript uses a single-threaded event loop along with a callback queue and microtask queue to handle asynchronous operations efficiently.

1. Components 
- Call Stack: Executes synchronous code.
- Web APIs: Handles async operations (setTimeout, fetch, etc.).
- Callback Queue: Stores callbacks from Web APIs.
- Microtask Queue: Stores promises (.then, catch, finally).
- Event Loop: Moves tasks from queues to the call stack.


2. Execution Flow 
- Synchronous code runs first (Call Stack).
- Web APIs handle async tasks (setTimeout, fetch).
- Microtask Queue (Promises) has higher priority than the Callback Queue.
- Event Loop moves tasks to the Call Stack when it's empty.


### Ways to Handle Async Code:
1. Callbacks
```js
setTimeout(() => console.log("Done!"), 1000);
// Executes after 1 sec
```

2. Promises

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

promise.then(msg => console.log(msg));
// Output: Success! (after 1 sec)
```
 
3. Async/Await
```js
async function fetchData() {
  let result = await new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 1000));
  console.log(result);
}

fetchData();
// Output: Data Loaded (after 1 sec)
```







