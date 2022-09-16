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
  let prevSearch = JSON.parse(localStorage.getItem("userInput")) || [];
  prevSearch.push(userInput.val());
  localStorage.setItem("userInput", JSON.stringify(prevSearch));
  location.assign('./results.html?' + `q=${userSearch}`)
  userInput.val("");
}

function getArtCarousel(e){
  e.preventDefault();
  let imageName = $(e.target)[0].alt
  location.assign('./results.html?' + `q=${imageName}`)
}
carouselImages.on('click', getArtCarousel);
searchBtn.on('click', getArtworks);

