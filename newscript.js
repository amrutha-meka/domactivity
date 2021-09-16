


//Grab the element from the document for name

let btnFirstName = document.querySelector("#btnFirstName");
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let simleyDiv = document.querySelector("#simleyDiv");
let welcomeText = document.querySelector("#welcomeText");

// let btnFirstName=document.getElementById(btnFirstName);
// console.log(btnFirstName); comes on browser not in terminal

// add an eventListener

btnFirstName.addEventListener("click",displaySecond);

//Defime the function

function displaySecond(){
    // alert(firstName);
    if (firstName.value === "") {
        errMsg.innerHTML="Please enter your Name to click next";
        errMsg.style.color="red";
    }
    else {
        simleyDiv.style.display="block";
        welcomeText.innerHTML=`Welcome ${firstName.value}. What's your mood today? `;
    }
}

//----Select Smiley----
/*//Grab the element from the document for smileys
let sad = document.querySelector("#sad");
let stressed = document.querySelector("#stressed");
let happy = document.querySelector("#happy");
let displayMood = document.querySelector("#displayMood");

// add an eventListener
sad.addEventListener("mouseover",displaySmiley)


//Define the function

function displaySmiley() {
    displayMood.innerHTML = sad.getAttribute("alt");
    displayMood.style.color = "red";
 }*/

 //Grab the element from the document for smileys

 let imgTag = document.querySelectorAll("img");
 let displayMood = document.querySelector("#displayMood");

// add an eventListener

for (let i=0; i < imgTag.length; i++) {
    imgTag[i].addEventListener("mouseover",()=> {
        displayMood.innerHTML = imgTag[i].getAttribute("alt");
        displayMood.style.color = "red";
     })
}

let btnMessage = document.querySelector("#btnMessage");
let displayMessage = document.querySelector("#displayMessage");

// add an eventListener
btnMessage.addEventListener("click", displayLastMessage)
function displayLastMessage() {
    displayMessage.style.display="block";
    displayMessage.innerHTML=`Whatever your mood ${firstName.value} go for a vacation and enjoy <img src="./myimages/beach.jpg" alt="beach" class="beachimg">`;
}


