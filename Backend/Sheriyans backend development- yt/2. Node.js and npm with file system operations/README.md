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

- Asynchronous methods (non blocking)

  - Read a file asynchronously:
    ```js
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    ```

  - 

  
  


