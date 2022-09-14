$(document).ready(function(){
 
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true
    });
    
     setInterval(function() {
    
       $('.carousel-slider').carousel('next');
    
     }, 3000);   

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