import { sidebar } from "./component/sidebar.js";


let side_div = document.getElementById("sidebar");
side_div.innerHTML= sidebar();




const option1 = document.getElementById("orders");
option1.addEventListener("click",()=>
{
   window.location.href="Orders.html";
});

const option2 = document.getElementById("product");
option2.addEventListener("click",()=>
{
   window.location.href="Products.html";
});
const option3 = document.getElementById("customer");
option3.addEventListener("click",()=>
{
   window.location.href="customer.html";
});
const option4 = document.getElementById("discount");
option4.addEventListener("click",()=>
{
   window.location.href="Discount.html";
});
const option5 = document.getElementById("price");
option5.addEventListener("click",()=>
{
   window.location.href="Price.html";
});
const option6 = document.getElementById("setting");
option6.addEventListener("click",()=>
{
   window.location.href="Setting.html";
});
const option7 = document.getElementById("Orders");
option7.addEventListener("click",()=>
{
   window.location.href="Orders.html";
});