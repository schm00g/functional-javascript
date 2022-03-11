let me = 'Bruce Wayne'

function greetMe(){
    console.log(`ello ${me}!`)
}

/*  JS uses closures meaning
    there is access to variables 
    outsidethe scope of the functions
*/
me = 'Batman'
greetMe();
