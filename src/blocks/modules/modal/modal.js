// for modal
document.addEventListener("DOMContentLoaded", function() {
  let modal = document.querySelector(".modal"),
      modalOverlay = document.querySelector(".modal-overlay"),
      modalCloseBtn = document.querySelector(".modal__close-btn"),
      body = document.querySelector("body");

  modalOverlay.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("modal--active");
    modalSuccess.classList.remove("modal-success--active");
    modalOverlay.classList.remove("modal-overlay--active");
    body.classList.remove("body--freeze");
    modalForm.reset();
  });

  modalCloseBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("modal--active");
    modalOverlay.classList.remove("modal-overlay--active");
    body.classList.remove("body--freeze");
    modalForm.reset();
  });
});
