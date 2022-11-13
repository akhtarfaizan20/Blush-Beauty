let loginneduser = JSON.parse(localStorage.getItem("loginneduser"));
console.log(loginneduser);

let logpage = document.getElementById("logpage");

window.onload = () => {
  showName();
};

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
