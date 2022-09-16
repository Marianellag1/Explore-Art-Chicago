let userQuery = location.search.split('=').pop();
let apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${userQuery}&fields=image_id,title,artist_display,gallery_title,on_loan_display,is_on_view&limit=5`
let artworkDisplay = $('#related-art');
let artistBio = $('#artist-info');
   
    fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (results) {
        for(let i = 0; i < results.data.length; i++){
            let artist = $('<h4>').text(results.data[i].artist_display);
            let title = results.data[i].title;
            let galTitle = '';
            if(!results.data[i].is_on_view){
              if(results.data[i].on_loan_display !== null){
                galTitle = (`${results.data[i].on_loan_display.split('<p>')[1].split('</p>')[0].split('for')[0]}`);  
              }
              else{
                galTitle = 'This artwork is not on display.';
              }  
            }
            else{
                galTitle = results.data[i].gallery_title;
            }
            let bioCard = $('<div>', {
                class: 'card-panel col s12 m10 l10 push-m1 push-l1',
                style: 'background-color: #b7cf84'
            })
            let artworkTitle = $('<p>').text(`Title: ${title}`)
            let artworkLocation = $('<p>').text(`Displayed at: ${galTitle}`);
            let artworkID = results.data[i].image_id;
            let artworkUrl = `https://www.artic.edu/iiif/2/${artworkID}/full/843,/0/default.jpg`
            let resultImg = $('<img>', {
                class: 'materialboxed img-center col s12 m6 l6',
                width: '550',
                src: `${artworkUrl}`
            })
            bioCard.append(resultImg, artist, artworkTitle, artworkLocation);
            artworkDisplay.append(bioCard);
        }
    })
artworkDisplay.on('click', '.materialboxed',function(){
    $('.materialboxed').materialbox();
})