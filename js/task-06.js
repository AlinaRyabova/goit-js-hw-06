const inputEl = document.querySelector("#validation-input");

const handleInputBlur = (event) => {
    const inputLength = Number(event.target.dataset.length);
    const inputValue = event.target.value.length;

    if (inputValue === inputLength){
        event.target.classList.remove(`invalid`);
        event.target.classList.add(`valid`);
    }  else {
        event.target.classList.remove(`valid`);
        event.target.classList.add(`invalid`);
    }
};

inputEl.addEventListener(`blur`, handleInputBlur);




