let animals = [
    {name: 'FLuffykins', species: 'rabbit'},
    {name: 'Berry', species: 'dog'},
    {name: 'Vivo', species: 'cat'},
    {name: 'Amande', species: 'mouse'},
    {name: 'Woody', species: 'cat'},
    {name: 'Bonehead', species: 'dog'},
]

let names = animals.map(x => x.name)
console.log(names)

let sentence = animals.map(function(animal){
    return `${animal.name} is a ${animal.species}`
})

console.log(sentence)

/* 
    VIDEO https://youtu.be/bCqtb-Z5YGQ
*/