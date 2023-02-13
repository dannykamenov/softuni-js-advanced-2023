function createPerson(firstName, lastName){
    let person = {
        firstName: firstName,
        lastName: lastName,
    };
    Object.defineProperty(person, 'fullName', {
        get: function(){
            return `${this.firstName} ${this.lastName}`;
        },
        set: function(value){
            let [firstName, lastName] = value.split(' ');
            if(firstName !== undefined && lastName !== undefined){
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
    });
    return person;
}

let person = createPerson('Peter', 'Ivanov');
console.log(person.fullName);
person.firstName = 'George';
console.log(person.fullName);
person.fullName = 'Nikola Tesla';
console.log(person.firstName)