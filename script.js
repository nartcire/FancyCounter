const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", function () {
  // set counter value to 0
  counterValueEl.textContent = 0;

  // reset background color
  counterEl.classList.remove("counter--limit");

  // reset the counter title
  counterTitleEl.textContent = "Fancy Counter";

  // enable increase and decrease button
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur) reset button
  resetButtonEl.blur();
});

decreaseButtonEl.addEventListener("click", decremenetCounter);

increaseButtonEl.addEventListener("click", incremenetCounter);

function incremenetCounter() {
  // get current value of counter
  const currentVal = counterValueEl.textContent;

  // convert value to number type
  const currentValueAsNumber = +currentVal;

  // increment by 1
  let newValue = currentValueAsNumber + 1;

  // check if the newValue > 5
  if (newValue > 5) {
    // if it is, force newValue to be 5
    newValue = 5;

    // give visual indicator that limit has been reached
    counterEl.classList.add("counter--limit");

    // update counter title to say limiat has been reached
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";

    // disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter element with new value
  counterValueEl.textContent = newValue;

  // unfocus (blur) button
  increaseButtonEl.blur();
}

function decremenetCounter() {
  // get current value of counter
  const currentVal = counterValueEl.textContent;

  // convert value to number type
  const currentValueAsNumber = +currentVal;

  // decremenet by 1
  let newValue = currentValueAsNumber - 1;

  // check if new value is < 0
  if (newValue < 0) {
    // force the newValue to be 0 if < 0
    newValue = 0;
  }

  // update counter value with new value
  counterValueEl.textContent = newValue;

  // unfocus (blur) button
  decreaseButtonEl.blur();
}

document.addEventListener("keydown", incremenetCounter);
