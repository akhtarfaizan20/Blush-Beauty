// console.log("insideloginpage")
function gotoregister(){
    window.location.href="usersignup.html"
}



async function checkuserdata(){
    // console.log("inside")
  let  id=document.getElementById("id").value;
  let pass=document.getElementById("password").value;
  try{
    let res =await fetch(`http://localhost:3000/customers/${id}`)
   let data= await res.json();
   console.log(data)
   if(data.id==undefined){
    alert("Email not Registered")
   }else{
    if(data.password==pass){
        alert("Login Succesfull");
        window.location.href="index.html";
    }else{
        alert("Wrong Password")
    }
   }

  } 

  catch(err){
    alert("Invalid Credential")
  }
}

