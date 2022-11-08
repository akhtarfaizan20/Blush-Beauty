let form = document.getElementById("login_form");
form.onsubmit = () => {
  event.preventDefault();
  validateAdmin();
};

let validateAdmin = () => {
  let username = form.username.value;
  let password = form.password.value;

  if (username != "Admin") {
    alert("Enter the correct username");
  } else if (password != "admin@123") {
    alert("Enter the correct password");
  } else {
    alert("Login successfull");
    window.location.href = "Admin_Dashboard.html";
  }
};
