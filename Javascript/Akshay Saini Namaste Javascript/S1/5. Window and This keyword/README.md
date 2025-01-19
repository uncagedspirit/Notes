### The shortest JavaScript program is an empty file and here's why:

Even if there is nothing to execute in a JS code or even if the file is empty, 
JS will still create global execution context.

Window object:

Whenever a program is run, JS also creates a global object for the program.
This global object is the window object with a lot of functions and variables inside it, 
and it is created by the JS engine.
We can access these functions and variables anywhere inside out program.

This global object, in case of browsers is the window object.
The JS does not run alone in browser but also in lot of other devices and other JS engines,
similar to how chrome browser has its v8 engine.
All these engines have the responsibility to create this global object.
This global object will be created even if there is no code to be executed in the JS file.

The variables we create inside the global scope of the function will be added to the window object.

eg. If we declare 
>> var a=10; 
in the global space of the program, it will be added to the window object.

Now, we can access this variable as:

>> console.log(window.a);   // as a has been added to the window object
>> console.log(this.a);     //as this is pointing to the global object which is window object. 
>> console.log(a);          //since we have mentioned nothing, it will assume we are referring to the window object.



JS also creates a this keyword for us.
At the global level, the this keyword points to the window object.




