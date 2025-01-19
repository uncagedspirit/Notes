### Let us work with this program:

```
var x=1;
a();
b();
console.log(x);

function a(){
   var x=10;
   console.log(x);
}

function b(){
    console.log(x);
}
```

The program execution starts first from creating a global execution context for the program,
first creating memory part of the global execution context:

> Memory:
```
x: undefined
a(): {...code}
b(): {...code}
```

then the code is now executed line by line.
- From line 1, the value of x = 1 is read and is updated in the global execution context memory as:

> Memory:
```
x: 1
a(): {...code}
b(): {...code}
```

- now, line 2 will execute which is a function call, thus the execution context for the function will be created and its memory will be like:

> Memory of function a:

```
x: undefined
```
- now, the created execution context for function a will be pushed onto the call stack,
and the function will start executing from line 6.

- On line 7 of function a, the value of x is defined, so it will be updated in the execution context memory of a.
  
- > Memory of function a:
```
x: undefined
```
- on line 8, console.log is called on x, the vale of x will be searched inside the local 
execution context of function a, and is found there, so will be printed on console as 10.

- On line 9 the function a will stop its execution and its execution context will be deleted/popped from the call stack.

- Now, the control will return to where it left in global code and line no 3 will be executed.
Again, the execution context for function b will be created and the function will be pushed onto the call stack and will start executing.
As there are no variables in function b, the memory will contain nothing and code part will store the code only.

- the function will start executing from line 11 and on line 12, console log will be called on x.
- As now, in this case, in the local scope of the function there is no declaration for x variable, it will look for x in the global scope. 
Upon finding x in global scope, it will be printed on console and execution of function b will stop on line 13.
Again, the execution context for function b will be deleted and popped from call stack.

- The control now will return to line 4 on global code, x will be printed on console which is stored as 1 in the global execution context.

As there are no other lines to execute, the program will stop executing and the global execution context too, will be deleted from the call stack.





