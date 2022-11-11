console.log("tocheck");

function giftcode() {
  let giftcode = document.getElementById("giftcode").value;
  let giftcodeL = giftcode.length;

  if (giftcodeL > 2) {
    let applybtn = document.getElementById("applybtn");
    applybtn.style = "background-color:black";
  }
}
let logginedUser = JSON.parse(localStorage.getItem("loginneduser"));
// console.log(logginedUser);
window.onload = async () => {
  let response = await fetch(`http://localhost:3000/cart`);
  let data = await response.json();

  let actualdata = data.filter((el) => {
    return el.user_id == logginedUser.id;
  });

  console.log(actualdata);
};
