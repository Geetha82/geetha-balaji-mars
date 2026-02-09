//get the body element
const body = document.body;

//------Footer Section-------

//Create the footer element
let footer = document.createElement("footer");

//Append the footer to the body
body.appendChild(footer);

//Create a new Date object
const today = new Date();

//Get the current year from the Date object
const thisyear = today.getFullYear();

//get the current footer element
const footerElement = document.querySelector("footer");

// Create a new <p> element
const copyright = document.createElement("p");

// Set the inner HTML with the copyright symbol, my name, and year
//<p>copyright Geetha Balaji 2025</p>

copyright.innerHTML = `\u00A9 Geetha Balaji ${thisyear}`;

// Append the paragraph to the footer
footer.appendChild(copyright);

//Center the text in the footer
footer.style.textAlign = "center";


//------Skills Section-------

//List your technical skills

const skills = ["Javascript", "HTML", "CSS", "Git", "Github"];

//Select the Skills section by id
const skillsSection = document.getElementById("Skills");

//Select the empty list within the Skills section
const skillsList = skillsSection.querySelector("ul");

//Loop through the skills array and create a list item for each skill
for (let i = 0; i < skills.length; i++) {
    //Create a new list item element
    const skill = document.createElement("li");

    //Set the text content of the list item to the current skill
    skill.innerText = skills[i];

    //Append the list item to the skills list
    skillsList.appendChild(skill);
}
