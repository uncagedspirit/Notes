### Authentication

Authentication is the process of verifying a user's identity before granting access to a system. It ensures that the person is who they claim to be.

- Methods of Authentication:

1. Passwords (Username & Password)
2. OTP (One-Time Passwords)
3. Biometric Authentication (Fingerprint, Face ID)
4. Multi-Factor Authentication (MFA) (Combining two or more methods)

<br/><br/>

### Authorization

Authorization is the process of granting or restricting access to specific resources based on user permissions. It happens after authentication.

-  Methods of Authorization:

1. Role-Based Access Control (RBAC) (Admin, User, Guest)
2. Access Control Lists (ACLs)
3. OAuth Tokens (Third-party API access)

<br/><br/>

### Cookies 

Cookies are small pieces of data stored on a user's browser by websites. They help websites remember user preferences, login sessions, and tracking information.

- Uses of cookies
1. User Authentication (Keeps users logged in)
2. Personalization (Stores preferences like theme settings)
3. Session Management (Tracks user sessions)
4. Analytics & Tracking (Used by advertisers for user behavior analysis)


### Setting a cookie 

```js
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/', function(req, res){
    res.cookie('name', 'saakshi');
    res.send("done");
})

app.get('/read', function(req,res){
    console.log(req.cookies);
    res.send("read page");
})

app.listen(3000);
```

<br/><br/>

### Session

A session is a temporary data storage mechanism used to store user-specific information on the server for a limited time.

#### How sessions work

- User logs in → Server creates a session and stores user data.
- Server sends a session ID to the client (stored in cookies).
- Client sends the session ID with every request.
- Server validates session ID → If valid, user stays authenticated.
- Session expires after a set time or on logout.

```js
const session = require('express-session');
const express = require('express');
const app = express();

app.use(session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.get('/', (req, res) => {
  req.session.user = "Saakshi"; 
  res.send('Session set!');
});

app.get('/check', (req, res) => {
  res.send(req.session.user ? `User: ${req.session.user}` : 'No session found');
});

app.listen(3000);
```

<br/><br/>

### Bcrypt

bcrypt is a password-hashing algorithm used to securely store passwords by converting them into an irreversible, encrypted format. 
It adds salt (random data) to make brute-force attacks difficult.

- Installing Bcrypt
  
  to install bcrypt,
```
npm install bcrypt
```

- Using Bcrypt

  Creating a hash 
```js
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.get('/', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).send('Error generating salt');

        bcrypt.hash('password', salt, (err, hash) => {
            if (err) return res.status(500).send('Error hashing password');

            //save hashed password in your db
            res.send(`Hashed Password: ${hash}`);
        });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

- Verifying password

```js
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

const storedPassword = {}; // Simulating a database

// Route to hash and store the password
app.get('/hash', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).send('Error generating salt');

        bcrypt.hash('password123', salt, (err, hash) => {
            if (err) return res.status(500).send('Error hashing password');

            storedPassword.hash = hash; // Store hashed password
            res.send(`Password hashed and stored`);
        });
    });
});

// Route to verify the password
app.get('/verify', (req, res) => {
    const userInput = 'password123'; // Password to check

    bcrypt.compare(userInput, storedPassword.hash, (err, result) => {
        if (err) return res.status(500).send('Error comparing passwords');

        if (result) {
            res.send('Password is correct');
        } else {
            res.send('Password is incorrect');
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
<br/>

#### Simple password verification system using Express.js and Bcrypt hashing
<details>
<summary> Click to expand code </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let storedPasswordHash = ''; // for storing hashed password

// Home route 
app.get('/', (req, res) => {
    res.send(`
        <h2>Choose an action</h2>
        <form action="/store" method="GET">
            <button type="submit">Store Password</button>
        </form>
        <form action="/verify" method="GET">
            <button type="submit">Verify Password</button>
        </form>
    `);
});

// Route for storing password
app.get('/store', (req, res) => {
    res.send(`
        <h2>Store a Password</h2>
        <form action="/store" method="POST">
            <input type="password" name="password" placeholder="Enter Password" required>
            <button type="submit">Hash & Store</button>
        </form>
        <br>
        <a href="/">Go Back</a>
    `);
});

// Handle storing hashed password
app.post('/store', (req, res) => {
    const { password } = req.body;
    if (!password) return res.send('Password is required');

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.send('Error generating salt');
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) return res.send('Error hashing password');
            storedPasswordHash = hash;
            res.send('<h3>Password hashed and stored!</h3><a href="/">Go Back</a>');
        });
    });
});

// Route for verifying password
app.get('/verify', (req, res) => {
    res.send(`
        <h2>Verify Password</h2>
        <form action="/verify" method="POST">
            <input type="password" name="password" placeholder="Enter Password" required>
            <button type="submit">Verify</button>
        </form>
        <br>
        <a href="/">Go Back</a>
    `);
});

//  password verification
app.post('/verify', (req, res) => {
    const { password } = req.body;
    if (!password) return res.send('Password is required');

    bcrypt.compare(password, storedPasswordHash, (err, result) => {
        if (err) return res.send('Error comparing passwords');
        res.redirect(result ? '/success' : '/failure');
    });
});

// Success route
app.get('/success', (req, res) => {
    res.send('<h3>Password is correct!</h3><a href="/">Go Back</a>');
});

// Failure route
app.get('/failure', (req, res) => {
    res.send('<h3>Password is incorrect!</h3><a href="/">Go Back</a>');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
</details>

<br/><br/>

### JsonWebToken 

JWT is a compact, URL-safe token used for authentication and authorization in web applications.

#### Structure of JWT

- A JWT consists of three parts, separated by dots (.):

```js
header.payload.signature
```

Example:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNjkxMjM0NTY3fQ.JpZb9qU8uW1Ljb1Xk5eBbMQoHBrLmWmP3f5pG0R3J8Q
```

1. Header

contains token type (JWT) and algorithm (```HS256```, ```RS256```)

```js
{
  "alg": "HS256",
  "typ": "JWT"
}
```

2. Payload

Contains user-specific claims (data).

```js
{
  "userId": "1234567890",
  "iat": 1691234567
}
```

3. Signature

Ensures integrity by signing the token using a secret key.


#### How JWT works

- User logs in → Server generates a JWT with user details.
- JWT is sent to the client → Stored in local storage or cookies.
- Client sends JWT with requests → In headers (Authorization: Bearer <token>).
- Server verifies JWT → If valid, grants access; otherwise, rejects.

##### Use cases

- **Authentication** → Verify user identity (Login System).
- **Authorization** → Control access to APIs.
- **Stateless Sessions** → No need for server-side session storage.

#### JWT Authentication with Cookies in Express.js

```js
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/", function(req, res){
    let token = jwt.sign({email: "sdk@example.com"}, "secret");
    res.cookie("token", token);
    console.log(token);
    res.send("done");
})

app.get("/read", function(req, res){
    let data =  jwt.verify(req.cookies.token, "secret");  
    console.log(data);
    res.send(data);
})

app.listen(3000);
```









