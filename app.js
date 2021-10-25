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
  if ((fullnameVal === "", companyNameVal === "", emailVal === "")) {
    alert("Please fill in required fields");
  }
});

//select tab buttons - test with console log
const tablinks = document.querySelectorAll(".tablink");
tablinks.forEach(tablink => console.log("Class list is " + tablink.classList));

//select the contents of all the tabs
const userBios = document.querySelectorAll(".tabcontent");

//loop over tab buttons
//add an event listener for when clicked
// Hide all elements with class="tabcontent" by default
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", () => {
    if (userBios[i].classList.contains("hidden")) {
      userBios[i].classList.remove("hidden");
    } else {
      userBios[i].classList.add("hidden");
    }
  });
}

// let curIndex = 0;
// function changeTeamMember() {
//   curIndex++;
//   console.log(curIndex);
//
// for (let j = 0; j < tabcontent.length; j++) {
//   tabcontent[j].style.display = "block";
// }
// //Remove the background color of all tablinks/ buttons
// for (let j = 0; j < tablinks.length; j++) {
//   tablinks[j].style.backgroundColor = "";
// }
// }
