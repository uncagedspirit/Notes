## NPM

NPM is the default package manager for Node.js, used to install, manage, and share JavaScript packages (libraries, dependencies).

- Initializing a New Node.js Project (package.json)
  ```
  npm init -y
  ```
  - Creates a package.json file with default values.
  - Stores metadata and dependencies.

- Installing Packages
  ```
  //local installation (project specific)
  npm install express

  //global installation (system wide)
  npm install -g nodemon

  //installing dev dependencies
  npm install jest --save-dev

  //installing specific version
  npm install lodash@4.17.21
  ```

- Removing packages
  ```
  npm uninstall express
  ```

- Updating packages

  ```
  npm update
  //updates all dependencies to the latest minor versions

  npm outdated
  //lists outdated packages
  ```

- Running scripts from package.json
  ```
  {
    "scripts": {
      "start": "node index.js",
      "dev": "nodemon index.js"
    }
  }
  ```

  - Run the script
    ```
    npm run start
    npm run dev
    ```

- Clearing cache (for fixing errors)
  ```
  npm cache clean --force
  ```

## node_modules

is the directory where NPM installs all dependencies for a Node.js project. It contains:
- Installed packages (e.g., express, lodash).
- Nested dependencies (packages required by other packages).

### Dependencies
- Required for production (needed for the app to run).
- Installed using: npm install <package>
- Stored in package.json → "dependencies".

### DevDependencies
- Only needed for development (not used in production).
- Used for testing, debugging, linting, build tools.
- Installed using: npm install <package> --save-dev
- stored in package.json  → "devDependencies".

#### Installing Only Production Dependencies

To install only dependencies (without devDependencies), use:
```
npm install --omit=dev
```





  
