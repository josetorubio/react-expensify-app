// Object destructuring

// console.log('destructuring');

// const person = {
//     name: 'Joseto',
//     age: 39,
//     location:{
//         city:'Zaragoza',
//         temp: 32
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`It´s ${temperature} in ${city}.`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [name,,mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);
