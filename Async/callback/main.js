// function orderFood(callback) {
//   console.log("Ordering food...");
// }

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
