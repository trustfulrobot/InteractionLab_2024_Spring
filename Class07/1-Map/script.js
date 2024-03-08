const fahrenheitTemps = [ 88,65,92,78,66,68,80,85,90,93 ];

function fahrenheitToCelsius(temp){
    return (temp - 32) / 1.8;
}

const celsiusTemps = fahrenheitTemps.map(fahrenheitToCelsius);
console.log("celsiusTemps: ", celsiusTemps);