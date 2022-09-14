$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

let searchBtn = $('#search-button');
let userInput = $('#usersearch');

function getArtworks(event){
    event.preventDefault();
    let userSearch = userInput.val();
    console.log(userSearch);
}

searchBtn.on('click', getArtworks)