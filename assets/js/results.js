let userQuery = location.search.split('=').pop();
let apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${userQuery}&fields=image_id,title,artist_display,gallery_title,on_loan_display,is_on_view&limit=3`
let artworkDisplay = $('#artwork-container');
let artistBio = $('#artist-info')
   
    fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (results) {
        console.log(results.data);
        for(let i = 0; i < results.data.length; i++){
            let artist = $('<h4>').text(results.data[i].artist_display);
            let title = results.data[i].title;
            let galTitle = '';
            if(!results.data[i].is_on_view){
              if(results.data[i].on_loan_display !== null){
                galTitle = (`${results.data[i].on_loan_display.split('<p>')[1].split('</p>')[0].split('for')[0]}`)  
              }
              else{
                galTitle = 'This artwork is not on display.'
              }  
            }
            else{
                galTitle = results.data[i].gallery_title;
            }
            let bioCard = $('<div>', {
                class: 'card-panel teal s12 m12 l12',
                style: 'background-color: #b7cf84!important'
            })
            let artworkInfo = $('<span>').text(`Title: ${title}
            Displayed at: ${galTitle}
            `)
            
            bioCard.append(artist, artworkInfo);
            artistBio.append(bioCard);
        }
    })
console.log(apiUrl);

$(document).ready(function () {
    $('.materialboxed').materialbox();
});


// document.addEventListener("click",function(){
//     alert("it works");
//     var goBack = document.getElementById("back-btn");
//     window.history.back()
// })