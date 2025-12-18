"use strict";
// ================ Typesript =====================
Object.defineProperty(exports, "__esModule", { value: true });
//------------------------ Writing js valid code which is invalid in ts ----------------
let a = 100; // This will automatically detects and define the variable `a` as number type based on the assigned value. This is called implicit type decalration.
a = "hello"; // This will throw error as `a` is defined as number type but assigned string. Altough, this is valid in js with `let`.
console.log(a);
// Thus if you compile the above code using `tsc`, the compiler will throw error but it will create js file which is completely valid
// -------------------------------------------------
// -------------------- Explicit type decalartion -----------------
let b = 100;
let c = "Hello";
let d = true;
let e; // ts will assign type `any` to it
e = 100; // because of type `any`, any value can be assigned to `e`
e = "hello";
let f = "hola"; // Another way of explicitly declaring the type
// ------ Union variable -------
let g = "lol"; // here, `g` can hold either number or string
// ------------------------------
// defining types for functions
const funcA = (n, m) => {
    return String(n * m);
}; // Here, we defining the type of variables accepted by the funcA and its return type
let h1 = 100;
let h2 = 101; // myNumber is just alias to number
let h3 = 102;
let h4 = "104";
const newFunc = (val1, val2) => {
    // Here, declared a function which is of the funcDef type signature
    return String(val1 + val2);
};
newFunc(10, 20); // Output: "30"
//----------------------------------------------------------
//--------------------------------------------------- Arrays -------------------------------------------------
//Declaring and defining arrays of single type:
// Syntax 1
const arr1 = [1, 2, 3]; // here, the arr variable will be of type number arrays, syntax: number[]. It can only contain numbers in it
const arr2 = ["hello", "world"];
// Syntax 2
const arr3 = [1, 2, 3];
const arr4 = [true, false];
const arr5 = new Array(20); // [ <20 empty items> ] of type number
// Union type arrays
const arr6 = ["world", "hello"]; // arr6 can be either a string array or number array
const arr7 = [1, "hello", "bola", 4]; //arr7 can contain either number or string values in the same array
const arr8 = [1, 2, 3, "hello"]; //arr8 can contain either number or string values in the same array
//Defining fixed size arrays or tuples
//Note: tuples only exist in ts not js
const arr9 = [1, 2, "haha"]; // this is fixed size tuple of size 3 containing number at 0 and 1 index and a atring at 2 index
const ah1 = {
    name: "AH1",
    age: 20,
    gender: "Male",
    isIndian: true,
};
const ah2 = {
    name: "AH2",
    age: 19,
    gender: "Male",
    isIndian: true,
    address: {
        street: "main street",
        pincode: 7867564,
    },
};
const user1 = {
    name: "user1",
    age: 89,
    gender: "Female",
    isIndian: true,
    salary: 987,
    printName: function (prefix) {
        console.log(prefix + this.name);
    },
    getStringAge: function () {
        return String(this.age);
    },
};
user1.printName("Mr.");
const age = user1.getStringAge?.(); // calling the getStringAge() if it exists as it optional
console.log("Age in string", age);
const user2 = {
    name: "user1",
    age: 89,
    gender: "Female",
    isIndian: true,
    salary: 987,
    address: {
        street: "main street",
        pincode: 8865687,
    },
    printName: function (prefix) {
        console.log(prefix + this.name);
    },
};
const func = (n, m, l) => {
    if (typeof l == "undefined")
        return n * m; // Since l is optional so we are narrowing down the calculations based on its availability
    return n * m * l;
};
//--------------- function types with optional params and default value---------------
const func2 = (n, m, l = 40) => {
    return n * m * l;
};
func2(10, 20); // it will take l's default value as we are not passing it
func2(10, 20, 30); // it will replace the l's default value will the passed argument value
//---------------- Rest operator ---------------------------------------
const Sum = (...m) => {
    // here we are spreading m operator which expects an array of numbers
    return m.reduce((acc, curr) => acc + curr);
};
console.log("Sum:", Sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Output: `Sum: 45`
// ----------------------------------------------------------------------------------------------------
//# sourceMappingURL=index.js.map