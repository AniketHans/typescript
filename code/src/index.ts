// ================ Types =====================

//------------------------ Writing js valid code which is invalid in ts ----------------
let a = 100; // This will automatically detects and define the variable `a` as number type based on the assigned value. This is called implicit type decalration.
a = "hello"; // This will throw error as `a` is defined as number type but assigned string. Altough, this is valid in js with `let`.
console.log(a);
// Thus if you compile the above code using `tsc`, the compiler will throw error but it will create js file which is completely valid
// -------------------------------------------------

// -------------------- Explicit type decalartion -----------------
let b: number = 100;
let c: string = "Hello";
let d: boolean = true;
let e; // ts will assign type `any` to it
e = 100; // because of type `any`, any value can be assigned to `e`
e = "hello";

let f = <string>"hola"; // Another way of explicitly declaring the type

// ------ Union variable -------
let g: number | string = "lol"; // here, `g` can hold either number or string

//-----------------------------------------------------
