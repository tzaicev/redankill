let clickButton = document.getElementById("click-button");
let clickCounter = document.getElementById("click-counter");
let count = 0;

clickButton.addEventListener("click", function() {
	count++;
	clickCounter.innerHTML = count;
});
