let count = document.querySelector('#count');
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');


const increase = () => {
  count.innerHTML = parseFloat(count.innerHTML) + 1;
}

const decrease = () => {
  count.innerHTML = parseFloat(count.innerHTML) - 1;
}

inc.addEventListener('click', increase);
dec.addEventListener('click', decrease);
