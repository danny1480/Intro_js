const person ={ 
      name: ' Mohammad ',
      age : 32,
      location:' location is NewYork ',


get details () {
    return `${person.name} ${person.age} ${person.location}`
},
set details (value){
    const parts = value.split(' ');
        this.name = parts[0];
        this.age = parts[1];
        this.location = parts[2];

    }
};



person.name = 'Mohammad is ';
person.age = 33;
person.location = 'and location is NewYork'
console.log(person.details);