// const person = {
//     name: 'Tomasz',
//     age: 25,
//     location: {
//         city: 'London',
//         temp: 24
//     }
// }

// const { name, age } = person;
// const { city, temp } = person.location;

// console.log(`${name} is ${age}.`);
// console.log(`It's ${temp} in ${city}.`);


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holida',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// const { publisher } = book
// if (publisherName) {
//     console.log(publisherName);
// };

// const address = ['123 Jupiter Street', 'Philadelphia', 'Pennsilvania', '123443'];

// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [coffee, small, medium, large] = item;
console.log(`A medium ${coffee} costs ${medium}.`)
