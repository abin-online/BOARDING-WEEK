const Person = {
    name: 'Abin',
    age: 23,
    place: 'Chennai',
    callMe: function (msg = ''){
        console.log(`Hi ${this.name} ${msg}`);
    }
}

const Person1 = {
    name: 'Anu',
    age: 22
}

Person.callMe.call(Person1)
Person.callMe.apply(Person1, ['podi'])
Person.callMe.bind(Person1)()

