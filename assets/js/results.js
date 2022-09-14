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