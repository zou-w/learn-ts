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
        //添加新方法
        run() {
            console.log(`${this.name}在跑`);
        }
        //重写方法
        sayHello() {
            console.log("汪汪汪");
        }
    }
    class Cat extends Animal {
    }
    const dog = new Dog("旺财", 5);
    console.log(dog);
    dog.sayHello();
    dog.run();
    const cat = new Cat("喵星人", 1);
    console.log(cat);
    cat.sayHello();
})();
