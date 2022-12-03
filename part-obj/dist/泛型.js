"use strict";
//定义类型不明确时 ,使用泛型
function fn(a) {
    return a;
}
let res1 = fn(10); //不指定泛型
let res2 = fn("hello"); //指定泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, "hello");
// T extends Inter 表示泛型T必须是Inter实现类
function fn3(a) {
    return a.length;
}
//fn3(123);  里面必须有length属性
fn("123"); //字符串.length
class myClass {
    constructor(name) {
        this.name = name;
    }
}
const my1 = new myClass("孙悟空");
const my2 = new myClass("孙悟空");
