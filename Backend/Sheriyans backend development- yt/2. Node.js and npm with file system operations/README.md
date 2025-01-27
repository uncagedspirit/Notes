## What is Node.js ?

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser. It is built on the V8 engine and extends JavaScript.

### npm

NPM is the default package manager for Node.js. It helps install, manage, and share JavaScript libraries (packages) for Node.js projects.

##### Key Features of NPM
- Package Installation (npm install package-name)
- Dependency Management (package.json keeps track of installed packages)
- Versioning & Updates (npm outdated, npm update)
- Publishing Packages (Share your own libraries via npm publish)

#### Important modules in Node.js

##### Module
- A module in Node.js is a reusable block of code that can be exported and imported in other files. It helps keep code organized, reusable, and maintainable.
- Examples: fs, http, path, os.

### fs (File system)
- The fs (File System) module in Node.js allows you to interact with the file system (read, write, update, delete files and directories). It is a built-in core module, so no installation is needed.
> Importing the fs module
```js
const fs = require('fs');
```

- Synchronous methods (blocking)
  
  - Read file synchronously:
    ```js
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
    ```
    The 'utf8' (optional) encoding tells Node.js to interpret the file's raw binary data as a human-readable string in the UTF-8 character set.
    Without utf8, it returns a buffer, binary data which is not human readable string.

  - Write file synchronously:
    ```js
    fs.writeFileSync('example.txt', 'Hello, Node.js!');
    console.log("File written successfully!");
    ```

    Synchronous methods are not generally used unless necessary. However, asynchronous methods can be made synchronous by simply appending __Sync to the method name.

    <br/>
- Asynchronous methods (non blocking)

  - Read a file asynchronously:
    ```js
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    ```
    
  - Write a file asynchronously:
    ```js
    fs.writeFile('example.txt', 'Hello, Async Node.js!', (err) => {
      if (err) throw err;
      console.log("File written successfully!");
    });
    ```
  
  - Append file asynchronously:
    ```js
    fs.appendFile('example.txt', '\nNew appended text!', (err) => {
      if (err) throw err;
      console.log('Data appended successfully!');
    });
    ```
    
  - Rename file asynchronously:
    ```js 
    fs.rename('oldName.txt', 'newName.txt', (err) => {
      if (err) throw err;
      console.log('File renamed successfully!');
    });
    ```
    
  - Copying file asynchronously:
    ```js
    fs.copyFile('source.txt', 'destination.txt', (err) => {
      if (err) throw err;
      console.log('File copied successfully!');
    });
    ```
  
  - Deleting a file asynchronously:
    ```js
    fs.unlink('file.txt', (err) => {
      if (err) throw err;
      console.log('File deleted successfully!');
    });
    ```

    <br/><br/><br/>

## HTTP and HTTPS

#### HTTP
- HTTP (HyperText Transfer Protocol) is a stateless request-response protocol used in web communication between clients (browsers, mobile apps) and servers.
- It supports methods like GET (retrieve data), POST (send data), PUT (update data), DELETE (remove data), and more.
- It operates over port 80 (HTTP) and port 443 (HTTPS for encrypted communication).

#### HTTPS
HTTPS (HyperText Transfer Protocol Secure) is a secure version of HTTP that encrypts communication using SSL/TLS (Secure Sockets Layer/Transport Layer Security).

Key Features of HTTPS:
- Data Encryption → Protects data from eavesdropping and man-in-the-middle attacks.
- Authentication → Ensures that the server is legitimate using SSL/TLS certificates.
- Integrity → Prevents data from being altered during transmission.
- Default Port → 443 (instead of 80 for HTTP).

#### Creating a server

```js
const http = require('http');

const server = http.createServer(function(req, res){
  res.end("Hello world");
})

server.listen(3000);
```



