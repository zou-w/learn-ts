(function () {
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("动物在叫");
    }
  }

  //Dog继承Animal
  class Dog extends Animal {
    address: string;
    constructor(name: string, age: number, address: string) {
      //如果要新增属性,必需要调用super
      super(name, age);
      this.address = address;
    }
  }

  const dog = new Dog("旺财", 5, "cqupt");
  console.log(dog);
  dog.sayHello();
})();
