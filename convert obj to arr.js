//Convert and Object to an Array
//write a function that converts an object to an array

function convertObjToArr(obj) {
            // create array of keys from object sent to function
    return Object.keys(obj)
            //map over the array created and return a new array with the key and value of the key
                .map(x => ([x, obj[x]]))
    
}

console.log(convertObjToArr({ name: 'Tom', age: 10 }))
console.log(convertObjToArr({ name: 'Tom', age: 10, color: 'black' }))
console.log(convertObjToArr({ name: 'Tom', age: 10, color: 'black', "favorite food": "mice" }))


