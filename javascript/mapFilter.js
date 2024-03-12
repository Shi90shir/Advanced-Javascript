const numbers = [2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

/* Mapping in an Array */

// const numbers = [3 , 4 , 5 , 6 , 7 , 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);


// function square(element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;
// const result = numbers.map(function(element){
//     return element * element;
// })


/* Mapping an Array in a Short Way */

const result = numbers.map(x => x * x);
console.log(result);

/* Mapping an Array in a Short Way */

/* Mapping in an Array */

/* Filter in an Array */

// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);

// const smaller = numbers.filter(x => x < 5);
// console.log(smaller);

const bigger = numbers.filter(x => x > 6);
console.log(bigger);
/* Filter in an Array */
