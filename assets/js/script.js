$(document).ready(function () {

  $('.carousel').carousel({
    fullWidth: true,
    indicators: true
  });

  setInterval(function () {

    $('.carousel-slider').carousel('next');

  }, 3000);

});

let searchBtn = $('#search-button');
let userInput = $('#usersearch');
let carouselImages = $('.carousel')

function getArtworks(event) {
  event.preventDefault();
  let userSearch = userInput.val();
  location.assign('./results.html?' + `q=${userSearch}`)
  userInput.val("");
}

function getArtCarousel(e){
  e.preventDefault();
  let imageID = $(e.target)
  console.log(imageID);
}
carouselImages.on('click', getArtCarousel);
searchBtn.on('click', getArtworks);

