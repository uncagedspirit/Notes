- ## Let's understand the execution context with the help of following code: 

``` Javascript
var n=2;
function square(num){
  var ans= num*num;
  return ans;
 }
var square2= square(n);
var square4= square(4);
```

### In the execution context, there are two sections, among which the first one is variable environment where the variables are stored ans second one is code.

#### So, in the first phase that is creation phase, the variables will be stored in the memory as:

> Memory:
```
n: undefined
square: {...code}
square2: undefined
square4: undefined
```

#### In the phase 2, the execution phase, the code will be executed line by line

Now, executing the code line by line,
after executing the first line which has declaration of n with a value, it will update its variable environment to:

> Memory:
```
n: 2
square: {...code}
square2: undefined
square4: undefined
```

Now, from line no 2 to 5 there is a function declared, hence there is nothing to execute,
as well as since the code has already been stored, the memory too, won't be updated.

Now, on line 6, there is a function execution.

For every function in JS, a new execution context is created, which also have memory and code components.
So, again there will be two phase involved for the function.

Phase 1 for the function square():

> memory:
```
num: undefined
ans: undefined
```
Now, executing the code of function line by line,

Line 2, the argument (n) will be passed as the parameter (num) of the function and memory will be updated

> memory:
```
num: 2
ans: undefined
```
Line 3, calculation of num*num and the result will be put in variable ans,
then the memory for the function would be:

> memory:
```
num: 2
ans: 4
```
Note that the memory in the execution context of function: square will be updated and not for the entire program.

In line 4, the ans will be returned, which tells the function to return the control of program and stop execution.
So, the function will stop executing.
The control of the function will again be returned to line 6 in the program and the value of square2 will be updated in memory.

> Memory:
```
n: 2
square: {...code}
square2: 4
square4: undefined 
```
Now, before we move on to line 7, the execution context for the function will be completely deleted.

Now, line 7 will be executed in similar manner, just with a direct argument of 4 and again the execution 
context will be made for function and it will get deleted after returning from the function.

So, now that the JS is done with all of the execution, the whole execution context for that program gets deleted.


### CALL STACK:

Call stack maintains the order of execution of execution contexts.

JavaScript does the above mentioned execution with the help of call stack.

Every time at the bottom of the call stack, there is a global execution context.
That means, whenever any JS program is run, the global execution context will be pushed into the call stack.

And whenever a new function is invoked, the new execution context is created and pushed inside 
the call stack, where there is already global execution context at the bottom of stack.
Then, the new function is executed and if there is any other function called inside it, 
it will be pushed onto the stack in similar manner.

When the function stops executing or returns, the context of that function is popped out 
of the stack and the control is returned to the previous function which is now at the top.

When the whole function is done executing, the global execution context too, will be popped out of the call stack.


### There are also other names for the call stack:
- Execution context stack
- program stack
- control stack
- runtime stack
- machine stack
















