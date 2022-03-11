let animals = [
    {name: 'FLuffykins', species: 'rabbit'},
    {name: 'Berry', species: 'dog'},
    {name: 'Vivo', species: 'cat'},
    {name: 'Amande', species: 'mouse'},
    {name: 'Woody', species: 'cat'},
    {name: 'Bonehead', species: 'dog'},
];

const names = [];
animals.map(x => names.push(x.name))
console.log(names);

/* 
    VIDEO https://youtu.be/bCqtb-Z5YGQ
*/