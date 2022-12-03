(function () {
  class Person {
    //属性前添加修饰符
    // public   均可修改
    // private  只能内部修改
    // protect
    private name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // //定义方法获取name属性
    // getName() {
    //   return this.name;
    // }
    // //修改name
    // setName(value: string) {
    //   this.name = value;
    // }

    // getAge() {
    //   return this.age;
    // }
    // setAge(value: number) {
    //   //判断
    //   if (value >= 0) {
    //     this.age = value;
    //   }
    // }

    //getter 获取
    //setter 设置
    get name1() {
      return this.name;
    }
    set name1(value: string) {
      this.name = value;
    }
  }

  const per = new Person("孙悟空", 19);
  //属性可以任意被修改,数据不安全
  //per.age = -10;
  console.log(per);
  //   console.log(per.getName());
  //   per.setName("猪八戒");
  //   console.log(per.getName());
  //   console.log("---------");
  //   console.log(per.getAge());
  //   per.setAge(-12);
  //   console.log(per.getAge());

  console.log(per.name1);
  per.name1 = "猪八戒";
  console.log(per.name1);

  //语法糖
  class C {
    constructor(public name: string, public age: number) {}
  }
  const c = new C("xxx", 100);
  console.log(c);
})();
