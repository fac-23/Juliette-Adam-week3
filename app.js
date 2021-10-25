let form = document.querySelector("form");
let fullName = document.querySelector("#fullname");
let companyName = document.querySelector("#companyName");
let email = document.querySelector("#email");

form.addEventListener("submit", e => {
  e.preventDefault();
  let fullnameVal = fullName.value;
  let companyNameVal = companyName.value;
  let emailVal = email.value;
  console.log(fullnameVal, companyNameVal, emailVal);
  if ((fullnameVal === "" || companyNameVal === "" || emailVal === "")) {
    alert("Please fill in required fields");
  }
});

let tabButton = document.querySelectorAll(".tabLink");
let tabcontent = document.getElementsByClassName("tabcontent");

function changeTeamMember() {
  // Hide all elements with class="tabcontent" by default */
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  //
}
