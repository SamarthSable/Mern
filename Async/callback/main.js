// Understanding Callbacks

// Functions as arguments

// Callback execution flow
// Async callbacks with setTimeout

// Real - world callback examples

function orderFood(callBack) {
  console.log("Food ordered");

  setTimeout(() => {
    console.log("food prepared");
    setTimeout(() => {
      console.log("Out for delivery");
      callBack();
    }, 3000);
  }, 3000);
}

function foodDelivered() {
  console.log("Food delivered");
}

orderFood(foodDelivered);
console.log("Doing something else till food is being prepared");

// Callback Patterns

// Nested callbacks
// Sequential operations

// Callback Hell Problem

// The pyramid of doom
// Why it happens
// Readability issues
// Debugging difficulties
// Maintenance problems

function fetchUserProfile(userId, callback) {
  if (!userId) {
    callback("User Not Defined", null);
  } else {
    callback(null, { name: "Sam", id: 1 });
  }
}

function afterUserFetched(error, user) {
  if (error) {
    console.log(error);
  } else {
    console.log(user);
  }
}

fetchUserProfile(1, afterUserFetched);
