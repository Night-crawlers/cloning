

// let a1 = [10,20,30,40,50]   


// let a2 = a1  // shallow copy

// let a2 = []


// for(let i =0 ; i<a1.length; i++){
//     console.log(a1[i], typeof a1[i])
//     a2[i] = a1[i]
//     // a2[1] = a1[1]
//     // a2[2] = a1[2]
// }

// let a2 = [...a1]  // 


// a1[0] = 100

// console.log(a1)
// console.log(a2)


// shallow copy: 


let arr = [10,20,[30,40],50,[60,[70,75],80],90,100]


// structuredClone


let arr1 = structuredClone(arr) // deep copy


arr[2][0] = 3000


console.log(arr)

console.log(arr1)




// console.log(arr[2][1])
// let t = arr[2] // [30,40]
// console.log(t[0])

// console.log(arr[4][1])

// let brr = [] 


// for(let i = 0; i<arr.length; i++){
//     //   console.log(arr[i], typeof arr[i])
//     //    brr[i] = arr[i]
    
//     if(typeof(arr[i]) == "number"){
//         brr[i] = arr[i]
//         // brr.push(arr[i])
//     }

//     else if(typeof(arr[i]) == "object"){ // arr[i] = [30,40]
//          let c = [] 
//         for(let j = 0; j<arr[i].length; j++){
//            c.push(arr[i][j])
//         }
//         brr[i] = c
//     }

// }

// console.log(arr)

// arr[0] = 1000
// arr[2][0] = 3000

// console.log(arr)

// console.log(brr)