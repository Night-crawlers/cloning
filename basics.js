

// function hello(){
//     // console.log("Hello World");
//     return "Hello World";
// }


// console.log(hello())


// function hello(){
//     console.log("Hello1")
//     return "Hello2"
//     console.log("Hello3")
// }


// console.log(hello())


// function hello(){
//     console.log("heyyyyyy")
//     // return 100
// }

// let x = hello()

// console.log("x",x)



// default parameters:(2015)

// function hello(a=0,name="anonymous"){
//     // if(a==undefined){
//     //     a = 0
//     // }
//    console.log(a,name)
// }


// hello()



// rest operator: (...)

function sumOfNumbers(t, t1, ...args){ // [20,30,40]
   console.log(t,t1, args)
   // args = [30,40,50 ....]
//    let sum = 0
//    for(let t of args){
//        sum = sum + t
//    }
//    console.log(sum)
}


sumOfNumbers(10,20)

sumOfNumbers(10,20,30)

sumOfNumbers(10,20,30,40,50,60,70,80,90,100)









// let a1 = [1,2,3,4,5,6,7,8,9,10]

// let a2 = [...a1]