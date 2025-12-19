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
const darkMode = "Dark";
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
const getData = (product) => {
    console.log(product);
};
const changeProductData = (product) => {
    product.name = "Mac";
    product.price = 867544;
    //product.id = "Product 101"; // `Error`, This will throw error because we can not change the value of id as it is readonly field
    console.log(product);
};
const product1 = {
    name: "Iron",
    stock: 20,
    price: 1011,
    photo: "Image",
    id: "Product 1",
};
getData(product1); // Output: { name: 'Iron', stock: 20, price: 1011, photo: 'Image',id: 'Product 1' }
changeProductData(product1);
// -----------------------------------------------------------------------------------------------------------------
// -------------------------------------------- Never type ---------------------------------------------------------
//This is returned in case of functions that throw error
const errorHandler = () => {
    // The errorHandler function's return type is never here
    throw new Error("Haha, mock error");
};
const returnError = () => {
    return new Error("Returning error");
};
// -----------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- Classes ------------------------------------------------------
class Player {
    height; // declaring variable types in classes
    weight; //readonly, can only be assigned value only once that cannot be altered
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        this.weight = 90; //readonly only prevents assignment after the constructor finishes. Thus this is valid
    }
}
const p1 = new Player(60, 55);
console.log(p1.height);
console.log(p1.weight);
//p1.weight = 100; // error as weight is a readonly field
//------------------------- Access modifiers in classes--------------------------
// Typescript offers access modifiers like private, public and protected in classes
// By default all properties are public in classes. Public properties can be accessed using the class object. These can be inherited as well to the child class
// Private properties are private to the class and cannot be accessed outside of it using class object. They cannot be inherited also
// Protected properties are private to the class and cannot be accessed outside of it using class object. These can be inherited to child class
class Product {
    name;
    price;
    seller;
    sellerAddress;
    id; // a public readonly property
    constructor(name, price, seller, sellerAddress) {
        this.name = name;
        this.price = price;
        this.seller = seller;
        this.sellerAddress = sellerAddress;
        this.id = Math.random();
    }
    getSellerAddress = () => {
        // By default this function is public
        // These are getters can be used to access private and protected properties of a class
        return this.sellerAddress;
    };
    getSeller = () => {
        return this.seller;
    };
}
const prod1 = new Product("Macbook", 10000, "unicorn", "Noida");
console.log(prod1.name);
// console.log(prod1.seller); // cannot access protected member of the class
// console.log(prod1.sellerAddress); // cannot access private member of the class
console.log(prod1.getSellerAddress());
// console.log(prod1.getSeller()); // cannot access protected and private methods of the class
// Shortand for writing this.name = name; etc, the below sytax is same as the above
class Product2 {
    name;
    price;
    seller;
    sellerAddress;
    id;
    constructor(name, price, seller, sellerAddress) {
        this.name = name;
        this.price = price;
        this.seller = seller;
        this.sellerAddress = sellerAddress;
        this.id = Math.random();
    }
}
const prod2 = new Product2("Iphone", 90897, "Unicorn", "Chandi chowk");
console.log(prod2.name);
class GroceryProduct extends Product {
    expiryDate; //public by default
    label;
    constructor(name, price, seller, sellerAdd, expiry, label) {
        super(name, price, seller, sellerAdd);
        this.expiryDate = expiry;
        this.label = label;
        //this.id = 89; // id is the readonly property from the parent so its value cannot be changed
    }
    getLabelAndSeller = () => {
        // this.seller() is the protected function inherited from the parent so the child class can use it
        return `The seller for product is ${this.getSeller()} and the label is ${this.label}`;
    };
}
const gProd1 = new GroceryProduct("Chakki Atta", 100, "Chakki waala", "Main road", "10.10.2026", "Organic");
console.log(gProd1.id);
console.log(gProd1.name); // inherited public property from parent
console.log(gProd1.price);
console.log(gProd1.expiryDate); // its own public property
console.log(gProd1.getSellerAddress()); // public function inherited from parent so we can call it using child as well
console.log(gProd1.getLabelAndSeller());
// ----------------- Getter and setter ---------------------
// getters and setters can be used to access and modify the private properties of a class
class Food {
    fname;
    ftype;
    constructor(fname, ftype) {
        this.fname = fname;
        this.ftype = ftype;
    }
    get getFoodName() {
        return this.fname;
    }
    get getFoodType() {
        return this.ftype;
    }
    set changeFoodName(val) {
        this.fname = val;
    }
    set changeFoodType(val) {
        this.ftype = val;
    }
}
const f1 = new Food("Dahi bhalle", "chaat");
console.log(f1.getFoodName);
f1.changeFoodType = "street chaat";
console.log(f1.getFoodType);
// We need to implement interface in classes
class Car {
    manufacturingDate;
    // The class should contain atleast all the mandatory properties and methods mentioned in the interfaces under public modifier
    name;
    price;
    stock;
    company;
    model;
    constructor(name, price, stock, company, model, manufacturingDate) {
        this.manufacturingDate = manufacturingDate;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.company = company;
        this.model = model;
    }
    getPriceAndStock = () => {
        return `The Price is ${this.price} and the stock left are ${this.stock} units`;
    };
    getManufacturingDate = () => {
        return this.manufacturingDate;
    };
    getVehicleCompany = () => {
        return this.company;
    };
}
const car1 = new Car("Elevate", 1500000, 100, "Honda", "2025", "10.10.2025");
console.log(car1.name);
console.log(car1.getPriceAndStock());
console.log(car1.getVehicleCompany());
console.log(car1.getManufacturingDate());
function returnVal(flag) {
    //returnVal can return anything based on the flag
    if (flag)
        return { a: "hello" };
    return { b: 100, c: "world" };
}
const val1 = returnVal(true);
// val1.a;    // This will throw error as val1 can be anything amoung A and B. Property 'a' does not exist on type 'A | B'. Property 'a' does not exist on type 'B'
// Thus we need to assert a type manually after we are sure that only that particular value will be returned
const val2 = returnVal(true); // we are sure for flag=true, the returnVal() will return oject of type A
console.log(val2.a);
// Alternate syntax for type assertion
const val3 = returnVal(false);
console.log(val3.b, val3.c);
// Suppose a function may return undefined or null and you are sure that it will not return undefined for your implementation then you can use the below sytax
function retVal(f) {
    if (f)
        return { a: "hahahah" };
}
const val4 = retVal(true);
console.log(val4?.a); // here it is checking whether val4 is undefined or not
const val5 = retVal(true); // here we explicitly told that the retVal here will not return undefined
console.log(val5.a);
//------------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=index.js.map