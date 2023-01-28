let makeupData;
let getData = async () => {
  let response = await fetch(`https://blush-beauty.onrender.com/products`);

  makeupData = await response.json();
  console.log(makeupData);
  displayData(makeupData);
};

window.onload = () => {
  getData();
  showName();
};

// // var makeupData = JSON.parse(localStorage.getItem("makeupData"));
// var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
// var wishlistArr = JSON.parse(localStorage.getItem("listItems")) || [];
function filter() {
  var selected = document.querySelector("#filter").value;
  var filterList = makeupData.filter(function (elem) {
    return elem.product == selected;
  });
  displayData(filterList);
  document.querySelector(
    "#displayitem"
  ).textContent = `Makeup - ${filterList.length} items`;
}

function handlerPriceSort() {
  var selected = document.querySelector("#priceSort").value;
  if (selected == "high") {
    makeupData.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  if (selected == "low") {
    makeupData.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (selected == "rating") {
    makeupData.sort(function (a, b) {
      return b.rating - a.rating;
    });
  }
  displayData(makeupData);
}

function displayData(makeupData) {
  document.querySelector("#container-prod").innerHTML = "";
  makeupData.map(function (elem) {
    var div = document.createElement("div");
    div.setAttribute("class", "main");

    var img = document.createElement("img");
    img.setAttribute("src", elem.image_url);
    img.setAttribute("class", "image");

    var head = document.createElement("p");
    head.textContent = elem.name;

    var p = document.createElement("p");
    p.textContent = `Rs. ${elem.price} `;
    var div3 = document.createElement("div");
    div3.setAttribute("id", "shadeFlex");

    var shadeNo = document.createElement("p");
    shadeNo.textContent = elem.shade_no;
    shadeNo.setAttribute("id", "shadeNo--");

    var shadeImg = document.createElement("img");
    shadeImg.setAttribute("src", elem.shade_url);
    shadeImg.setAttribute("id", "shade");

    var div1 = document.createElement("div");
    div1.setAttribute("id", "flex");

    var img1 = document.createElement("img");
    img1.setAttribute("src", elem.star_url);
    img1.setAttribute("id", "star");

    var p1 = document.createElement("p");
    p1.textContent = elem.rating;

    var p2 = document.createElement("p");
    p2.textContent = elem.reviews;

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex1");

    var btn = document.createElement("button");
    btn.setAttribute("id", "btn");
    btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    // btn.innerHTML = "";
    btn.addEventListener("click", function () {
      wishList(elem);
    });

    var btn1 = document.createElement("button");
    btn1.textContent = "ADD TO CART";
    btn1.addEventListener("click", function () {
      addToCart(elem);
    });
    btn1.setAttribute("id", "btn1");
    div3.append(shadeImg, shadeNo);
    div2.append(btn, btn1);
    div1.append(img1, p1, p2);
    div.append(img, head, p, div3, div1, div2);
    document.querySelector("#container-prod").append(div);
  });
}

async function addToCart(elem, index) {
  console.log(elem);
  if (loginneduser) {
    let obj = {
      user_id: loginneduser.id,
      product: elem,
    };
    try {
      let response = await fetch(`https://blush-beauty.onrender.com/cart`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      alert("Item added to Cart");
    } catch (error) {}
  } else {
    alert("Please Login to add product in your cart");
    window.location.href = "/loginpage.html";
  }
}

function wishList(elem) {
  alert("Item added to wish list");
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
