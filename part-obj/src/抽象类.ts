(function () {
  //禁止使用类创建对象
  //抽象类 abstract
  //可以添加抽象方法
  abstract class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    //抽象方法定义后,子类必须重写
    abstract sayHello(): void;
  }

  //Dog继承Animal
  class Dog extends Animal {
    address: string;
    constructor(name: string, age: number, address: string) {
      //如果要新增属性,必需要调用super
      super(name, age);
      this.address = address;
    }
    //子类必须重写
    sayHello() {
      console.log("汪汪汪");
    }
  }

  const dog = new Dog("旺财", 5, "cqupt");
  console.log(dog);
  dog.sayHello();
})();
