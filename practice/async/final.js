// Q17. E-commerce Full Flow 🛒
// registerUser
// loginUser
// fetchProducts

function registerUser(userData, callback) {
  if (!userData) {
    return callback("User Data Not Valid", null);
  } else {
    setTimeout(() => {
      console.log("Successfully User Registered");
      callback(null, userData);
    }, 1000);
  }
}

function loginUser(user, callback) {
  if (!user) {
    return callback("User Data Invalid", null);
  }

  setTimeout(() => {
    console.log("User Logged in");
    callback(null, user);
  }, 1000);
}

function fetchProducts(user, callback) {
  if (!user) {
    return callback("Please login first to view products", null);
  }

  setTimeout(() => {
    console.log("Fetched Products");

    callback(null, {
      user,
      products: ["product1", "product2"],
    });
  }, 1000);
}

registerUser("Samarth", (err, user) => {
  if (err) {
    return console.log(err);
  }

  loginUser(user, (err, loggedInUser) => {
    if (err) {
      return console.log(err);
    }

    fetchProducts(loggedInUser, (err, productData) => {
      if (err) {
        return console.log(err);
      }

      console.log(productData);
    });
  });
});
