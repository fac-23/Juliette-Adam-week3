let form = document.querySelector("form")
let fullName = document.querySelector('#fullname')
let companyName = document.querySelector('#companyName')
let email = document.querySelector('#email')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let fullnameVal = fullName.value
    let companyNameVal = companyName.value
    let emailVal = email.value
    console.log(fullnameVal, companyNameVal, emailVal)
    if (fullnameVal === "", companyNameVal === "", emailVal === "") {
        alert("Please fill in required fields")
    }

})

