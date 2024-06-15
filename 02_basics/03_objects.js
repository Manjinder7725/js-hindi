//singleton

//object literals
// Object.create
const sym= Symbol("key 1")

const JsUser={
    name :"Dante",
    age:20,
[sym]:"key 1",
    "full name":"Singh",
    location:"Punjab",
    IsLoggedIn:false,
 }

//  JsUser.age=19
//  Object.freeze(JsUser.age)
//  JsUser.age=21

//  console.log(JsUser.age);
//  console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[sym]);
JsUser.greeting = function(){
    console.log("hello Js users sup ");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello Js users sup, ${this.location} `);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
