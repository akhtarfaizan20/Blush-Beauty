function gotologin() {
  window.location.href = "loginpage.html";
}

// async function submituserdata1(e){
//     console.log(1)
//     e.preventDefault();
//     let id=document.getElementById("id").value;
//     let name=document.getElementById("name").value;
//     let password=document.getElementById("password").value;
//     let phone=document.getElementById("phone").value;
//     let date = new Date();
//    let day = date.getDate();
//    let month=date.getMonth()+1;
//    let year=date.getFullYear();
//     date=day+"-"+month+"-"+year;

//  let user_obj={
//     id,
//     name,
//     password,
//     phone,
//     date
//      }

//      let res = await fetch (`https://blush-beauty.onrender.com/customers`,{
//         method: "POST",
//         body:JSON.stringify(user_obj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//      })

//      let data= await res.json();
//      console.log(data)

// //  console.log(234)
// }
// let submituserdata1=()=>{
//     event.preventDefault();
//     register();
// }
let form = document.getElementById("form");
form.onsubmit = (event) => {
  event.preventDefault();
  register();
};
async function register() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value;
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  date = day + "-" + month + "-" + year;

  let user_obj = {
    id,
    name,
    password,
    phone,
    date,
  };
  //   console.log(user_obj);
  try {
    let res = await fetch(`https://blush-beauty.onrender.com/customers`, {
      method: "POST",
      body: JSON.stringify(user_obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (err) {
    alert("Email Id already registered.");
  }
}
