console.log("Inside Profile Page");

let data = JSON.parse(localStorage.getItem("loginneduser"));
let name1 = data.name;
let phone = data.phone;
let id = data.id;

let profiledetail = document.getElementById("profiledetail");
profiledetail.style =
  "color:white;text-align:center;padding-bottom:15px;padding-top:15px";

function profiledetailappend() {
  let h3 = document.createElement("h3");
  h3.innerText = name1;
  let h4 = document.createElement("h4");
  h4.innerText = phone;
  let h5 = document.createElement("h4");

  h5.innerText = id;
  profiledetail.append(h3, h4, h5);
}

window.onload = () => {
  profiledetailappend();
  getData();
  showName();
};
let actualdata;
let getData = async () => {
  try {
    let response = await fetch(`http://localhost:3000/orders`);
    let data = await response.json();

    append(data);
  } catch (error) {
    console.log(error);
  }
};
let append = (data) => {
  let actualdata = data.filter((el) => {
    return el.customer_id == id;
  });

  console.log(actualdata);
};

let loginneduser = JSON.parse(localStorage.getItem("loginneduser"));
// console.log(loginneduser);

let logpage = document.getElementById("logpage");

let showName = () => {
  if (loginneduser) {
    logpage.innerText = "Hi, " + loginneduser.name;
    logpage.onclick = () => {
      window.location.href = "/profilepage.html";
    };
  } else {
    logpage.innerText = "Login/Register";
    logpage.onclick = () => {
      window.location.href = "/loginpage.html";
    };
  }
};

let cart = document.querySelector("#icons>i:nth-child(2)");

cart.onclick = () => {
  if (loginneduser) {
    console.log(loginneduser);
    window.location.href = "/cartpage.html";
  } else {
    alert("Login before checking into cart!");
    window.location.href = "/loginpage.html";
  }
};
