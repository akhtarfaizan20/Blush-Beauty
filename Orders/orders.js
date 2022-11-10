window.onload = () => {
  getData();
};
const getData = async () => {
  let response = await fetch(`http://localhost:3000/orders`);

  let data = await response.json();
  displayData(data);
};

let displayData = (data) => {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  data.forEach((el) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.id;
    let td2 = document.createElement("td");
    td2.innerText = el.date;
    let td3 = document.createElement("td");
    td3.innerText = el.customer_id;
    let td4 = document.createElement("td");
    td4.innerText = el.phone;
    let td5 = document.createElement("td");
    td5.innerText = el.totalproducts;
    let td6 = document.createElement("td");
    td6.innerText = el.status;

    tr.append(td1, td2, td3, td4, td5, td6);
    tbody.append(tr);
  });
};
