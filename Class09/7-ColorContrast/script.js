const checkContrastBtn = document.querySelector('#check-contrast-btn');
const contrastValue = document.querySelector('#contrast-check-value');
const colorForm = document.querySelector('#color-form');

const hexToRGB = (hex) => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const checkContrast = (backgroundColor, foregroundColor) => {
  const backgroundRGB = hexToRGB(backgroundColor);
  const foregroundRGB = hexToRGB(foregroundColor);
  // console.log("backgroundRGB: ", backgroundRGB);
  // console.log("foregroundRGB: ", foregroundRGB);
  // console.log("---");
  
  // calculate the relative luminance
  const backgroundLuminance = calcLuminance(backgroundRGB.r, backgroundRGB.g, backgroundRGB.b);
  const foregroundLuminance = calcLuminance(foregroundRGB.r, foregroundRGB.g, foregroundRGB.b);
  // console.log("backgroundLuminance: ", backgroundLuminance);
  // console.log("foregroundLuminance: ", foregroundLuminance);
  // console.log("---");
  
  // calculate the color contrast ratio
  const contrastRatio = backgroundLuminance > foregroundLuminance 
      ? ((foregroundLuminance + 0.05) / (backgroundLuminance + 0.05))
      : ((backgroundLuminance + 0.05) / (foregroundLuminance + 0.05));
  // console.log("contrastRatio: ", contrastRatio);
  
  return contrastRatio;
};

const calcLuminance = (r,g,b) => {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928
        ? v / 12.92
        : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}


checkContrastBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const colorFG = colorForm.color_fg.value;
  const colorBG = colorForm.color_bg.value;
  console.log("colorFG: ", colorFG);
  console.log("colorBG: ", colorBG);

  const contrastVal = checkContrast(colorBG, colorFG);
  let contrastMsg = contrastVal.toFixed(4);
  if (contrastVal < 0.14285) {
    contrastMsg = contrastMsg + " Passes AAA";
  } else if (contrastVal < 0.3333) {
    contrastMsg = contrastMsg + " Passes AA";
  } else {
    contrastMsg = contrastMsg + " Fails";
  }
  // update page with info
  contrastValue.innerHTML = contrastMsg;

});