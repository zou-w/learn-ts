"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物在叫");
        }
    }
    //Dog继承Animal
    class Dog extends Animal {
        constructor(name, age, address) {
            //如果要新增属性,必需要调用super
            super(name, age);
            this.address = address;
        }
    }
    const dog = new Dog("旺财", 5, "cqupt");
    console.log(dog);
    dog.sayHello();
})();
