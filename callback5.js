

function hello(fun1){
    // fun1 = ()=>{console.log(greet())}
    fun1()
}



function greet(){
     return "Good Evening"
}
// let greet = ()=>{return("Good Evening")}


hello(()=>{console.log(greet())})



// function fun1  (){
//     console.log(greet())
// }


// fun1()
