"use strict";
class Person {
    constructor() {
        //实例属性
        this.name = "孙悟空";
        //readonly 开头表示一个只读的属性无法修改
        this.address = "花果山";
    }
    //定义方法
    sayHello() {
        console.log("hello");
    }
}
//使用static定义类属性
Person.age = 19;
const per = new Person();
console.log(per);
//访问实例属性
console.log(per.name);
console.log(per.address);
//类属性
console.log(Person.age);
//readonly
// per.address = '水帘洞'
//与属性类似,类方法,实例方法
per.sayHello();
