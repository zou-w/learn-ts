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
