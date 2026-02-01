function fetchUserProfile(id, success, error) {
  if (id) {
    success({ name: "Sam", age: 24 });
  } else {
    error("Unable To Fetch Data");
  }
}

function succesCallback(data) {
  console.log(data);
}

function errorCallback(error) {
  console.log(error);
}

fetchUserProfile(1, succesCallback, errorCallback);

fetchUserProfile(null, succesCallback, errorCallback);
