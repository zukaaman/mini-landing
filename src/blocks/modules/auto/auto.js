// for auto
document.addEventListener("DOMContentLoaded", function(event) {
  let autoBtn = document.querySelector('.auto-list__btn'),
      autoList = document.querySelector('.auto-list');

  autoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    autoList.classList.add('auto-list--open');
    autoBtn.classList.add('auto-list__btn--remove');
  })
});
