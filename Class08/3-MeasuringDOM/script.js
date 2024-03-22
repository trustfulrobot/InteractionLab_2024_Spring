const measureMes = document.querySelectorAll('.measure-me');
const measureSections = (sections) => {
    measureMes.forEach((section) => {
        const xValue = section.querySelector('.measurement-x');
        const yValue = section.querySelector('.measurement-y');
        xValue.innerText = section.offsetWidth + "px";
        yValue.innerText = section.offsetHeight + "px";
    });
}
measureSections(measureMes);

// NOTE: if you resize the screen, you will likely change
// all elements' height so you should re-measure them 
// using the "resize" event listener

window.addEventListener("resize", (event) => {
    measureSections(measureMes);
});