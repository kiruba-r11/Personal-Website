// AOS Init
AOS.init({
	offset: 110,
	duration: 800,
});

var skillsContainer = document.getElementsByClassName("skill-box");
var body = document.querySelector("body");
var navbarBG = document.getElementsByClassName("nav-bg-color-light")[0];
var navbarText = document.getElementsByClassName("nav-text-color-light")[0];
var navLinks = document.getElementsByClassName("nav-link")
var mainHeading = document.getElementsByClassName("heading-text-light");
var headingShadow = document.getElementsByClassName("text-shadow-light");
var skillText = document.getElementsByClassName("skill-text");
var introText = document.getElementById("intro-text");
var introDesc = document.getElementById("intro-desc");
var test = document.getElementsByClassName("test")[0];
var score = document.querySelectorAll("small");
var card = document.getElementsByClassName("card");
var cardTitle = document.getElementsByClassName("card-title");
var cardText = document.getElementsByClassName("card-text");
var edImage = document.querySelectorAll("#education img");
var svg = document.querySelector("svg");

var blackColor = "rgb(0, 0, 0)";
var whiteColor = "rgb(255, 255, 255)";
var darkGreyColor = "rgb(37, 42, 65)";


svg.addEventListener("click" , function() {
	if(svg.style.backgroundColor === darkGreyColor) {
		removeDarkMode();
		svg.style.fill = whiteColor;
		svg.style.backgroundColor = blackColor;
		svg.innerHTML = '<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>'
	} else {
		applyDarkMode();
		svg.style.fill = whiteColor;
		svg.style.backgroundColor = darkGreyColor;
		svg.innerHTML = '<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>'
	}
})

var currentActive = null;

for(var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click" , function (event) {
		this.classList.add("nav-active");
		if(currentActive != this.textContent) {
			if(currentActive === "About") {
				navLinks[0].classList.remove("nav-active");
			} else if(currentActive === "Education") {
				navLinks[1].classList.remove("nav-active");
			} else if(currentActive === "Skills") {
				navLinks[2].classList.remove("nav-active");
			} else if(currentActive === "Projects") {
				navLinks[3].classList.remove("nav-active");
			} else if(currentActive === "Connect") {
				navLinks[4].classList.remove("nav-active");
			}
		}
		currentActive = this.textContent;
	})
}

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
