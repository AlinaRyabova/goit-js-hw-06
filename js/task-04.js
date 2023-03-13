const counter = document.querySelector(`#counter`);
const valueEl = document.querySelector(`#value`);

const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener(`click`, () => {
    counterValue -=1;
    valueEl.textContent = counterValue;
    console.log(counterValue);
});
incrementBtn.addEventListener(`click`, () => {
    counterValue +=1;
    valueEl.textContent = counterValue;
    console.log(counterValue);
});





