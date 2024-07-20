// HOF => Higher Order Function



// function hello1(fun1){

// }



// function hello1(){

//     return ()=>{
//         console.log("Hello World !!!")
//     }

// }



// function hello1(fun1){

//     return ()=>{
//         console.log("Hello World !!!")
//     }
// }


// function hello(fun1){
    
// }



// let greet = ()=>{
//     console.log("Hello World !!!")
// }

// hello(greet)




function hello(){
    console.log("A")
     return ()=>{
            console.log("B")
     }
}

// hello()()



// let x = hello() // x = ()=>{console.log("B")}
// x()



function hello(){
    console.log("A")
     return ()=>{
        console.log("B")
        return ()=>{
            console.log("C")
        }
 }
}


hello()()()

// let x = hello()

// // x = 
// //     ()=>{
// //         console.log("B")
// //         return ()=>{
// //             console.log("C")
// //         }
// //  }

// let y = x()

// // y = ()=>{console.log("C")}

// y()

