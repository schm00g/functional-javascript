let animal = {
    species: 'dog',
    weight: 23,
    sound: 'woof',
}

let { species, sound } = animal;

console.log(`The patient ${species} makes the sound "${sound}"`);

makeSound({
    species: 'dog',
    weight: 23,
    sound: 'woof'
})

makeSound({
    weight: 55,
    sound: 'meow'
})

function makeSound({species = 'animal', sound}){
    console.log(`The ${species} goes "${sound}"`);
}