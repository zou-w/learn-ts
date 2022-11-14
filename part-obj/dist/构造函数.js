"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        //当前调用方法的对象
        console.log(this);
    }
}
const dog = new Dog("旺财", 2);
console.log(dog);
dog.bark();
