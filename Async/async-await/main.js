function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ user: "Sam", age: 21 });
      } else {
        reject("User Not found");
      }
    }, 1000);
  });
}

// fetchUser(1).then(console.log).catch(console.error);

async function getuser() {
  try {
    const user = await fetchUser(1);
    console.log(user);
    // if noting is returned it is the same as => resolve()
    // return user => resolve(user)
    return user;
  } catch (ex) {
    console.error(ex);
    //throw means reject(ex);
    throw ex;
  }
}

function fn() {
  console.log("Another Function Called");
}

//async main fuction
getuser()
  .then((user) => console.log("user called", user))
  .catch(() => {
    console.log("Catch block Called");
  });

// getuser();
// fn();
