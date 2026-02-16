//get the body element
const body = document.body;

//------Footer Section-------

//Create the footer element
let footer = document.createElement("footer");

//Create a new Date object
const today = new Date();

//Get the current year from the Date object
const thisYear = today.getFullYear();

//get the current footer element
const footerElement = document.querySelector("footer");

// Create a new <p> element
const copyright = document.createElement("p");

// Set the inner HTML with the copyright symbol, my name, and year
//<p>copyright Geetha Balaji 2025</p>

copyright.innerHTML = `\u00A9 Geetha Balaji ${thisYear}`;

// Append the paragraph to the footer
footer.appendChild(copyright);

//Append the footer to the body
body.appendChild(footer);



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

//------Message Form Section------

//Helper function to togggle the section visibility
function toggleMessagesSection() {
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}

// //Initially hide the messages section
toggleMessagesSection();


//Select the message form by name
const messageForm = document.querySelector("form[name=leave_message]");

//Add an event listener for the form submission
messageForm.addEventListener("submit", function (event) {
    //Prevent the page refresh
    event.preventDefault();

    //Retrieve form feild values
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    //log the values to the console 
    console.log("Name: " + userName);
    console.log("Email: " + userEmail);
    console.log("Message: " + userMessage);

    //Select the #messages section
    const messagesSection = document.getElementById("messages");

    //Select the <ul> inside the #messages section
    const messagesList = messagesSection.querySelector("ul");

    //Create a new list item 
    const newMessage = document.createElement("li");

    //Set the inner HTML
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;

    // Create an edit button
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.className = "edit-btn";
    editButton.type = "button";

    //Add click event listener to the edit button
    editButton.addEventListener("click", function () {
        //Find the <span> element that contains the message
        const messageSpan = newMessage.querySelector("span");

        //Prompt the user to for a new message
        const newTest = prompt("Edit your message:", messageSpan.innerText);

        //If the user entered a new message, update the <span> text
        if (newTest !== null) {
            messageSpan.innerText = newTest;
        }
    });


    //append the edit button to the new message
    newMessage.appendChild(editButton);


    // create a remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "remove-btn";
    removeButton.type = "button";

    //Add click event listener to the remove the message
    removeButton.addEventListener("click", function () {
        //Find the<li>
        const entry = removeButton.parentNode;

        //Remove entry
        entry.remove();
        // toggle if no more messages
        toggleMessagesSection();

    });

    //Append the remove button to the new message
    newMessage.appendChild(removeButton);

    //Append the new message to the messages list
    messagesList.appendChild(newMessage);


    // toggle if no more messages
    toggleMessagesSection();


    //clear form after submission
    messageForm.reset();
});










