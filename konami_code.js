const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  var counter = 0;

  document.body.addEventListener('keydown',function(e){

  const key = parseInt(e.which || e.detail);

  if (key === code[counter]) {
    counter++;
    if (counter === code.length - 1) {
      alert("#FucKonami");
      counter = 0;
    }
  } else {
    counter = 0;
  }

});//end addEventListener

};//end init
