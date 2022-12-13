let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector('#name-output');

function onInputChange(event) {
  if (event.currentTarget.value === "") 
    return outputEl.textContent = "Anonymous" 
  inputEl = event.currentTarget.value;
  console.log(inputEl);

  inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
}
