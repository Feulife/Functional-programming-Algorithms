const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mapped = array.map(x => Math.pow(x, 2));
console.log(mapped);

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = list.map(x => x * x);
console.log(result);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function(element, index, array){
  array[index] = element * element;
});
console.log(numbers);
