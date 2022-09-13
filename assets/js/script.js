let searchBtn = $('#search-button');
let userInput = $('#usersearch');

function getArtworks(event){
    event.preventDefault();
    let userSearch = userInput.val();
    console.log(userSearch);
}

searchBtn.on('click', getArtworks)