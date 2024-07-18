

// function hello(a,b,c,d,e,f){

//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)

// }

// let x1 = 10
// let x2 = 20.5
// let x3 = "Hello"
// let x4 = true
// let x5 =[1,2,3,4,5]
// let x6 = {name:"Lavi",age:20}

// hello(x1,x2,x3,x4,x5,x6) // hello(10,20.5,"Hello",true,[1,2,3,4,5],{name:"Lavi",age:20})




function hello(n, fun1){
    console.log(n)
    console.log(fun1)
    fun1()
}




let x = 100 
// let greet = ()=>{console.log("Good Evening")}
function greet(){
    console.log("Hello")
}


hello(x, greet) // callback

// function greet(){
//     console.log("Hello")
// }

// let y = ()=>{console.log("Good Evening")}
// y()



// hello(x, greet())

// hello(x, greet)