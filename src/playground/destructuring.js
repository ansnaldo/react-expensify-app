//Object
/*const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 30
    }
};

const {name: firstName = 'Anonymous',age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Anonymous'} = book.publisher;

console.log(publisherName);*/

//Array

const address = ['1299 S Jupiter Street', 'Philadelphia','Pennsylvania','19147'];

const [, city, state = 'New York'] = address;

console.log(`you are in ${city} ${state}`);

const item = ['coffee','$2','$2.5','$2.7'];

const [coffee, ,medium] = item;

console.log(`A Medium ${coffee} costs ${medium}`);
