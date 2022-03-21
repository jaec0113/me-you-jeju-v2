const ep20Modal = document.querySelector('#ep20-modal');
const openEp20 = document.querySelector('#ep20-open');
const closeEp20 = document.querySelector('#ep20-close');

openEp20.addEventListener('click', () => {
  ep20Modal.showModal();
})

closeEp20.addEventListener('click', () => {
  ep20Modal.close();
})