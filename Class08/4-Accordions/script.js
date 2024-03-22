const faqList = document.querySelectorAll(".faq");

const measureAnswers = (faqs) => {
  faqs.forEach((faq) => {
    const answer = faq.querySelector('.faq-answer');
    const content = faq.querySelector('.content');
    faq.classList.remove('opened');
    answer.style.height = 0;
    answer.dataset.height = content.offsetHeight + "px";
  });
}

measureAnswers(faqList);

// NOTE: if you resize the screen, you will likely change
// all elements' height so you should re-measure them 
// using the "resize" event listener

window.addEventListener("resize", (event) => {
  measureAnswers(faqList);
});

faqList.forEach((faq) => {
  const answer = faq.querySelector('.faq-answer');
  faq.addEventListener("click", (event) => {
    const fullHeight = answer.dataset.height;
    faq.classList.toggle('opened');
    if (faq.classList.contains('opened')) {
        answer.style.height = fullHeight;
    } else {
        answer.style.height = 0;
    }
  });
});