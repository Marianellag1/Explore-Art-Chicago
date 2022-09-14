// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.materialboxed');
//     var instances = M.Materialbox.init(elems, options);
//   });
//    var instance = M.Materialbox.getInstance(elem);
// const imageRef = React.useRef();

// React.useEffect(() => {
//    M.Materialbox.init(imageRef.current);
// }, [imageRef]);

useEffect(() => {
  var elems = document.querySelectorAll(".materialboxed");
  M.Materialbox.init(elems);
}, []);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
  
let userQuery = location.search.split('=').pop();
let apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${userQuery}&fields=image_id,title,artist_display,gallery_title,on_loan_display,is_on_view`
fetch(apiUrl)
.then(function(response){
    return response.json();
})
.then(function(results){
    console.log(results.data);
})
console.log(apiUrl);

//    var instance = M.Materialbox.getInstance(elem);
