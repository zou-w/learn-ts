//属性名后加 ? 表示可选
let b: {
  name: string;
  age?: number;
  //任意类型的属性
  [propName: string]: any;
};

b = { name: "孙悟空", age: 18 };

//设置函数结构的类型声明:
//(形参:类型,形参:类型...) =>返回值
let d: (a: number, b: number) => number;
d = function(n1, n2) {
  return n1 + n2;
};

//字符产数组
let e: string[];
e = ["a", "b"];

let g: Array<number>;
g = [1, 2, 3];

let h: [string, string];
h = ["hello", "world"];

enum Gender {
  Male = 0,
  Female = 1,
}

let i: { name: string; gender: Gender };
i = {
  name: "孙悟空",
  gender: Gender.Male,
};
console.log(i.gender === Gender.Male);

//&表示同时
let j: { name: string } & { age: number };
j = { name: "孙悟空", age: 18 };

//类型别名
type myType = 1 | 2 | 3 | 4;
let m: myType;
