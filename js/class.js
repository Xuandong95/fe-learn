/**
 * 面向对象程序设计（OOP）是一种先进的计算机变成设计思想。
 * 早在1960年Simula语言中就用到了改思想，20世纪70年代的Smalltalk语言再面向对象方面堪称经典，编译型语言C++，java更是将其推向顶峰。
 * 面向对象是一种自下而上的设计方式，将对象作为程序的基本单元，把程序和数据封装其中，以提高软件的重用性、灵活性和扩展性。
 * JS也是面向对象语言，其函数，满足对象的思想，拥有封装、继承、多态、抽象性的特点。
 * 尤其在ES6之后，官方提供了class语法糖。让其与java等语言对齐class。
 */

class Person {
  constructor(name, special) {
    this.name = name;
    this.special = special;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getSpecial() {
    return this.special;
  }
  setSpecial(special) {
    this.special.push(special);
  }

  static getAll() {
    return "***********";
  }
}

class Student extends Person {
  constructor(name, special, grade) {
    super(name, special);
    this.grade = grade;
  }

  getName() {
    return "student " + this.name;
  }
  getGrade() {
    return this.grade;
  }
  setGrade(grade) {
    this.grade = grade;
  }
}

const robot = new Person("robot", ["A", "b"]);
const robot1 = new Person("robot1", ["A", "B", "C"]);
robot.setSpecial("K");
console.log(Person.getAll(), robot.getName(), robot.getSpecial());
console.log(Person.getAll(), robot1.getName(), robot1.getSpecial());

const daniel = new Student("daniel", ["a", "b"], "high 2");
console.log(Student.getAll(), daniel.getName(), daniel.getGrade());

/**************************************  华丽的分割  ************************************** */

/**
 * class使用的是寄生组合继承，核心逻辑为
 * 1、创建对象
 * 2、增强对象
 * 3、赋值对象
 */
function inheritPrototype(subType, superType) {
  let prototype = Object.create(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

/**
 * 创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型，然后返回这个临时类型的一个实例
 */
Object.create = function (proto, propertiesObject) {
  // 边界判断们
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new TypeError("Object prototype may only be an Object: " + proto);
  } else if (proto === null) {
    throw new Error(
      "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
    );
  }
  if (typeof propertiesObject !== "undefined")
    throw new Error(
      "This browser's implementation of Object.create is a shim and doesn't support a second argument."
    );

  // 核心
  function F() {}
  F.prototype = proto;

  return new F();
};

/**
 * (1) 在内存中创建一个新对象。
 * (2) 这个新对象内部的[[Prototype]]指针被赋值为构造函数的 prototype 属性。
 * (3) 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
 * (4) 执行构造函数内部的代码（给新对象添加属性）。
 * (5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。
 */
function myNew(Fun) {
  const newObject = {};
  newObject.__proto__ = Fun.prototype;
  return Fun.call(newObject) || newObject;
}
