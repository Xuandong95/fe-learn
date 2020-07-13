interface A {
  a: string;
  b: string;
}
interface A {
  c: string;
}

//
type B = {
  a: string;
};
type keys = keyof A;

function fun(value: keys): A[keys] {
  const s: Partial<A> = {
    a: "1",
    b: "2",
  };
  return s[value];
}
function fun1(): void {
  return;
}
function fun2(): never {
  console.log("fun2");
  throw new Error("error");
}

console.log(fun("a"));
console.log(fun1());
console.log(fun2());

//
type Index = "a" | "b" | "c";
type FromIndex = { [k in Index]?: number };

//
const colors = {
  red: "red",
  blue: "blue",
};
type Colors = keyof typeof colors;

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

// 有人仅仅是添加了 `Circle` 类型
// 我们可能希望 TypeScript 能在任何被需要的地方抛出错误
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;
