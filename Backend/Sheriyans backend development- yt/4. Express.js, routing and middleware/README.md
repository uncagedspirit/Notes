## Express.js framework

Express.js is a lightweight, fast, and flexible web framework for Node.js that simplifies building web applications and APIs. It provides:

- Routing (handling different HTTP requests).
- Middleware support (functions that modify requests/responses).
- Template engines (to render dynamic pages).
- Error handling (to manage errors efficiently).


#### Installing express
```
npm install express
```

#### Basic express server
```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

#### Routing in express.js
```js
app.get('/about', (req, res) =>
  res.send('About Page')
);
```

<br/><br/>

### Nodemon

Nodemon is a utility that automatically restarts your Node.js application when file changes in the directory are detected. 
It is especially useful during development to avoid manually restarting the server after every change.

- Installing nodemon globally
  ```
  npm install -g nodemon
  ```

- Installing nodemon as a dev dependency
  ```
  npm install --save-dev nodemon
  ```

- Running node.js applications with nodemon
  ```
  nodemon app.js
  ```
  - Nodemon will watch your files and automatically restart the application whenever a change is detected in the .js files.
 
<br/><br/>

### Request- response model

The Request-Response Model in Express.js defines how an HTTP request from a client is processed and how the server responds with the necessary data

#### 1. How it works (flow)
1. **Client Sends a Request** – A browser, Postman, or frontend app sends an HTTP request to the server.
2. **Express Receives the Request** – The request is processed through middleware functions.
3. **Routing Determines the Handler** – Express checks the request URL and HTTP method to find the correct route handler.
4. **Middleware Modifies the Request** – Middleware functions process or modify the request (e.g., authentication, parsing JSON).
5. **Controller Handles the Request** – The actual logic (reading data, database interaction, etc.) is executed.
6. **Response is Sent Back** – The server sends a response (HTML, JSON, file, or status codes).

#### 2. HTTP Request Object (req)
The request object (`req`) contains all the information sent by the client.

#### Common Properties of `req`

| Property        | Description               | Example                                  |
|-----------------|---------------------------|------------------------------------------|
| `req.method`    | HTTP method               | `'GET'`                                  |
| `req.url`       | Requested URL             | `'/users'`                               |
| `req.params`    | URL parameters            | `{ id: '123' }`                          |
| `req.query`     | Query parameters          | `{ search: 'nodejs' }`                   |
| `req.body`      | Request body (POST/PUT)   | `{ username: 'saakshi' }`                |
| `req.headers`   | Request headers           | `{ 'Content-Type': 'application/json' }` |



<br/><br/>

### Middleware

Middleware functions in Express.js are functions that execute during the request-response cycle. They can:

- Modify req (request) and res (response) objects.
- Execute any code before sending a response.
- Pass control to the next middleware using next().

#### Implementation of middleware
```js
const express= require('express');
const app = express();

//middleware
app.use(function(req, res, next){
    console.log("through the middleware");
    next();
});

app.get("/", function(req, res){
    res.send("This is Home page");
});
```

<br/><br/>

### Error handling

```js
const express = require('express');
const app = express();

// Middleware that throws an error
app.use((req, res, next) => {
  const error = new Error('Something went wrong!');
  return next(error); // Passes the error to the error-handling middleware
});

// Custom error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
  
  
