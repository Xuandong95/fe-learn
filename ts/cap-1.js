function fun(value) {
    var s = {
        a: "1",
        b: "2"
    };
    return s[value];
}
function fun1() {
    return;
}
function fun2() {
    console.log("fun2");
    throw new Error("error");
}
console.log(fun("a"));
console.log(fun1());
console.log(fun2());
