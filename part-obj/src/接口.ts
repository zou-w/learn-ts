(function () {
  //描述一个对象的类型
  type myType = {
    name: string;
    age: number;
  };

  //接口  定义一个类结构
  //类型声明去使用,可以重复声明
  //接口里面所有属性都不能有实际的值
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
  }

  interface myInter {
    name: string;
    sayHello(): void;
  }

  const obj: myInterface = {
    name: "张三",
    age: 12,
    gender: "男",
  };

  const obj1: myInter = {
    name: "李四",

    sayHello() {
      console.log(this.name);
    },
  };
  console.log(obj1);

  //定义类时,使类实现一个接口(满足接口的要求)
  class myClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(): void {
      console.log("类 and 接口");
    }
  }
  const obj2 = new myClass("other");
  console.log(obj2);
})();
