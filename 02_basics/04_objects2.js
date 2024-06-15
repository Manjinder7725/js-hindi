const tinderUser = new Object()

tinderUser.id="user@email.com"
tinderUser.name="Dante"
tinderUser.IsLoggedIn=false

const regularUser={
    email:"some@email.com",
    fullname:{
        userfullname:{
            firstname:"Dante",
            lastname:"singh",

        }
    }
}

console.log(regularUser.email)
console.log(regularUser.fullname.userfullname.lastname);


const obj1 = { 1:"a" ,2:"b" }
const obj2  = { 3:"c" ,4:"d" }

// const obj3 =  Object.assign({},obj1,obj2)
// console.log(obj3);


const obj3={...obj1,...obj2}

console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("email"))
console.log(tinderUser.hasOwnProperty("IsLogged"))
console.log(tinderUser.hasOwnProperty("IsLoggedIn"))
