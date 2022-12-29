const formInput = document.querySelector('[required]');
const formButton = document.querySelector('button[type="submit"]');

// the default state is 'disabled'
formButton.disabled = true;

// alternative is to use "change" - explained below
formInput.addEventListener("keyup", buttonState);

function buttonState() {
	if (document.querySelector('[required]').value === "") {
		formButton.disabled = true; // return disabled as true whenever the input field is empty
	} else {
		formButton.disabled = false; // enable the button once the input field has content
	}
}

// just verifying that the button has been clicked
formButton.addEventListener("click", () => {
	console.log("You entered:", document.querySelector(".form-input").value);
});