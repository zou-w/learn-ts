let name1: string = `jack`;
name1 = "smith";

let age: number = 19;
age = 23;

let sex: boolean = true;
sex = false;

let gender: boolean = false;

function sum(a: number, b: number): number {
  return a + b;
}
const result = sum(1, 2);

let b: "male" | "female";
b = "male";
b = "female";

let d: any;

//没有返回值的函数
function fn(): void {}
