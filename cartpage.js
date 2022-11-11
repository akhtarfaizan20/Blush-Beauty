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

  // console.log(actualdata);
  data=[];
  actualdata.forEach(({product})=>data.push(product))

  console.log(data);
  append(data);
};

let cartproduct=document.getElementById("cartproduct")
let totalprice = 0; 

function append(data){
  
  
  data.forEach(function(el){
   let  totalprice2= totalprice+el.price;
  let div=document.createElement("div");
  div.style="display:flex;margin-top:20px"
  let image=document.createElement('img')
  image.style="height:50px;width:50px;margin-right:40px"
  image.src=el.image_url;
  let h4=document.createElement('h4');
  h4.innerText="Rs:"+el.price
  let name =document.createElement("p");
  name.innerText=el.name;
  name.style="margin-left:40px"
  let span=document.createElement("span");
  span.className="material-symbols-outlined";
  span.style="margin-left:70px;margin-top:15px"
  span.innerText="delete"
  div.append(image,h4,name,span);
  cartproduct.append(div)

 let totalprice1 =document.getElementById("totalprice1");
     totalprice1.innerText= "Rs:"+" "+totalprice2;
 let tptopay =document.getElementById("tptopay")
     tptopay.innerText="Rs:"+" "+totalprice2;
    totalprice = totalprice2;
  let  placeorderbtn =document.getElementById("placeorderbtn");
     placeorderbtn.innerText="Rs:"+" "+totalprice2+" "+"Place Order"
  })


}


function placeorder(){
  alert("Order Placed Successfully")
}