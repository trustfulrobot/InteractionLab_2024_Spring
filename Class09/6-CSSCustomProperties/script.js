const dataSets = document.querySelectorAll('.dataset');

dataSets.forEach((dataset) => {
    const randScale = (Math.random() * 0.333) + 0.75;
    dataset.style.setProperty("--scale", randScale);
});