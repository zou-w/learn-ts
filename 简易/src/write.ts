//number
let num1: number = 1;
//string
let str1: string = "hello";
//boolean
let bool: boolean = false;
//字面量
let num2: 1 | 2 | 3 | 4;
//any
let d: any = 4;
d = "hello";
//unknown
let notSure: unknown = 4;
notSure = "hello";
//void
const fn = (): void => {};
//never
function error(message: string): never {
  throw new Error(message);
}
//object
let obj: object = {};
//array
let arr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b"];
//tuple
let x: [string, number] = ["hello", 10];
//enum
enum color {
  red,
  yellow,
  blue,
}
let color1: color = color.red;
