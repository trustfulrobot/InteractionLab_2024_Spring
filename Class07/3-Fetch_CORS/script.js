// You can load your local JSON file into your code

const instructorContainer = document.querySelector("#instructor");
let instructorDOM = "";

// I also uploaded the same json file to a glitch project so that it'll be properly served: https://fetch-demo--core2-interaction-lab.glitch.me/labInstructor.json


fetch('labInstructor.json').then(response => {
  return response.json();
})
.then(response => {
  
  // console.log(response);
  let labInstructorData = response;
  let listeningTo = labInstructorData.currentlyListeningTo;
  instructorDOM = `<h3>${labInstructorData.firstName} ${labInstructorData.lastName} has been listening to:</h3>`;
  instructorDOM = instructorDOM + "<ul>";
  listeningTo.forEach(function(album){
    instructorDOM = instructorDOM + `<li><em>"${album.title}"</em> by ${album.artist}</li>`;
  })
  instructorDOM = instructorDOM + "</ul>";
  instructorContainer.innerHTML = instructorDOM;
  
})
.catch(error => {
  console.error(error);
});