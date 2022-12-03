class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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
