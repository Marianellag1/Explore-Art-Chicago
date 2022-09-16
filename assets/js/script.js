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
let carouselImages = $('.carousel');
let historyButtons = $('#historyBtns');

function getArtworks() {
  let userSearch = userInput.val();
  let prevSearch = JSON.parse(localStorage.getItem("userInput")) || [];
  if(!prevSearch.includes(userInput.val())){
    prevSearch.push(userInput.val());
  }
  localStorage.setItem("userInput", JSON.stringify(prevSearch));
  location.assign('./results.html?' + `q=${userSearch}`);
  userInput.val("");
}

function getArtCarousel(e){
  e.preventDefault();
  let imageName = $(e.target)[0].alt;
  location.assign('./results.html?' + `q=${imageName}`);
}
$(document).ready(function(){
  let searchHistory = JSON.parse(localStorage.getItem('userInput'));
  for(let i = 0; i < searchHistory.length; i++){
    let searchAgain = $('<button>').text(searchHistory[i]);
    searchAgain.attr('class', 'btn prev-btns')
    historyButtons.append(searchAgain);
  }
});
carouselImages.on('click', getArtCarousel);
searchBtn.on('click', getArtworks);
historyButtons.on('click', '.prev-btns', function(ev){
  userInput.val($(ev.target).text());
  getArtworks();
});

