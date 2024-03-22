const faqList = document.querySelectorAll(".faq");
const closeModalTriggers = document.querySelectorAll(".modal-close");

const openModal = (faq) => {
  const question = faq.querySelector('.faq-question');
  const answer = document.getElementById(question.dataset.modal);
  answer.classList.add("opened");
}

const closeAllModals = () => {
  let openModals = document.querySelectorAll(".opened");
  openModals.forEach((openModal) => {
    openModal.classList.remove("opened");
  });
}

faqList.forEach((faq) => {
  const question = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');
  faq.addEventListener("click", (event) => {
    openModal(faq);
  });
});

closeModalTriggers.forEach((trigger) => {
  console.log(trigger);
  trigger.addEventListener("click", (event) => {
    closeAllModals();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllModals();
  }
});