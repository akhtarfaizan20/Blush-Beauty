import { sidebar } from "./component/sidebar.js";

let side_div = document.getElementById("left");
side_div.innerHTML = sidebar();
window.onload = () => {
  getData();

  createButton();
};
const getData = async () => {
  let response = await fetch(
    `https://blush-beauty.onrender.com/customers?_page=${page}&_limit=6`
  );
  let data = await response.json();

  displayData(data);
};

const displayData = (data) => {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  data.forEach((el) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.date;

    let td2 = document.createElement("td");
    td2.innerText = el.name;

    let td3 = document.createElement("td");
    td3.innerText = el.id;

    let td4 = document.createElement("td");
    td4.innerText = el.phone;

    let td5 = document.createElement("td");
    td5.innerText = "Delete";
    td5.onclick = () => {
      removeUser(el);
    };

    tr.append(td1, td2, td3, td4, td5);
    tbody.append(tr);
  });
};

// function to remove the using using DELETE request
const removeUser = async ({ id }) => {
  let response = await fetch(
    `https://blush-beauty.onrender.com/customers/${id}`,
    {
      method: "DELETE",
    }
  );

  let data = await response.json();
  console.log(data);
  getData();
};

let button = document.getElementById("page");
let page = 1;
const createButton = async () => {
  let response = await fetch(`https://blush-beauty.onrender.com/customers`);

  let data = await response.json();
  let totalButtons = Math.ceil(data.length / 6);
  //   but.innerHTML = "";
  button.innerHTML = "";

  for (let i = 1; i <= totalButtons; i++) {
    let but = document.createElement("button");
    but.innerText = i;
    but.id = i;
    but.onclick = () => {
      page = i;
      getData();
      createButton();
    };
    button.append(but);
  }
};
