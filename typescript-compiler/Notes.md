`tsc app.js -w` or `tsc app.js --watch` will recompile the typescript file whenever the file is saved.

`tsc --init` will initialize the project as a ts project. Creates a tsconfig.json. It says all files on the same level or lower should be managed.
With this we can just run `tsc` to compile all \*.ts files.
Like before you can now run `tsc -w` and it will watch all the typescript files.

### tsconfig.json

Holds typescript configureation settings.

- You can add the "exclude" attribute to list files or folders you don't want to compile. If this attribute is not included in `tsconfig.json` then the `node_modules` folder is by default excluded.
- You can add the "include" attribute to list files or folders you want to compile. All other files will be excluded.
- You can add the "files" attribute to list file you want to include. You cannot list folders here.
- ## compilerOptions Attribute
  - The "target" attribute is used to set what version of JavaScript you want to compile too.
  - The lib attribute is an array of libraries to include, if not included then it assumes defaults based on the target you set. On library identifier is "DOM" whihc includes everything needed to work with the DOM in HTML.
  - "allowJS" will also compile js files.
  - "checkJS" will check js files.
  - "sourceMap" helps with debugging and development, will have your ts files show up in browser developer tools source tab
  - "outDir" tells typescript where the output files should be stored. It will also keep the same file structure in the outDir
  - "rootDir" tells ts compile where the files you want to compile are and excludes others. 
  - "removeComments" will remove comments for ts file in js file. Can make files smaller. 
  - "noEmit" if you don't want to generate any js files. If you just want to check if your files are compiling fine. 
  - "downlevelIteration" gives you a more exact compulation if you are getting error with loops, should only turn on if you are finding these problems because it does create more verbose files. 
  - "noEmitOnError" default is false. Set true if you don't want the files with errors to be generated. Might be good for production builds where you don't want a files with an error to be introduced into production. 
  - ### strict options
    - "strict" will set all strict options to true. 
    - "noImplicitAny" inforces that we are specific about our parameters types if there is no way for ts to infer the type. 
    - "strictNullChecks" tells ts to be strict with values that could be optentially null, and not allow them. Like when accessing HTML elements. Using the `!` after the possible null value tells ts that you are sure the value exists. Ex: 
    ```ts
    const button = document.querySelector("button")!;
    button.addEventListener("click", () => {
      console.log("Clicked!");
    });
    ``` 
    Without the `!` you would have to add an if that checks if button is null. Ex: 
    ```ts
    const button = document.querySelector("button");
    if (button) {
      button.addEventListener("click", () => {
        console.log("Clicked!");
      });
    }
    ```
    Or you could use turnerary operators. Ex: 
    ```ts
    const button = document.querySelector("button");
    button?.addEventListener("click", () => {
      console.log("Clicked!");
    });
    ```
    - "strictFunctionTypes" comes into play with functions and classes 
    - "strictBindCallApply" if you're passing a function as a parameter and it needs parameters of its own you need to bind it to null, and then pass the parameter. if this setting is false this check will be skipped. Here is an example of the proper way to do this: 
    ```ts
    const button = document.querySelector("button");
    function clickHandler(message: string) {
      console.log("Clicked! " + message);
    }
    button?.addEventListener("click", clickHandler.bind(null, "You're welcome."));

    ```
    - "alwaysStrict" says that the js output files are `"use strict`
  - "noUnusedLocals" says that if a variable is delcared in a function it has to be used
  - "noUnusedParameters" make sure all parameters of a function should be used in the function
  - "noImplicitReturns" makes sure that the function cannot only return something sometimes. If it returns something in some cases it needs to always return. Even if it is just a empty return, `return;`

## Debugging in VSCode
- In `tsconfig.json` set `sourceMap: true`
- Set up launch.json by trying to run debugger frist. If not launch.json exists yet it'll take you through creating one. Pick "Chrome" option, and remember to set the `"url"` attribute to localhost with the port your app is running on. 
- Example launch config: 
  ```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "type": "chrome",
        "request": "launch",
        "name": "Launch Chrome against localhost",
        "url": "http://localhost:3000",
        "webRoot": "${workspaceFolder}"
      }
    ]
  }
  ```
