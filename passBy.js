

// pass by values
// function changeMe(a){ // 100
//    a = 20 
//    console.log("Inside", a)
// }


// let a = 100

// changeMe(a)

// console.log("Outside", a)



// pass by reference
// function changeMe(arr){ // 5000th
//     arr[0] = 4000
//     console.log("Inside", arr)
//  }
 
 
//  let arr = [100,200,300] // 5000th
 
//  changeMe(arr)
 
//  console.log("Outside", brr)



// function hello(p1, p2){
//     // p1 = "banana"
//     // p2 = 1000th
//     p1 = "apple"
//     p2[0] = "cherry"
//     console.log("inside", p1, p2)
// }


// // let p1 = "banana"
// // let p2 = ["banana","mango","orange"]

// // hello("bannan", ["banana","mango","orange"])

// console.log("outside", p1, p2)


// // pointers:




function hello(arr){ // arr = 5000th
    arr[0] = 100
    console.log("arr", arr)
}




let brr = [10,20,30]

// whats the value of brr => location where array is created => 5000th ("C/app/abc/xyz/")

hello(brr) // hello(5000th)


console.log("brr", brr)