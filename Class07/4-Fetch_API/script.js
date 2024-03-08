const photosContainer = document.querySelector("#photosContainer");
let allPhotosDOM = "";

fetch('https://api.unsplash.com/search/photos?query=cat&per_page=20&client_id=AMNF-20PBTJjxIvc3Z4Xzcviya4fFnEK_7k-FkhoIm4').then(response => {
  return response.json();
})
.then(response => {
  let catPhotos = response.results;
  // console.log(catPhotos);
  catPhotos.forEach(function(photo) {
      let photoURL = photo.urls.raw + '&w=500';
      let photoDOM = `<img src="${photoURL}" id="${photo.id}" class="cat" alt="${photo.alt_description}" />`;
      allPhotosDOM = allPhotosDOM + photoDOM;
  });
  photosContainer.innerHTML = allPhotosDOM;
})
.catch(error => {
  console.error(error);
});