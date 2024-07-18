

function hello(n, fun1){
    // n =  7
    // fun1 = 10000
    console.log("Function is starting to execute...")
    console.log(n)
    console.log(fun1)
    fun1()
}

// let greet = ()=>{console.log("Good Evening")}

function greet(){
    console.log("Good Evening")
    return 10000
}

// let y = greet()

// console.log(y)



// let z = greet
// z =()=>{console.log("Good Evening")}

// let z = greet()
// z = 10000


hello(3+4,  greet()) // this is not a correct way to pass a function as an argument