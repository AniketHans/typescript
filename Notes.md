# Typescript

1. Typescript is just strongly typed Javascript
2. We cannot run the typescript file directly. We first compile the typecript code into Javascript and then we run the javascript code
3. `tsc` is the compiler that can convert the typescript code into javascript
4. For compiling specific ts files into js:
   1. `tsc file1.ts file2.ts ...` Eg: `tsc app.ts`
      1. This will create a app.js file from the app.ts file.
      2. The created app.js file can be executed
   2. Any changes you make in the typescript file, you first need to compile the files into js and then the changes will be reflected in the generated js files.
5. We can use watcher on typescript files to automatically detect the changes in them and generate the js files
   1. `tsc <file1> <file2> -w`, here `-w` will enable the watcher on the mentioned files. We dont need to manually compile the code for them. The watcher will automatically compile it for us
6. We can write the exact js syntax in `.ts` file as the code will ultimately be compiled into js
7. To generate the `tsconfig.json` file, use `tsc -init` command. This file contains the config for our ts files and compiler. We can specify the folder whose files will be compiled by the ts compiler and the output dir where the converted js code will be stored.

## Types in ts

1. Implicit type declaration:
   1. `let a = 100`, ts will automatically detect that the variable `a` is of type number
2. Explicit type declaration:
   1. `let a:number = 100;`, here we are explicitly declaring the type of `a`
   2. `let a = <number>100;`, this is another way of explicitly declaring the type
3. Type `any`:
   1. `let a`, here we neither assign any value to the variable nor declared the type. So ts will assign type `any` to this.
   2. Type `any` means anything can be assigned to the variable. `any` should not be used because we are using ts so we can pre define a variable type and use it accordingly, but `any` does not specify any type for the variable
4. Union variable:
   1. `let a: number|string = "hello"`, here a can have either number or string value
