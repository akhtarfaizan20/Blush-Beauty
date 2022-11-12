console.log("Inside Profile Page");

let data = JSON.parse(localStorage.getItem("loginneduser"));
let name1=data.name;
let phone = data.phone
let id =data.id;

let profiledetail=document.getElementById("profiledetail");
    profiledetail.style="color:white;text-align:center;padding-bottom:15px;padding-top:15px"

function profiledetailappend(){
   
  let h3 = document.createElement("h3");
  h3.innerText = name1;
  let h4 =document.createElement("h4");
  h4.innerText = phone;
  let h5 =document.createElement("h4");

  h5.innerText = id;
  profiledetail.append(h3,h4,h5)
}

profiledetailappend()