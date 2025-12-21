// ================ Typesript =====================

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

// ------------------------------

// defining types for functions
const funcA = (n: number, m: number): string => {
  return String(n * m);
}; // Here, we defining the type of variables accepted by the funcA and its return type

//-----------------------------------------------------

//------------------ Type --------------------------------
// Type as alias
type myNumber = number;
let h1: number = 100;
let h2: myNumber = 101; // myNumber is just alias to number

// Type union
type value = number | string; // variable of type `value` can contain both number and string values
let h3: value = 102;
let h4: value = "104";

// Type definition for function
type funcDef = (n: number, m: number) => string; // This defines the type decalration for function of type funcDef, which accepts 2 params of type number and returns string value
const newFunc: funcDef = (val1, val2) => {
  // Here, declared a function which is of the funcDef type signature
  return String(val1 + val2);
};
newFunc(10, 20); // Output: "30"

// Enums
type Mode = "Light" | "Dark" | "System"; // Variable of type mode can only hold any of the mentioned values
const darkMode: Mode = "Dark";

//----------------------------------------------------------

//--------------------------------------------------- Arrays -------------------------------------------------
//Declaring and defining arrays of single type:
// Syntax 1
const arr1: number[] = [1, 2, 3]; // here, the arr variable will be of type number arrays, syntax: number[]. It can only contain numbers in it
const arr2: string[] = ["hello", "world"];

// Syntax 2
const arr3: Array<number> = [1, 2, 3];
const arr4: Array<boolean> = [true, false];
const arr5: Array<number> = new Array(20); // [ <20 empty items> ] of type number

// Union type arrays
const arr6: number[] | string[] = ["world", "hello"]; // arr6 can be either a string array or number array
const arr7: (string | number)[] = [1, "hello", "bola", 4]; //arr7 can contain either number or string values in the same array
const arr8: Array<number | string> = [1, 2, 3, "hello"]; //arr8 can contain either number or string values in the same array

//Defining fixed size arrays or tuples
//Note: tuples only exist in ts not js
const arr9: [number, number, string] = [1, 2, "haha"]; // this is fixed size tuple of size 3 containing number at 0 and 1 index and a atring at 2 index
//------------------------------------------------------------------------------------------------------------------

//------------------------------------------------- Objects----------------------------------------------------------
// defining type of an object
type User = {
  // Here we have defined the properties of the object of type User and their types
  // Note: all fields that dont have ?: syntax are mandatory
  name: string;
  age: number;
  gender: "Male" | "Female"; // We can assign enum values to any property. It cannot have any other value than the defined ones
  isIndian: boolean;
  salary?: number; // ? after any property makes it optional field
  address?: {
    // Nested property
    street: string;
    pincode: number;
  };
};

const ah1: User = {
  name: "AH1",
  age: 20,
  gender: "Male",
  isIndian: true,
};

const ah2: User = {
  name: "AH2",
  age: 19,
  gender: "Male",
  isIndian: true,
  address: {
    street: "main street",
    pincode: 7867564,
  },
};
//-------------------------------------------------------------------------------------------------------------------

// ----------------------------------------- Interface ---------------------------------------------------------
// Interfaces are like Types with some differences
// Defining interface:
interface IUser {
  name: string;
  age: number;
  gender: "Male" | "Female";
  isIndian: boolean;
  salary?: number;
  printName: (prefix: string) => void;
  getStringAge?: () => string; // optional function
}

