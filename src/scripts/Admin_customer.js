window.onload = () => {
  getCustomerData();
};
// fetch api to get the customer data
const getCustomerData = async () => {
  let response = await fetch(`https://blush-beauty.onrender.com/customers`);
  let data = await response.json();

  displayCustomerDetails(data);
};

// this function will display the details of the customers
const displayCustomerDetails = (data) => {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  data.forEach((el) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.dateAdded;

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
  getCustomerData();
};
