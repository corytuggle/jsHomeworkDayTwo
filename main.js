//==========Exercise #1 ===========//
/*
    Write a function that parses through the below object and displays all of their
    favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFoods() {
    // for(let i = 0; i < Object.values(person3).length; i++) {
    //     console.log(Object.values(person3)[i])
    // }
    for(const key in person3) {
        console.log(`Person3\'s favorite ${key}: ${person3[key]}`)
    }
}

favFoods()


//=======Exercise #2=========//
/*
    Write an object prototype for a Person that has a name and age, has a
    printInfo method, and also has a method that 
    increments the persons age by 1 each time the method is called.
    Create two people using the 'new' keyword, and print 
    both of their infos and increment one persons
    age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
        return '... personal info';
    };

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age     
    this.addAge = () => {
        this.age++;
        console.log(`${name}'s age is now ${this.age}`);
        return '... age increased';
    }
}


let person_one = new Person('Cory', 30)
console.log(person_one.printInfo())

let person_two = new Person('Sydney', 26)
console.log(person_two.addAge())
console.log(person_two.addAge())
console.log(person_two.addAge())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's 
    length is greater than 10. If the length is greater than ten console log 
    "Big word". If the length of the string is less than 10 console log "Small Number"
*/

const isBigOrSmall = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// isBigOrSmall('Bowie')
isBigOrSmall('Where Are We Now?')

.then( (result) => {
    console.log('Big word')
})
.catch( (error) => {
    console.log('Small number')
})