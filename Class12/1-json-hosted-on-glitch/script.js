// You can load your local JSON file into your code

const instructorContainer = document.querySelector("#instructor");
let instructorDOM = "";

// The glitch project I'm hosting the file on is "https://gratis-tame-seed.glitch.me"
// The JSON file hosted there is "labInstructor.json";
// Combine the two with a "/" and you have the URL you need to fetch
const jsonURL = "https://gratis-tame-seed.glitch.me/labInstructor.json";


fetch(jsonURL).then(response => {
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