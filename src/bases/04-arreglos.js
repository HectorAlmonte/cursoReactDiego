//const array = new Array()

const array = [1,2,3,4]

//array.push(1)

let array2 = [...array,5]

const array3 = array2.map(function(x){
  return x * 2
})

console.log(array3)

