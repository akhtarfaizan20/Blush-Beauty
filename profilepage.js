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
    let response = await fetch(`https://blush-beauty.onrender.com/orders`);
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
  appendtoright(actualdata);
};

// order append at sunday //

function appendtoright(actualdata) {
  let profilemid2 = document.getElementById("profilemid2");
  profilemid2.style = "height:auto;padding-top:20px";
  profilemid2.innerHTML = null;
  // console.log(ttp)
  if (actualdata.length > 0) {
    profilemid2.innerHTML = null;
    actualdata.forEach(function (el) {
      let div = document.createElement("div");
      div.style =
        "display:flex;color:grey;margin-bottom:20px;border:1px solid grey;padding:7px;border-radius:12px";
      let date = document.createElement("h3");
      date.style = "margin-right:40px;color:#fd68a1";
      date.innerText = "Date:" + el.date;
      let phone = document.createElement("h3");
      phone.style = "margin-right:40px";
      let tp = document.createElement("h3");
      tp.style = "margin-right:40px";
      tp.innerText = "Totalproducts:" + el.totalproducts;
      phone.innerText = "Phone:" + el.phone;
      let OS = document.createElement("h3");
      OS.style = "color:green";
      OS.innerText = el.status;

      div.append(date, tp, phone, OS);
      profilemid2.append(div);
    });
  } else {
    let img = document.createElement("img");
    img.style = "250px";
    img.src = "https://media.sugarcosmetics.com/upload/ic_empty_order%201.png";

    let p = document.createElement("p");
    p.style = "font-size:18px;font-weight: bold;";
    p.innerText = "Order is empty";

    let h4 = document.createElement("h4");
    h4.style = "color:grey";
    h4.innerText = "What! No order yet? Get going already!";

    let button = document.createElement("button");
    button.style =
      "width:130px;background-color:black;color:white;border-radius:5px;height:40px";
    button.innerText = "SHOP NOW";
  }
}

// ****************//

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

function logout() {
  localStorage.removeItem("loginneduser");

  window.location.href = "index.html";
}
