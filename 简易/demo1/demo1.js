//属性名后加 ? 表示可选
var b;
b = { name: "孙悟空", age: 18 };
//设置函数结构的类型声明:
//(形参:类型,形参:类型...) =>返回值
var d;
d = function (n1, n2) {
    return n1 + n2;
};
//字符产数组
var e;
e = ["a", "b"];
var g;
g = [1, 2, 3];
var h;
h = ["hello", "world"];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "孙悟空",
    gender: Gender.Male
};
