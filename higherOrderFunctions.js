/* functions are values
   assignable to variables
   or passed into other functions 
   as (higher order functions) */ 
let triple = function(x){
    return x * 3;
}

let waffle = triple;

console.log(triple(10));
console.log(waffle(1000));

// HOF do COMPOSITION very well

const myArray = [1, 2, 3, 4, 5, 6];
const aboveFour = myArray.filter(x => x > 4);
console.log(aboveFour);

let animals = [
    {name: 'FLuffykins', species: 'rabbit'},
    {name: 'Berry', species: 'dog'},
    {name: 'Vivo', species: 'cat'},
    {name: 'Amande', species: 'mouse'},
    {name: 'Woody', species: 'cat'},
    {name: 'Bonehead', species: 'dog'},
];

var dogs = [];

for(let i = 0; i < animals.length; i++){
    if(animals[i].species === 'dog'){
        dogs.push(animals[i])
    }
}

console.log(`Dog arrray: `, dogs);

// using filter

let isDog = function(animal){
    return animal.species === 'dog';
}

console.log(`Is dog filtered array: `, animals.filter(isDog));

/* 
    VIDEO https://youtu.be/BMUiFMZr7vk 
*/