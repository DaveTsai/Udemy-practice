//The name of the students in the class//
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// forEach function showcase//
let firstName0 = fullNames.forEach(function (Names0) {
    console.log(Names0.first)
})
//map function showcase//
let firstNames1 = fullNames.map(function (Names1) {
    return Names1.first;
})

//With arrow function//

//same as firstName0 //
let firstName2 = fullNames.forEach((Names2) => {
    console.log(Names2.first)
})
//same as firstName1//
let firstNames3 = fullNames.map((Names3) => {
    return Names3.first;
})