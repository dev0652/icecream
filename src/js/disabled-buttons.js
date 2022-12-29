const formInput = document.querySelector('[required]');
const formButton = document.querySelector('button[type="submit"]');

formButton.disabled = true;

formInput.addEventListener("keyup", buttonState);

function buttonState() {
	if (document.querySelector('[required]').value === "") {
		formButton.disabled = true;
	} else {
		formButton.disabled = false;
	}
}

formButton.addEventListener("click", () => {
	console.log("You entered:", document.querySelector("[required]").value);
});