console.log("tocheck");
let actualdata;
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
window.onload = () => {
  getData();
  showName();
};
let getData = async () => {
  let response = await fetch(`https://blush-beauty.onrender.com/cart`);
  let data = await response.json();

  actualdata = data.filter((el) => {
    return el.user_id == logginedUser.id;
  });

  console.log(actualdata);
  data = [];
  actualdata.forEach(({ product }) => data.push(product));

  console.log(data);
  append(data);
};
let cartproduct = document.getElementById("cartproduct");
let totalprice = 0;

function append(data) {
  cartproduct.innerHTML = "";
  totalprice = 0;
  data.forEach(function (el, i) {
    let totalprice2 = totalprice + el.price;
    let div = document.createElement("div");
    div.style = "display:flex;margin-top:20px";
    let image = document.createElement("img");
    image.style = "height:50px;width:50px;margin-right:40px";
    image.src = el.image_url;
    let h4 = document.createElement("h4");
    h4.innerText = "Rs:" + el.price;
    let name = document.createElement("p");
    name.innerText = el.name;
    name.style = "margin-left:40px;width:200px;color:grey";
    let span = document.createElement("span");
    span.className = "material-symbols-outlined";
    span.onclick = () => {
      removeFromCart(i);
    };
    span.style = "margin-left:70px;margin-top:15px";
    span.innerText = "delete";
    span.style.cursor = "pointer";
    div.append(image, h4, name, span);
    cartproduct.append(div);
    cartproduct.style = "height:auto";
    let totalprice1 = document.getElementById("totalprice1");
    totalprice1.innerText = "Rs:" + " " + totalprice2;
    let tptopay = document.getElementById("tptopay");
    tptopay.innerText = "Rs:" + " " + totalprice2;
    totalprice = totalprice2;
    let placeorderbtn = document.getElementById("placeorderbtn");
    placeorderbtn.innerText = "Rs:" + " " + totalprice2 + " " + "Place Order";
  });
}

let removeFromCart = async (i) => {
  let id = actualdata[i].id;
  // alert("Item Removed");

  let response = await fetch(`https://blush-beauty.onrender.com/cart/${id}`, {
    method: "DELETE",
  });
  alert("Item has successfully deleted.");
  getData();
};

async function placeorder() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  date = day + "-" + month + "-" + year;
  // alert(date);
  let customer_id = logginedUser.id;
  // alert(customer_id);
  let phone = logginedUser.phone;
  let totalproducts = actualdata.length;
  // alert(totalproducts);
  let status = "Pending";
  let obj = {
    date,
    customer_id,
    phone,
    totalproducts,
    status,
  };

  let response = await fetch(`https://blush-beauty.onrender.com/orders`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();

  await actualdata.forEach(async (el, i) => {
    // alert(id);
    // let response = await fetch(
    //   `https://blush-beauty.onrender.com/cart/${id}`,
    //   {
    //     method: "DELETE",
    //   }
    // );
    // let data = await response.json();
    let response = await removeFromCart(i);
  });
  alert("Order Placed Successfully");
  window.location.href = "/profilepage.html";
}

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
