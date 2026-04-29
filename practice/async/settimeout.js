// // console.log("start");

// // setTimeout(() => {
// //   console.log("Hello");
// // }, 3000);

// // setInterval(() => {
// //   console.log("Hello Setinterval");
// // }, 2000);

// //q1
// setTimeout(() => {
//   console.log("Welcome back, Student!");
// }, 3000);

// //q2
// let count = 0;
// const order = setInterval(() => {
//   count++;
//   console.log("Complete your order");
//   if (count === 4) {
//     clearInterval(order);
//   }
// }, 1000);

// //q4

// setTimeout(() => {
//   console.log("Book Ticket");
//   setTimeout(() => {
//     console.log("Reserver Hotel");
//     setTimeout(() => {
//       console.log("Send Conformation Email");
//     }, 2000);
//   }, 2000);
// }, 2000);

// function order() {
//   console.log("Order Confirmed");
// }

// function foodPre() {
//   console.log("Food Prepraed");
// }

// function deleivary() {
//   console.log("Delivery partner assigned");
// }

// setTimeout(() => {
//   order();
//   setTimeout(() => {
//     foodPre();
//     setTimeout(() => {
//       deleivary();
//     }, 2000);
//   }, 2000);
// }, 3000);

// function bookTicket(callback) {
//   setTimeout(() => {
//     console.log("Ticket booked");
//     callback();
//   }, 1000);
// }

// function reserveHotel(callback) {
//   setTimeout(() => {
//     console.log("Hotel reserved");
//     callback();
//   }, 1000);
// }

// function sendConfirmationEmail() {
//   setTimeout(() => {
//     console.log("Confirmation email sent");
//   }, 1000);
// }

// bookTicket(() => {
//   reserveHotel(() => {
//     sendConfirmationEmail();
//   });
// });

// function bookTicket() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Ticket booked"), 1000);
//   });
// }

// function reserveHotel() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Hotel reserved"), 1000);
//   });
// }

// function sendConfirmationEmail() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Confirmation email sent"), 1000);
//   });
// }

// bookTicket()
//   .then((res) => {
//     console.log(res);
//     return reserveHotel();
//   })
//   .then((res) => {
//     console.log(res);
//     return sendConfirmationEmail();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// function studnet(marks) {
//   return new Promise((resolve, reject) => {
//     if (marks > 40) {
//       resolve("Student Passes");
//     } else {
//       reject("Student Failed");
//     }
//   });
// }

// studnet(50)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function productDel(isAvailable) {
//   return new Promise((resolve, reject) => {
//     if (isAvailable) {
//       resolve("Delivery available in your area");
//     } else {
//       reject("Delivery not available in your area");
//     }
//   });
// }

// productDel(false)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
// function getUser(callback) {
//   setTimeout(() => {
//     console.log("User data");
//     callback("User data");
//   }, 1000);
// }

// function getPosts(user, callback) {
//   setTimeout(() => {
//     console.log("Posts data");
//     callback("Posts data");
//   }, 1000);
// }

// function getComments(posts, callback) {
//   setTimeout(() => {
//     console.log("Comments data");
//     callback("Comments data");
//   }, 1000);
// }

// // Callback Hell 😈
// getUser((user) => {
//   getPosts(user, (posts) => {
//     getComments(posts, (comments) => {
//       console.log("All done");
//     });
//   });
// });

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("User data");
//     }, 1000);
//   });
// }

// function getPosts(user) {
//   return new Promise(() => {
//     setTimeout(() => {
//       if (user) {
//         resolve("Posts data");
//       } else {
//         reject("User Not send");
//       }
//     }, 1000);
//   });
// }

// function getComments(posts) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Comments data");
//     }, 1000);
//   });
// }

// getUser()
//   .then((userData) => {
//     return userData;
//   })
//   .then();

// async function getUser() {
//   try {
//     const userData = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await userData.json();
//     console.log(data[0]);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getUser();
let n = 5;

for (let i = 0; i < n; i++) {
  let str = "";
  str += " ".repeat(n - i - 1) + "*".repeat(2 * i + 1);
  console.log(str);
}

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let str = "";
//   str += " ".repeat(n - i - 1);
//   str += "*".repeat(2 * i + 1);
//   console.log(str);
// }
