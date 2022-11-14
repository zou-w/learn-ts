class Person {
  //实例属性
  name: string = "孙悟空";
  //使用static定义类属性
  static age: number = 19;
  //readonly 开头表示一个只读的属性无法修改
  readonly address: string = "花果山";

  //定义方法
  sayHello() {
    console.log("hello");
  }
}

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
