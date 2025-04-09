class Person {
     constructor(name, age) {
          console.log(`Hello, I'm ${name}`);

          this.name = name
          this.age = age

     }

     talk() {
          console.log(`hello, my names is ${this.name} and I'm ${this.age} years old`);
     }
}
const newPerson1 = new Person("Emerson", 37)
const newPerson2 = new Person("Luana", 37)
const newPerson3 = new Person("isabela", 8)
const newPerson4 = new Person("Giovanna", 22)
const newPerson5 = new Person("Mel", 40)

newPerson1.talk()
newPerson2.talk()
newPerson3.talk()
newPerson4.talk()
newPerson5.talk()
