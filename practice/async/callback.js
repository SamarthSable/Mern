// // Create a function greet(name, callback)

// // It should print "Hello <name>"
// // Then call the callback function
// function greet(name, callback) {
//   console.log(`hello ${name}`);
//   callback(name);
// }

// function grettings(name) {
//   console.log(` welcome ${name},Callback Callled`);
// }

// greet("samarth", grettings);

// // Write a function processNumber(num, callback)

// // Multiply number by 2
// // Pass result to callback

// function processNumber(num, callback) {
//   let result = num * 2;
//   callback(result);
// }

// function printResult(result) {
//   console.log(`Result : ${result}`);
// }

// processNumber(5, printResult);

// // Create a function loginUser(username, callback)

// // Simulate login delay
// // Then call callback with "Welcome <username>"

// function loginUser(user, callback) {
//   setTimeout(() => {
//     callback(user);
//   }, 2000);
// }

// function welcomeUser(user) {
//   console.log(`Welcome ${user}`);
// }

// loginUser("Rushi", welcomeUser);

// // Simulate this flow using callbacks:

// // Get User
// // Get Orders
// // Get Order Details

// // function getUser(user, callback) {
// //   if (!user) {
// //     callback("User not Found", null);
// //   } else {
// //     callback(null, user);
// //   }
// // }
// // function getOrders(user, callback) {
// //   setTimeout(() => {
// //     console.log(`Getting Orders for ${user}`);
// //     callback();
// //   });
// // }
// // function getOrderDetails() {
// //   setTimeout(() => {
// //     console.log("Here Are Order Details");
// //   });
// // }

// // getUser("Samarth", (error, user) => {
// //   if (error) {
// //     return error;
// //   } else {
// //     getOrders(user, getOrderDetails);
// //   }
// // });

// // Write nested callbacks like:

// // getUser(() => {
// //   getPosts(() => {
// //     getComments(() => {
// //       console.log("Done");
// //     });
// //   });
// // });

// function getUser(user, callback) {
//   if (!user) return callback("User Not Found ", null);

//   setTimeout(() => {
//     console.log("User:", user);
//     callback(null, user);
//   }, 2000);
// }
// function getPosts(user, callback) {
//   setTimeout(() => {
//     console.log(`Fetching Posts for user ${user}`);
//     callback(null, ["post1", "post2"]);
//   }, 2000);
// }
// function getComments(post) {
//   console.log(`Getting Comments for post ${post[0]}`);
// }

// getUser("Samarth", (err, user) => {
//   if (err) console.log(err);
//   getPosts(user, (err, post) => {
//     if (err) console.log(err);
//     getComments(post);
//   });
// });

// function getData(id, callback) {
//   setTimeout(() => {
//     callback(id);
//   }, 2000);
// }

// function printData(data) {
//   console.log(data);
// }

// getData(5, printData);

// function getData(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("data ");
//     }, 2000);
//   });
// }

// // getData(5).then((res) => {
// //   console.log(res);
// // });
// async function data() {
//   const dataid = await getData(5);
//   console.log(dataid);
// }

// data();

// 🔹 Q3: E-commerce Flow 🛒 (Important)
// Steps:
// loginUser(username)
// addToCart(user, product)
// makePayment(cart)
// placeOrder(payment)

// function loginUser(user, callback) {
//   if (!user) return callback("User Not Found", null);

//   setTimeout(() => {
//     console.log("User logged in");
//     callback(null, user);
//   }, 1000);
// }

// function addToCart(user, callback) {
//   setTimeout(() => {
//     const cart = ["product1", "product2"];
//     console.log("Items added to cart");
//     callback(null, { user, cart });
//   }, 1000);
// }

// function makePayment(obj, callback) {
//   setTimeout(() => {
//     if (obj.cart.length === 0) return callback("Cart is empty", null);

//     console.log("Payment successful");
//     callback(null, obj);
//   }, 1000);
// }

// function placeOrder(obj, callback) {
//   setTimeout(() => {
//     console.log(`${obj.user} placed order for ${obj.cart.join(", ")}`);
//     callback(null, "Order placed");
//   }, 1000);
// }

// chaining
// loginUser("Samarth", (err, user) => {
//   if (err) return console.log(err);

//   addToCart(user, (err, cartData) => {
//     if (err) return console.log(err);

//     makePayment(cartData, (err, paymentData) => {
//       if (err) return console.log(err);

//       placeOrder(paymentData, (err, msg) => {
//         if (err) return console.log(err);

//         console.log(msg);
//       });
//     });
//   });
// });

function loginUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) reject("User NOt Found");
      console.log("User logged in");
      resolve(user);
    }, 1000);
  });
}

function addToCart(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) reject("User NOt Found");
      const cart = ["product1", "product2"];
      console.log("Items added to cart");
      resolve({ user, cart });
    }, 1000);
  });
}

function makePayment(obj) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (obj.cart.length === 0) reject("Cart is empty");

      console.log("Payment successful");
      resolve(obj);
    }, 1000);
  });
}

function placeOrder(obj) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${obj.user} placed order for ${obj.cart.join(", ")}`);
      resolve("Order placed");
    }, 1000);
  });
}

// loginUser("Samarth")
//   .then((res) => {
//     return addToCart(res);
//   })
//   .then((cartData) => {
//     return makePayment(cartData);
//   })
//   .then((res) => {
//     return placeOrder(res);
//   })
//   .then((res) => {
//     console.log(res);
//   });

async function orderDettails() {
  const user = await loginUser("Samarth");
  const cartData = await addToCart(user);
  const paymentData = await makePayment(cartData);
  const orderPlace = await placeOrder(paymentData);
  console.log(orderPlace);
}

orderDettails();
