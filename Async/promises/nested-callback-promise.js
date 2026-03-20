function orderFood() {
  return new Promise((resolve) => {
    console.log("Food Ordered");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function prepareFood() {
  return new Promise((resolve) => {
    console.log("Preparing Food");
    setTimeout(resolve, 1000);
  });
}

function sendForDelivery() {
  return new Promise((resolve) => {
    console.log("Out for Delivery");
    setTimeout(resolve, 1000);
  });
}
function foodDelivered() {
  console.log("Food Delivered");
}

orderFood().then(prepareFood).then(sendForDelivery).then(foodDelivered);
