//定义类型不明确时 ,使用泛型

function fn<T>(a: T): T {
  return a;
}

let res1 = fn(10); //不指定泛型
let res2 = fn<string>("hello"); //指定泛型

function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}
fn2<number, string>(123, "hello");

interface Inter {
  length: number;
}
// T extends Inter 表示泛型T必须是Inter实现类
function fn3<T extends Inter>(a: T): number {
  return a.length;
}

//fn3(123);  里面必须有length属性
fn("123"); //字符串.length

class myClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
const my1 = new myClass("孙悟空");
const my2 = new myClass<string>("孙悟空");
