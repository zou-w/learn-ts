# TypeSript

## 1.简介

**TypeScript=>JavaScript的超集**

## 2.快速上手

### 1.安装

有两种主要的方式来获取TypeScript工具：

- 通过npm（Node.js包管理器）
- 安装Visual Studio的TypeScript插件

```shell
 npm install -g typescript
```

### 2.使用

```shell
//将ts文件编译成js文件

tsc 文件

//自动编译
tsc 文件 -w
```

### 3.类型

|  类型   |       例子        |              描述              |
| :-----: | :---------------: | :----------------------------: |
| number  |    1, -33, 2.5    |            任意数字            |
| string  | 'hi', "hi", `hi`  |           任意字符串           |
| boolean |    true、false    |       布尔值true或false        |
| 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
|   any   |         *         |            任意类型            |
| unknown |         *         |         类型安全的any          |
|  void   | 空值（undefined） |     没有值（或undefined）      |
|  never  |      没有值       |          不能是任何值          |
| object  |  {name:'孙悟空'}  |          任意的JS对象          |
|  array  |      [1,2,3]      |           任意JS数组           |
|  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
|  enum   |    enum{A, B}     |       枚举，TS中新增类型       |

**`any`:**

任意类型,相当于关闭TS类型检测

**声明变量如果不指定类型,则为隐式(any)**

**`unknown`:**

未知类型

**不能直接赋值给其他变量**

#### 1.**类型断言**

- 变量as类型

```ts
s = e as string
```

- 类型变量

```ts
s = <string>e
```

#### 2.声明

##### 1.对象

```tsx
//属性名后加 ? 表示可选
let b: {
  name: string;
  age?: number;
  //任意类型的属性
  [propName: string]: any;
};

b = { name: "孙悟空", age: 18 };
```

##### 2.函数

**设置函数结构的类型声明:**
**(形参:类型,形参:类型...) =>返回值**

```ts
let d: (a: number, b: number) => number;
d = function(n1, n2) {
  return n1 + n2;
};
```

##### 3.数组

- 类型[]
- Array<类型>

```ts
let e: string[];
e = ["a", "b"];

let g: Array<number>;
g = [1, 2, 3];
```

##### 4.元组(tuple)

**固定长度的数组**

- [类型,类型,...]

```ts
let h: [string, string];
h = ["hello", "world"];
```

##### 5.枚举(enum)

```ts
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
```

##### 6.类型别名

```ts
//类型别名
type myType = 1 | 2 | 3 | 4;
let m: myType;
```

##### 7.符号

**&表示同时**

```ts
let j: { name: string } & { age: number };
j = { name: "孙悟空", age: 18 };
```

**|表示或者**

```ts
let b: "male" | "female";
b = "male";
b = "female";
```

### 4.配置

**`tsconfig.json`:配置文件**

```shell
//监视所有文件

tsc -w
```

```json
{
  /*include:哪些ts文件需要被编译
     路径: **表示任意目录
            *表示任意文件
  */
  "include": ["./src/**/*"],

  /*exclude:不需要被编译的文件目录
      默认值:["node_modules"]
  */
  "exclude": ["./src/hello/**/*"],
  //继承
  "extends": "",
  //要编译的文件
  "files": ["hello.js"],

  /*编译器配置
   */
  "compilerOptions": {
    //指定编译为es的版本
    "target": "ES6",
    //指定要使用的模块化规范
    "module": "CommonJS",
    //项目中要使用的库
    "lib": ["DOM"],
    //指定编译后文件所在目录
    "outDir": "./dist",
    //将代码合并为一个文件
    "outFile": "./dist/app/js",
    //是否对js文件进行编译
    "allowJs": false,
    //是否检查js代码是否符合代码规范
    "checkJs": false,
    //是否移除注释
    "removeComments": true,
    //不生成编译后的文件
    "noEmit": false,
    //当有错误时不生成编译文件
    "noEmitOnError": true,
    //用来设置编译后的文件是否使用严格模式
    "alwaysStrict": false,
    //不允许隐式any类型
    "noImplicitAny": true,
    //不允许不明确类型的this
    "noImplicitThis": false,
    //检查严格检查空值
    "strictNullChecks": true,
    //所有严格检查的总开关
    "strict": true
  }
}
```

## 3.webpack

### **1.安装:**

- `npm init -y`
- `npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`
- 进行初始配置

**package.json文件:**

```json
"build": "webpack --mode development"
```

**tsconfig.json文件:**

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ES2015",
    "strict": true
  }
}
```

**wenpack.config.js文件:**

```js
//引入一个包
const path = require("path");

