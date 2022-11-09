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
                    targets: {
                      chrome: "88",
                    },
                    corejs: "3",
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

