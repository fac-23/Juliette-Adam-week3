let form = document.querySelector("form");
let fullName = document.querySelector("#fullname");
let companyName = document.querySelector("#companyName");
let email = document.querySelector("#email");
console.log(window);
form.addEventListener("submit", e => {
  e.preventDefault();
  let fullnameVal = fullName.value;
  let companyNameVal = companyName.value;
  let emailVal = email.value;
  console.log(fullnameVal, companyNameVal, emailVal);
  if (fullnameVal === "" || companyNameVal === "" || emailVal === "") {
    alert("Please fill in required fields");
  }
});

//select tab buttons - test with console log
const tablinks = Array.from(document.querySelectorAll(".tablink"));

//select the contents of all the tabs
const userBios = Array.from(document.querySelectorAll(".tabcontent"));

//loop over tab buttons
//add an event listener for when clicked
//check for "hidden" class and add if not there
// Hide all elements with class="hidden"
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", changeTeamMember);
}
//   => {
//     if (userBios[i].classList.contains("hidden")) {
//       userBios[i].classList.remove("hidden");
//     } else {
//       userBios[i].classList.add("hidden");
//     }
//   });
// }

let curIndex = 0;
function changeTeamMember() {
  curIndex++;
  console.log(curIndex);
  if (curIndex > userBios.length - 1) {
    curIndex = 0;
  }
  //hide all userBios
  for (let i = 0; i < userBios.length; i++) {
    userBios[i].classList.add("hidden");
  }
  //show Bio with current index
  userBios[curIndex].classList.remove("hidden");
}

/*let adamBio = document.querySelector("#adam")
let julietteBio = document.querySelector("#juliette")
let adamTab = document.querySelector(".adam")
let julietteTab = document.querySelector(".juliette")
const currentlyHidden = julietteBio;
function screenWidth() {
  if (window.innerWidth <= 640) {
    currentlyHidden.classList.add('hidden')
    adamTab.classList.remove('hidden')
    julietteTab.classList.remove('hidden')
    if (adamBio.classList.contains('hidden')) {
      console.log(currentlyHidden)
      currentlyHidden = adamBio
    }
  } else {
    //console.log(currentlyHidden)
    currentlyHidden.classList.remove('hidden')
    adamTab.classList.add('hidden')
    julietteTab.classList.add('hidden')
  }

}

window.addEventListener('resize', screenWidth)*/
