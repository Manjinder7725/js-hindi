// console.log("D")
// console.log("A")
// console.log("N")
// console.log("T")
// console.log("E")


function SayMyName(){
    console.log
        console.log("D");
console.log("A");
console.log("N");
console.log("T");
console.log("E");
    
}


// SayMyName()

// function addTwoNumbers(number1,number2){


// let result=number1+number2
// return result
// }


// const result=addTwoNumbers(4,4)

// console.log("result:",result)


function addTwoNumbers(number1,number2){


   return number1+number2
    }
    
    
    const result=addTwoNumbers(4,4)
    
    // console.log("result:",result)
    
    // function loginUserMessage(username){
    //     console.log(`${username}  just logged in`)
    // }

    // loginUserMessage("Dante")

    function userLoginMessage(User){
        return`${User} just logged in`
    }

    console.log(userLoginMessage("Vergil"))


// ++++++++++++++++++Parametes+++++++++++++++++++
// jdo pta na hove v kine pararmeters aune ya infinite pararmeter aune odo ki krna xd,
// dor eg shopping cart di list goes on and on , the customers keep adding to the list in programming languagae they are sending pararmeters,
    // +++++++++++++++=Shoppimg Cart++++++++++++++++++

    function CalculateCartPrice(...num1){

        return num1
    }

    console.log((CalculateCartPrice(200,400,500)));
    // here it is called rest operator


    // we have a rest operator to deal with this sceanario  ... is called the rest operator, it is also called the spread operator.It is givethe name according to the usecase. kdo rest  bolna kdo spread bona depends on the usecase.


    const person={
        name:"Kratos",
        Price:199,
    }

    function handleobject(anyobject){
        console.log(`Usernaam is ${anyobject.name} and price is ${anyobject.Price}`)
    }


    handleobject(person) //
    handleobject({name:"yoyo",
        Price:399,
        
    })


    const MyNewArray=[200 ,400, 500]

    function returnSecvalue(Arr){
    return Arr[1]

    }

    console.log(returnSecvalue(MyNewArray));