//webpack中的排至信息
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",
  //打包文件
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    //打包后文件
    filename: "bundle.js",
  },
  //打包时要使用模块
  module: {
    //指定加载规则
    rules: [
      {
        //规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: "ts-loader",
        //要排除的文件
        exclude: /node-modules/,
      },
    ],
  },
};
```

### 2.下载html插件:

`npm i -D html-webpack-plugin`

**配置webpack.config.js**

```js
//引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin");

//配置html插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: "自定义title",
      //引入模板
      template: "./src/index.html",
    }),
  ],
```

### 3.热启动插件

`webpack-dev-server`

**配置package.json文件:**

```json
"start": "webpack serve --open --mode development"
```

### 4.clean插件

`clean-webpack-plugin`

**配置webpack.config.js文件:**

```json
//引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
```

### 5.最终配置

**webpackage.config.js文件**

```js
//引入一个包
const path = require("path");
//引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
//引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中的排至信息
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",
  //打包文件
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    //打包后文件
    filename: "bundle.js",
  },
  //打包时要使用模块
  module: {
    //指定加载规则
    rules: [
      {
        //规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: "ts-loader",
        //要排除的文件
        exclude: /node-modules/,
      },
    ],
  },

  //配置html插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "自定义title",
      //引入模板
      template: "./src/index.html",
    }),
  ],

  //设置引用模块
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};
```

## 4.Babel

**语法转换,增强兼容性**

### 1.安装

`npm i -D @babel/core @babel/preset-env babel-loader core-js`

**webpack.config.js文件配置:**

**在rules中添加babel配置**

```js
 rules: [
      {
        //规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: [
          //配置babel
          {
            //指定加载器
            loader: "babel-loader",
            //配置babel
            options: {
              //预定义环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  {
                    //兼容的目标浏览器
                    targets: {
                      chrome: "88",
                    },
                    //指定corejs的版本
                    corejs: "3",
                    //使用corejs的方式:按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        //要排除的文件
        exclude: /node-modules/,
      },
    ],
```

## 5.类

**定义类:**

```ts
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}
```

**使用:**

```ts
const p = new Person('孙悟空', 18);
p.sayHello();
```

### 1.封装

#### **1.属性:**

- public(默认值),均可修改

```ts
class Person{
    public name: string; // 写或什么都不写都是public
    public age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以在类中修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 可以通过对象修改
```

- protected

```ts
class Person{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```

- private,只能内部修改

```ts
class Person{
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中不能修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```

#### **2.属性存取器(private中常用):**

读取属性的方法叫做**setter**方法，设置属性的方法叫做**getter**方法

```ts
class Person{
    private _name: string;

    constructor(name: string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

}

const p1 = new Person('孙悟空');
console.log(p1.name); // 通过getter读取name属性
p1.name = '猪八戒'; // 通过setter修改name属性
```

#### 3.静态属性

- 静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用

- 静态属性（方法）使用static开头

```ts
class Tools{
    static PI = 3.1415926;
    
    static sum(num1: number, num2: number){
        return num1 + num2
    }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));
```

#### 4.继承

**将其他类中的属性和方法引入到当前类中**

```ts
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```

**重写:**

发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写

```ts
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    run(){
        console.log(`父类中的run方法！`);
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }

    run(){
        console.log(`子类中的run方法，会重写父类中的run方法！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```

#### 5.super

在子类中可以使用super来完成对父类的引用

```ts
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
```

#### 6.抽象类

**专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例**

使用**abstract**开头

使用**abstract**开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现

```ts
abstract class Animal{
    abstract run(): void;
    bark(){
        console.log('动物在叫~');
    }
}

class Dog extends Animals{
    run(){
        console.log('狗在跑~');
    }
}
```

## 6.接口

**描述一个对象的类型**

- 定义一个类结构
- 类型声明去使用,可以重复声明
- 接口里面所有属性都不能有实际的值

```ts
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
```

定义类时,使类实现一个接口(满足接口的要求)

```ts
 interface myInter {
    name: string;
    sayHello(): void;
  }

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
```

## 7.泛型

定义类型不明确时 ,使用泛型

```TS
function fn<T>(a: T): T {
  return a;
}

let res1 = fn(10); //不指定泛型
let res2 = fn<string>("hello"); //指定泛型
```

类中使用:

```ts
class MyClass<T>{
    prop: T;

    constructor(prop: T){
        this.prop = prop;
    }
}
```

对泛型进行约束:

```ts
interface MyInter{
    length: number;
}

function test<T extends MyInter>(arg: T): number{
    return arg.length;
}
```

使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用。
