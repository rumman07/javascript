// function add(x,y){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if(typeof x !== 'number' || typeof y !== 'number'){
//                 reject('x and y must be number')
//             }
//             resolve(`The sum: ${x+y}`)
//         }, 5000) 
//     })
// }

// add('a','5')
//   .then((val) => console.log(val))
//   .catch((err)=>console.log(err))

//Keyword async 
//Async function version
async function add(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw 'x and y must be numbers';
    }
    return x + y;
}

add('a','5')
   .then((val) => console.log(val))
   .catch((err)=>console.log(err))