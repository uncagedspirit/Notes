### Setting up an Express.js project

1. Initialize a project with npm
- Go to the target directory and run
     ```
      npm init
     ```
     
2. install express
   ```
    npm install express
   ```

<br/><br/>

### Setting up parser for form

```js
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
  res.send("Server is running");
});

app.listen(3000, function(){
  console.log("server running on port 3000");
})
```

<br/><br/>

### Setting up EJS for EJS pages
EJS (Embedded JavaScript) is a templating engine for Node.js that helps generate HTML dynamically by embedding JavaScript inside HTML files.
- first, install EJS from npm
  ```
  npm install ejs
  ```

- Setup ejs as a view engine
  ```js
  const express = require('express');
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //setting up ejs as the view engine
  app.set('view engine', 'ejs');
  
  app.get("/", function(req, res){
    res.render('index');
  });
  
  app.listen(3000, function(){
    console.log("server running on port 3000");
  })
  ```

  For this code to render a file as mentioned in ```res.render('<filename>')```, create a folder named *'views'* in the same directory where ```package.json``` is located.
  Inside the *'views'* folder, create any *.ejs* file (e.g., home.ejs, dashboard.ejs, or index.ejs).
  Then, specify the filename (without .ejs) in ```res.render('<filename>')``` to render it on the frontend.
  
<br/><br/>

### Setting up public static files

  ```js
  const express = require('express');
  const app = express();
  
  //require path module
  const path = require('path');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Serves static files
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.set('view engine', 'ejs');
  
  
  app.get("/", function(req, res){
    res.render('index');
  });
  
  app.listen(3000, function(){
    console.log("server running on port 3000");
  })
  ```

This requires creating a 'public' folder in the project directory and storing all the static files like images, stylesheets and scripts inside this folder.

we can then use these files in our code like:

```html
<link rel="stylesheet" href="/style.css">
<script src="/script.js"></script>
<img src="/logo.png" alt="Logo">

<!-- all these files are imported from the public folder --> 
```

<br/><br/>

### Dynamic routing

Dynamic routing allows defining routes with changing values in the URL. 
The *: (colon)* is used to define a dynamic parameter, which acts as a placeholder for values. 
We can capture these values using ```req.params.<parameterName>```, where *parameterName* is the name given after ```:``` in the route.

```js
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

#### Handling dynamic routes in ejs

```js
app.get('/user/:name', (req, res) => {
    res.render('profile', { name: req.params.name });
});
```

- In views/profile.ejs
  ```ejs
  <h1>Welcome, <%= name %></h1>
  ```

