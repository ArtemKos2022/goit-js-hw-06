const controler = document.querySelector('#font-size-control');
const textForChaging = document.querySelector('#text');
controler.addEventListener('input', event => {
  textForChaging.style.fontSize = `${event.currentTarget.value}px`;
});
