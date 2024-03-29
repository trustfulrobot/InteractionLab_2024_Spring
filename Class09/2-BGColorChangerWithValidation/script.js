const colorText = document.querySelector('#color-text');
const colorForm = document.querySelector('#color-form');
const errors = document.querySelector('#errors');
const colorContainer = document.querySelector('#color-container');

const validateColor = (submittedColor) => {
      
  // reset errors 
  errors.innerHTML = "";
  
  const testColor = submittedColor.trim().replace('#','').toLowerCase();
  const legend = '0123456789abcdef';
  for(let i = 0; i < testColor.length; i++){
    if(legend.includes(testColor[i])){
      continue;
    };
    return false;
  };
  return true;
}

colorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValidColor = false;
  const submittedColor = colorForm.colors.value;

  isValidColor = validateColor(submittedColor);
  
  // console.log("submittedColor: ", submittedColor);
  
  if (isValidColor) {
      
    // update h2 text
    colorText.innerHTML = submittedColor;

    // change background color on container
    colorContainer.style.backgroundColor = submittedColor;
    
  } else {
      
    // reset h2 text
    colorText.innerHTML = "#FF0000";

    // reset background color on container
    colorContainer.style.backgroundColor = "#FF0000";
    
    // give user feedback
    errors.innerHTML = "That is not a valid color!";
  }

  
});