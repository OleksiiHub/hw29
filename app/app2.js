function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function () {
    return `Hi. My name is ${this.name} and I'm ${this.age} years old`;
}

const user = new User('Sherlock', 27);
console.log(user.sayHello());