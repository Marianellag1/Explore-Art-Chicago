let userQuery = location.search.split('=').pop();
let apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${userQuery}&fields=image_id,title,artist_display,gallery_title,on_loan_display,is_on_view`
let artworkDisplay = $('#artwork-conteiner');
let artistBio = $('#artist-info')

function displayArtwork (){    
    fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (results) {
        console.log(results.data);
        for(let i = 0; i < results.data.length; i++){
            let artist = $('<h4>').text(results.data[i].artist_display);
            artistBio.append(artist);
        }
    })
}
console.log(apiUrl);

$(document).ready(displayArtwork)
$(document).ready(function () {
    $('.materialboxed').materialbox();
});


// document.addEventListener("click",function(){
//     alert("it works");
//     var goBack = document.getElementById("back-btn");
//     window.history.back()
// })