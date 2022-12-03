"use strict";
(function () {
    const obj = {
        name: "张三",
        age: 12,
        gender: "男",
    };
    const obj1 = {
        name: "李四",
        sayHello() {
            console.log(this.name);
        },
    };
    console.log(obj1);
    //定义类时,使类实现一个接口(满足接口的要求)
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("类 and 接口");
        }
    }
    const obj2 = new myClass("other");
    console.log(obj2);
})();
