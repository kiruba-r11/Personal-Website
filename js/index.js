var skillsContainer = document.getElementsByClassName("skill-box");
var body = document.querySelector("body");
var navbarBG = document.getElementsByClassName("nav-bg-color-light")[0];
var navbarText = document.getElementsByClassName("nav-text-color-light")[0];
var mainHeading = document.getElementsByClassName("heading-text-light");
var headingShadow = document.getElementsByClassName("text-shadow-light");
var skillText = document.getElementsByClassName("skill-text");
var introText = document.getElementById("intro-text");
var introDesc = document.getElementById("intro-desc");
var test = document.getElementsByClassName("test")[0];
var switchButton = document.getElementsByClassName("form-check-input")[0];
var score = document.querySelectorAll("small");
var card = document.getElementsByClassName("card");
var cardTitle = document.getElementsByClassName("card-title");
var cardText = document.getElementsByClassName("card-text");
var edImage = document.querySelectorAll("#education img");


switchButton.addEventListener("click" , function(event) {
	if(event.target.checked === true) {
		applyDarkMode();
	} else {
		removeDarkMode();
	}
});



function applyDarkMode() {

	navbarBG.classList.add("nav-bg-color-dark");
	navbarBG.classList.add("navbar-light");
	navbarBG.classList.remove("navbar-dark");
	navbarText.classList.add("nav-text-color-dark");

	for(var i = 0; i < cardTitle.length; i++) {
		cardTitle[i].classList.add("card-title-dark");
	}

	for(var i = 0; i < mainHeading.length; i++) {
		mainHeading[i].classList.add("heading-text-dark");
		headingShadow[i].classList.add("text-shadow-dark");
	}

	for(var i = 0; i < score.length; i++) {
		score[i].classList.add("score");
	}
	for(var i = 0; i < cardText.length; i++)
		cardText[i].classList.add("card-text-dark");

	for(var i = 0; i < card.length; i++) {
		card[i].classList.add("card-dark");
	}

	for(var i = 0; i < skillText.length; i++) {
		skillText[i].classList.add("skill-text-dark");
	}

	introText.classList.add("intro-text-dark");

	introDesc.classList.add("intro-desc-dark");

	test.classList.add("test-dark");

	body.classList.add("dark-theme");
	for(var i = 0; i < skillsContainer.length; i++) {
		skillsContainer[i].classList.add("skill-box-dark");
		skillsContainer[i].classList.remove("skill-box-light");
	}


}

function removeDarkMode() {
	navbarBG.classList.remove("nav-bg-color-dark");
	navbarBG.classList.add("navbar-dark");
	navbarBG.classList.remove("navbar-light");
	navbarText.classList.remove("nav-text-color-dark");

	for(var i = 0; i < cardTitle.length; i++) {
		cardTitle[i].classList.remove("card-title-dark");
	}

	for(var i = 0; i < score.length; i++) {
		score[i].classList.remove("score");
	}
	for(var i = 0; i < cardText.length; i++)
		cardText[i].classList.remove("card-text-dark");

	for(var i = 0; i < card.length; i++) {
		card[i].classList.remove("card-dark");
	}

	for(var i = 0; i < mainHeading.length; i++) {
		mainHeading[i].classList.remove("heading-text-dark");
		headingShadow[i].classList.remove("text-shadow-dark");
	}

	for(var i = 0; i < skillText.length; i++) {
		skillText[i].classList.remove("skill-text-dark");
	}

	introText.classList.remove("intro-text-dark");

	introDesc.classList.remove("intro-desc-dark");

	test.classList.remove("test-dark");

	body.classList.remove("dark-theme");
	for(var i = 0; i < skillsContainer.length; i++) {
		skillsContainer[i].classList.remove("skill-box-dark");
		skillsContainer[i].classList.add("skill-box-light");
	}
}
