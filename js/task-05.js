const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, function(event){
    const name = this.value.trim();
    nameOutput.textContent = name ? name : "Anonymous";
});