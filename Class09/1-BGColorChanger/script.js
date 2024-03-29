const colorText = document.querySelector('#color-text');
const colorForm = document.querySelector('#color-form');
const colorContainer = document.querySelector('#color-container');

colorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedColor = colorForm.colors.value;
  // console.log("selectedColor: ", selectedColor);
  
  // update h2 text
  colorText.innerHTML = selectedColor;
  
  // change background color on container
  colorContainer.style.backgroundColor = selectedColor;
  
});