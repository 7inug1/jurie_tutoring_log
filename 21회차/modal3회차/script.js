let body = document.querySelector('.main-body');
let modals = document.querySelectorAll('.modal');
let modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';
let overflowHidden = 'overflow-hidden';

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    onModalClick(modal, {});
  });
});

let modalObj = {
  id: 0,
  run: () => {},
};
