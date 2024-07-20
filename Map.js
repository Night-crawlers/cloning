
// Examples:


// let arr = []

// map , forEach
// filter
// reduce
// find
// sort


// let arr = [10,20,30,40,50]



// let x = arr.map((value, index)=>{return (value*index)})
// // x = [0,20,60,120,200]
// console.log(x)

// function calculate(v, i){
//     console.log(v*v)
// }





// function map(fun1){ //  fun1 =calculate
//     fun1(value, index)
// }
// I have used the concpet of  callback => true or false, true calculate
// I have used the concept of  hof =>  true or false, map is a hof




// let arr = [10,20,30,40,50]

// let x = arr.map((value, index)=> value*index)

// console.log(x)


// let arr = [10,20,-30,40,-50]

// let x = arr.map((value, index)=> value>0)
// // [true,true,false,true,false]

// console.log(x)


// let arr = [10,21,30,43,50]

// let x = arr.map((value, index)=> {
//      if(value%2==0){
//          return value
//      }
// })

// // [10, undefined,30, undefined, 50]

// console.log(x)





// forEach:

// let arr = [10,20,30,40,50]

// arr.forEach((value, index)=>{console.log(value*index)})





// let arr = [10,21,30,43,50]

// arr.forEach((value, index)=> {
//      if(value%2==0){
//          console.log(value)
//      }
// })

// let arr = [10,20,30,40,50]

// let x = arr.map(value=>value*value)
// // x = [100,400,900,1600,2500]
// console.log(x)