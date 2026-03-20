// setTimeout(() => {
//   console.log("Stel 1 completed");
//   setTimeout(() => {
//     console.log("Stel 2 completed");
//     setTimeout(() => {
//       console.log("Stel 3 completed");
//     }, 1000);
//   }, 1000);
// }, 1000);

// function orderFood(cb) {
//   console.log("Food Ordered");
//   setTimeout(() => {
//     cb();
//   }, 1000);
// }

// function prepareFood(cb) {
//   console.log("Prepraring Food");
//   setTimeout(() => {
//     cb();
//   }, 1000);
// }

// function sendForDelivery(cb) {
//   console.log("Out for Delivery");
//   setTimeout(() => {
//     cb();
//   }, 1000);
// }

// function foodDelivered() {
//   console.log("Food Delivered");
// }

// orderFood(() => {
//   prepareFood(() => {
//     sendForDelivery(() => {
//       foodDelivered();
//     });
//   });
// });

// function fetchUserProfile(data, cb) {
//   console.log("Fetching user Profile");
//   setTimeout(() => {
//     cb(data);
//   }, 1000);
// }

// function validateProfile(data, cb) {
//   console.log("Validating user Profile");
//   if (data) {
//     setTimeout(() => {
//       cb(data);
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       cb("No Data Found");
//     }, 1000);
//   }
// }

// function displayDashboard(data) {
//   console.log("user Data");
//   console.log(data);
// }

// fetchUserProfile({ name: "Samarth", age: 21 }, (data) => {
//   validateProfile(data, (data) => {
//     displayDashboard(data);
//   });
// });

// fetchUserProfile(null, (data) => {
//   validateProfile(data, (data) => {
//     displayDashboard(data);
//   });
// });

function fetchUserProfile(username, cb) {
  console.log("Fetching user Profile");
  setTimeout(() => {
    if (!username) {
      cb("Unable to fetch user profile", null);
    } else if (username === "r") {
      cb(null, { name: "Rohit", age: 25 });
    } else {
      cb(null, { name: "Geet", age: 17 });
    }
  }, 1000);
}

function validateProfile(profile, cb) {
  console.log("Validating user Profile");
  setTimeout(() => {
    if (profile.age < 18) {
      cb("User needs to be above 18 years old", null);
    } else {
      cb(null, profile);
    }
  }, 1000);
}

function displayProfile(profile) {
  console.log("User Profile:");
  console.log(profile);
}

fetchUserProfile("", (err, profile) => {
  if (err) {
    console.log("Error:", err);
  } else {
    validateProfile(profile, (err, validProfile) => {
      if (err) {
        console.log("Error:", err);
      } else {
        displayProfile(validProfile);
      }
    });
  }
});
