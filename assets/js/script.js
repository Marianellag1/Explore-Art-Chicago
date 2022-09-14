$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

let searchBtn = $('#search-button');
let userInput = $('#usersearch');

function getArtworks(event){
    event.preventDefault();
    let userSearch = userInput.val();
    location.assign('./results.html?'+`q=${userSearch}`)
    userInput.val(""); 
}

searchBtn.on('click', getArtworks)

