/* 1. Student Profile

Create a Student class with:

properties: name, rollNo, marks

method: getResult() → returns "Pass" if marks ≥ 40 else "Fail" */
class Student {
  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }

  getResult() {
    return this.marks >= 40 ? "Pass" : "Fail";
  }
}

let S1 = new Student("Sam", 20, 45);

console.log(S1.getResult());

/* 
2. Bank Account

Create a BankAccount class with:

properties: accountHolder, balance

methods:

deposit(amount)

withdraw(amount) (should not allow negative balance) */

class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposite(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance <= 0) {
      return "Insufficient Balance";
    } else {
      this.balance -= amount;
    }
  }
}

const ac1 = new BankAccount("Yash", 500);

ac1.deposite(100);
console.log(ac1.balance);
ac1.withdraw(100);

console.log(ac1.balance);

// 3. Rectangle Utility

// Create a Rectangle class with:

// properties: length, breadth

// methods:

// area()

// perimeter()

class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  area() {
    return this.length * this.breadth;
  }

  perimeter() {
    return 2 * this.length + 2 * this.breadth;
  }
}

const r1 = new Rectangle(10, 12);

console.log(r1.area());
console.log(r1.perimeter());

/* 
4. Mobile Phone

Create a Mobile class with:

properties: brand, model, price

method: applyDiscount(percent) */

class Mobile {
  constructor(brnad, model, price) {
    this.brnad = brnad;
    this.model = model;
    this.price = price;
  }

  applydiscount(percent) {
    return this.price - this.price * (percent / 100);
  }
}

const mobile = new Mobile("Vivo", "T2X5G", 12000);

console.log(mobile.applydiscount(10));

/* 
5. Employee Salary System

Create an Employee class with:

name, basicSalary

method calculateSalary()

HRA = 20% of basic

DA = 10% of basic

Total salary = basic + HRA + DA */

class Employee {
  constructor(name, basicSalary) {
    this.name = name;
    this.basicSalary = basicSalary;
  }

  claculateSalary(HRA, DA) {
    return `Total Salary ${this.basicSalary + (this.basicSalary * HRA) / 100 + (this.basicSalary * DA) / 100}`;
  }
}

let E1 = new Employee("Sammer", 12000);
console.log(E1.claculateSalary(20, 10));

/* Private Balance (Encapsulation)

Create a Wallet class:

private property #balance

methods:

addMoney(amount)

spendMoney(amount)

getBalance()

 */

class Wallet {
  #balance = 0;

  addMoney(amount) {
    this.#balance += amount;
  }

  spendMoney(amount) {
    if (amount > this.#balance) {
      console.log("Insufficent Balance");
    } else {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let account1 = new Wallet();

account1.addMoney(500);
account1.spendMoney(600);
account1.spendMoney(100);

console.log(account1.getBalance());

/* User & Admin (Inheritance)

Create:

User class → username, email

Admin class extends User

method deleteUser(userName) */

class User {
  constructor(userName, Email) {
    this.userName = userName;
    this.Email = Email;
  }
}

class Admin extends User {
  deleteUser(userName) {
    console.log(`${userName} deleted`);
  }
}

const user = new Admin("Admin", "admin@123");
user.deleteUser("Admin");

/* Online Order System

Create:

Order class → orderId, items, totalAmount

method calculateTotal()

Create DiscountOrder class:

extends Order

applies 15% discount if total > 1000 */

class Order {
  constructor(orderId, items) {
    this.orderId = orderId;
    this.items = items;
    this.totalAmount = 0;
  }

  calculateTotal() {
    this.totalAmount = this.items.reduce((sum, item) => sum + item.price, 0);

    return this.totalAmount;
  }
}

class DiscountOrder extends Order {
  calculateTotal() {
    let total = super.calculateTotal();
    if (total > 1000) {
      total *= 0.85;
    }

    return total;
  }
}

const order = new DiscountOrder(1, [{ price: 600 }, { price: 500 }]);
console.log(order.calculateTotal());

/* 
Shape Hierarchy

Create:

Shape class → method area()

Circle and Rectangle classes extend Shape

Override area() in child classes */

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return 2 * 3.14 * this.radius;
  }
}

class RectangleShape extends Shape {
  constructor(length, breadth) {
    super();
    this.length = length;
    this.breadth = breadth;
  }

  area() {
    return this.length * this.breadth;
  }
}

console.log(new Circle(5).area());
console.log(new RectangleShape(4, 6).area());
