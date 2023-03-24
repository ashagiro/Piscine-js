// shallow copy
// let samePerson = Object.assign({}, person);

let clone1 = JSON.parse(JSON.stringify(person));
let clone2 = JSON.parse(JSON.stringify(person));

let samePerson = person;

person.age = 78;
person.country = 'FR';
