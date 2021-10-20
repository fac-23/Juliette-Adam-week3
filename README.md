# Juliette-Adam-week3

Core Stories
As a potential client, I want to:

- See information about each member of your team so that I can know who you are = adam and juliette
- Browse your website on mobile, tablet, and desktop devices = adam
- Click to navigate to different sections of your webpage = juliette
- Contact you to enquire about working with you = adam
- Visit your website at a publicly accessible domain name = adam

- Additionally, as a visually impaired user, I want to:

- Navigate your website using keyboard controls = juliette
- Hear my screen reader describe the content on your website = juliette
- Acceptance Criteria
- User stories come with acceptance criteria - a detailed scope of a user’s requirements.

- Navigation menu juliette
- ‘About us’ section = Juliette
- Contact form = adam
- A user cannot submit a form without filling out all of the mandatory fields (name, company name, email address) = adam
- Information from the form doesn’t get submitted until the user clicks a button = adam

let tabButton = document.querySelector(".tabLink");

document.getElementById("defaultOpen").click();

function changeTeamMember(cityName, elmnt, color) {
// Hide all elements with class="tabcontent" by default \*/
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

// Remove the background color of all tablinks/buttons
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}

// Show the specific tab content
document.getElementById(cityName).style.display = "block";

// Add the specific color to the button used to open the tab content
elmnt.style.backgroundColor = color;
}
