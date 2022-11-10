console.log("tocheck")

function giftcode(){
    let giftcode = document.getElementById("giftcode").value;
    let giftcodeL = giftcode.length

   if(giftcodeL>2){
   let  applybtn= document.getElementById("applybtn")
      applybtn.style ="background-color:black"
   }
}