const user1: IUser = {
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
const age: string | undefined = user1.getStringAge?.(); // calling the getStringAge() if it exists as it optional
console.log("Age in string", age);

// ------------ Extending interface-----------------
interface UserWithAddress extends IUser {
  // UserWithAddress will inherit the properties of IUser as well
  address: {
    street: string;
    pincode: number;
  };
}

const user2: UserWithAddress = {
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
// -------------------------------------------------------------------------------------------------------------

// ---------------------------------------- Functions -------------------------------------------------
//--------- Type definition for functions with optional params-----------
type FuncType = (n: number, m: number, l?: number) => number; // Here, l param is optional so its value can be number or undefined
const func: FuncType = (n, m, l) => {
  if (typeof l == "undefined") return n * m; // Since l is optional so we are narrowing down the calculations based on its availability
  return n * m * l;
};

//--------------- function types with optional params and default value---------------
const func2: FuncType = (n, m, l = 40) => {
  return n * m * l;
};
func2(10, 20); // it will take l's default value as we are not passing it
func2(10, 20, 30); // it will replace the l's default value will the passed argument value

//---------------- Rest operator ---------------------------------------
const Sum = (...m: number[]): number => {
  // here we are spreading m operator which expects an array of numbers
  return m.reduce((acc, curr) => acc + curr);
};

console.log("Sum:", Sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Output: `Sum: 45`

// ----------------------------------------------------------------------------------------------------

//-------------------------------------------------- Function with object---------------------------------------
interface Obj1 {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string; // With readonly keyword, the id field's value can be defined once at the time of object definition but after that its value cannot be changed
}

const getData = (product: Obj1): void => {
  console.log(product);
};
const changeProductData = (product: Obj1) => {
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

const returnError = (): Error => {
  return new Error("Returning error");
};
// -----------------------------------------------------------------------------------------------------------------

// -------------------------------------------------- Classes ------------------------------------------------------
class Player {
  height: number; // declaring variable types in classes
  readonly weight: number; //readonly, can only be assigned value only once that cannot be altered

  constructor(height: number, weight: number) {
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
  public name: string;
  public price: number;
  protected seller: string;
  private sellerAddress: string;
  readonly id: number; // a public readonly property

  constructor(
    name: string,
    price: number,
    seller: string,
    sellerAddress: string
  ) {
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
  protected getSeller = (): string => {
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
  readonly id: number;
  constructor(
    public name: string,
    public price: number,
    protected seller: string,
    private sellerAddress: string
  ) {
    this.id = Math.random();
  }
}
const prod2 = new Product2("Iphone", 90897, "Unicorn", "Chandi chowk");
console.log(prod2.name);

// ---------------- Extending classes -------------------------

type Label = "Organic" | "Inorganic";
class GroceryProduct extends Product {
  expiryDate: string; //public by default
  private label: Label;
  constructor(
    name: string,
    price: number,
    seller: string,
    sellerAdd: string,
    expiry: string,
    label: Label
  ) {
    super(name, price, seller, sellerAdd);
    this.expiryDate = expiry;
    this.label = label;
    //this.id = 89; // id is the readonly property from the parent so its value cannot be changed
  }

  getLabelAndSeller = () => {
    // this.seller() is the protected function inherited from the parent so the child class can use it
    return `The seller for product is ${this.getSeller()} and the label is ${
      this.label
    }`;
  };
}

const gProd1 = new GroceryProduct(
  "Chakki Atta",
  100,
  "Chakki waala",
  "Main road",
  "10.10.2026",
  "Organic"
);

console.log(gProd1.id);
console.log(gProd1.name); // inherited public property from parent
console.log(gProd1.price);
console.log(gProd1.expiryDate); // its own public property
console.log(gProd1.getSellerAddress()); // public function inherited from parent so we can call it using child as well
console.log(gProd1.getLabelAndSeller());

// ----------------- Getter and setter ---------------------
// getters and setters can be used to access and modify the private properties of a class
class Food {
  constructor(private fname: string, private ftype: string) {}

  get getFoodName() {
    return this.fname;
  }

  get getFoodType() {
    return this.ftype;
  }

  set changeFoodName(val: string) {
    this.fname = val;
  }

  set changeFoodType(val: string) {
    this.ftype = val;
  }
}

const f1 = new Food("Dahi bhalle", "chaat");
console.log(f1.getFoodName);
f1.changeFoodType = "street chaat";
console.log(f1.getFoodType);

// --------------------- Classes implementing interfaces --------------------
interface Vehicle {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
  getPriceAndStock: () => string;
}

// lets take another interface

interface VehicleCompany {
  getVehicleCompany: () => string;
}

// We need to implement interface in classes
class Car implements Vehicle, VehicleCompany {
  // The class should contain atleast all the mandatory properties and methods mentioned in the interfaces under public modifier
  name: string;
  price: number;
  stock: number;
  private company: string;
  model: string;

  constructor(
    name: string,
    price: number,
    stock: number,
    company: string,
    model: string,
    protected manufacturingDate: string
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.company = company;
    this.model = model;
  }

  getPriceAndStock = (): string => {
    return `The Price is ${this.price} and the stock left are ${this.stock} units`;
  };

  getManufacturingDate = (): string => {
    return this.manufacturingDate;
  };

  getVehicleCompany = (): string => {
    return this.company;
  };
}

const car1 = new Car("Elevate", 1500000, 100, "Honda", "2025", "10.10.2025");
console.log(car1.name);
console.log(car1.getPriceAndStock());
console.log(car1.getVehicleCompany());
console.log(car1.getManufacturingDate());

// -----------------------------------------------------------------------------------------------------------------

//----------------------------------------- Type Assertion ---------------------------------------------------------
// We can forcefully assert any type
interface A {
  a: string;
}

interface B {
  b: number;
  c: string;
}

function returnVal(flag: boolean): A | B {
  //returnVal can return anything based on the flag
  if (flag) return { a: "hello" };
  return { b: 100, c: "world" };
}

const val1 = returnVal(true);
// val1.a;    // This will throw error as val1 can be anything amoung A and B. Property 'a' does not exist on type 'A | B'. Property 'a' does not exist on type 'B'
// Thus we need to assert a type manually after we are sure that only that particular value will be returned
const val2 = returnVal(true) as A; // we are sure for flag=true, the returnVal() will return oject of type A
console.log(val2.a);

// Alternate syntax for type assertion
const val3 = <B>returnVal(false);
console.log(val3.b, val3.c);

// Suppose a function may return undefined or null and you are sure that it will not return undefined for your implementation then you can use the below sytax
function retVal(f: boolean): A | undefined {
  if (f) return { a: "hahahah" };
}
const val4 = retVal(true);
console.log(val4?.a); // here it is checking whether val4 is undefined or not
const val5 = retVal(true)!; // here we explicitly told that the retVal here will not return undefined
console.log(val5.a);

// Index signature
interface Person {
  name: string;
  email: string;
}

const obj: Person = {
  name: "John Doe",
  email: "abc@gmail.com",
};

const getDataUsingKey = (key: string): string => {
  return obj[key]; // This is valid in JS but in ts it will throw error because key can be any string but for object of type Person the key should be either name or email
};

const getDataUsingKeyanfKeyOf = (key: keyof Person): string => {
  return obj[key]; // Here, we explicitly mentioned that the key in params will a key of Person interface so it will not throw any error
};

console.log(getDataUsingKey("name"));
console.log(getDataUsingKeyanfKeyOf("email"));

let key = "email";
console.log(obj[key as keyof Person]);

// if somehow you dont have access to the keys of interface
console.log(obj[key as keyof typeof obj]); // This tells that the key will from the typeof obj

// --------------------- Dynamic keys --------------
interface Person1 {
  [key: string]: string; // here we defined a dynamic key of type string means object of type Person can have any key of type string
}
const obj2: Person1 = {
  name: "John Doe",
  email: "abc@gmail.com",
};

const getDataUsingKey1 = (key: string): string | undefined => {
  return obj2[key]; // total valid as we dont have any spefic keys in Person2 interface
};

//------------------------------------------------------------------------------------------------------------------

// -------------------------------------------- Type Utility -------------------------------------------------------
// Type utilities are provided by TS for ease of access. Some of the type utilities are:
/**
 * Partial<Type>
 * Required<Type>
 * Readonly<Type>
 * Record<Keys, Type>
 * Pick<Type, Keys>
 * Omit<Type, keys>
 * Exclude<Type, ExcludedUnion>
 * Extract<Type, Union>
 * NonNullable<Type>
 * Parameters<Type>
 * ConstructorParameters<Type>
 * ReturnType<Type>
 * InstanceType<Type>
 */

// ----------- Partial<Type> ------------
// This makes all the properties of a type optional
type User1 = {
  name: string;
  email: string;
};

type User2 = Partial<User1>; // This is similar to `type User2 = {name?:string; email?:string}`

// ----------------------- Required<Type> -----------------------
// This makes all the properties of a type mandatory
type User3 = {
  email?: string;
  name: string;
};

type User4 = Required<User3>; // This is similar to `type User4 = {name:string; email:string}`
const u: Required<User3> = {
  name: "name",
  email: "email",
};

// ----------------- Readonly<type> ----------------------------
// This makes all the properties of a type readonly
type User5 = Readonly<User1>;
const u2: Readonly<User1> = {
  name: "abc",
  email: "abc@abc.com",
};
u2.name = "kaka"; // Error as the name and email fields are readonly and cannot be modifies after definition

// ---------------- Record<Keys, Type> ----------------------------
// It takes some keys and a type and returns a type with all the mentioned keys and assign the type mentioned to them

type User6 = Record<"name" | "age" | "email", string>;
/**
 * The above statement is same as 
 * type User6 = {
        email: string;
        name: string;
        age: string;
    }
 */
interface UserAgeInfo {
  age: number;
  dob?: string;
}

type Users = "Admin" | "Normal" | "Banned";
const users: Record<Users, UserAgeInfo> = {
  Admin: {
    age: 20,
  },
  Normal: {
    age: 19,
    dob: "10.10.2010",
  },
  Banned: {
    age: 13,
  },
};

console.log(users);

// --------------------------- Pick<Type, keys> --------------------
// It is used to create a type by picking some mentioned keys from a Type or interface
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country?: string;
  readonly pincode: number;
  status: string;
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country" | "pincode">;
/**
 * The above is similar to:
 * type ShippingInfo = {
        city: string;
        state: string;
        country?: string;
        readonly pincode: number;
    }
 */

// ------------------------------ Omit<Type, keys> --------------------------------------
// It creates a type or interface from an existing interface by omitting the mentioned keys. It removes specific properties (keys) from an object type.
type UserInfo = Omit<OrderInfo, "city" | "state" | "country" | "pincode">;
/**
 * The above is similar to:
 * type UserInfo = {
        readonly id: string;
        user: string;
        status: string;
    }
 */

// ------------------------------ Exclude<Type, ExcludedUnion> -----------------------------
// It works on union types and removes types from a union that are assignable to another type.
type MyUnion = string | number | boolean;
type NonBoolUnion = Exclude<MyUnion, boolean>;

type Status = "success" | "error" | "loading" | "unknown";
type FinalStatus = Exclude<Status, "loading" | "unknown">;

// ------------------------------- Extract<Type, Union> -----------------------------------
// It pick matching types from a union
type Status1 = "success" | "error" | 404;

type StringStatus = Extract<Status1, string>; // type StringStatus = "success" | "error"

type Mixed = string | number | (() => void) | ((name: string) => string);

type FunctionsOnly = Extract<Mixed, Function>; // type FunctionsOnly = (() => void) | ((name: string) => string)

// ------------------------------- NonNullable<Type> --------------------------------------
// It Removes only null and undefined from a type.
type Input = string | null | undefined;

type CleanInput = NonNullable<Input>;

type User7 = {
  name: string;
  age?: number;
};

type Age = NonNullable<User7["age"]>; // number

// ------------------------------------ Parameters<Type> --------------------------------
// It is used to create a type with parameters of a function. It returns the parameters as array

const myfunc = (a: number, b: number): number => {
  return a + b;
};
console.log(typeof myfunc);
type MyfuncParams = Parameters<typeof myfunc>; // type MyfuncParams = [a: number, b: number]

// ------------------------------------ ConstructorParameters<Type> -----------------------
// It is same as Parameters<Type> but works on class constructor
class SampleClass {
  readonly id: string;
  name: string;
  constructor(id: string, name: string, private address: string) {
    this.id = id;
    this.name = name;
  }
}

type ClassParams = ConstructorParameters<typeof SampleClass>; // type ClassParams = [id: string, name: string, address: string]

// ------------------------------------ ReturnType<Type> --------------------------------------
// It returns the return type of a function
const myfunc2 = (f: boolean): number | undefined => {
  if (f) {
    return 100;
  }
};

type RTForMyfunc = ReturnType<typeof myfunc2>; // type RTForMyfunc = number | undefined

// ------------------------- InstanceType<type> ----------------------------------
// Given a constructor type, InstanceType returns the type of the object created by new.
class SampleClass2 {
  readonly id: string;
  name: string;
  constructor(id: string, name: string, private address?: string) {
    this.id = id;
    this.name = name;
  }
}
type SampleClassIntanceType = InstanceType<typeof SampleClass2>; // type SampleClassIntanceType = SampleClass2

const sc: SampleClassIntanceType = {
  id: "123",
  name: "ABC",
};

// ----------------------------------------------------- Generics ---------------------------------------------------
type Human = {
  name: string;
  email: string;
};
const getVal = <CustomType>(val: CustomType): CustomType => {
  return val;
};

const ans = getVal(10); // The type of value 10, i.e number, will replace the CustomType here. So Custom type will become number in this case
const ans2 = getVal("haha");

const hum1: Human = {
  name: "haha",
  email: "h@g.com",
};
const ans3 = getVal(hum1);

// explicitly define the type of CustomType
const hum2 = {
  name: "haha2",
  email: "h@g.com",
};
const ans4 = getVal<Human>(hum2); // here we have explicitly defined the type of sent value
console.log(ans4.name);

// Multiple generics
const func1 = <T, U>(n: T, o: U): object => {
  return { n, o };
};
const ans5 = func1(10, "hi");
console.log(ans5); // { n: 10, o: 'hi' }
console.log(ans5.n); // This is throwing error since we mentioned the return type as generalized object, although correct in node js

const fun2 = <T, U>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const ans6 = fun2<string, boolean>("kuku", false);
console.log(ans6); // { n: 'kuku', o: false }
console.log(ans6.o); // Valid, since we are returning the exact object structure

// Extend in generics

interface Person3 {
  name: string;
  email: string;
}

const fun3 = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const ans7 = fun3<string, number>("haha", 10); // Error, since we mentioned U extends T but passing number which does not extends string
const ans8 = fun3<string, string>("haha", "10"); // Valid
const ans9 = fun3<Person, { name: string; email: string; age: number }>(
  <Person>{ name: "Haha", email: "hehe@huu.com" },
  { name: "name", email: "p@h.com", age: 26 }
); // This works fine since our second argument is extending the first argument
console.log(ans9); // { n: { name: 'Haha', email: 'hehe@huu.com' }, o: { name: 'name', email: 'p@h.com', age: 26 }}

// Complex example
interface P {
  name: string;
  age: number;
}

const filterByPeople = <T, U extends keyof T>(
  users: T[],
  property: U,
  val: T[U] // the val will be equal to the value of property U at T
): T[] => {
  return users.filter((user) => user[property] === val);
};

const userList: P[] = [
  {
    name: "ab",
    age: 20,
  },
  {
    name: "bc",
    age: 41,
  },
  { name: "haha", age: 90 },
  { name: "ab", age: 26 },
];

const filteredPeople = filterByPeople(userList, "name", "ab");
const filteredPeopleByAge = filterByPeople(userList, "age", 26);
console.log(filteredPeople); //[ { name: 'ab', age: 20 }, { name: 'ab', age: 26 } ]
// -----------------------------------------------------------------------------------------------------------------
