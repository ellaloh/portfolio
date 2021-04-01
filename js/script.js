function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// Get the modal
var modal = document.getElementById('myModal')
var modalImg = document.getElementById('modalImage')

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0] // first close

// When the user clicks the button, open the modal
/* btn.onclick = function() {
  modal.style.display = "block";
}*/

function showModalWithImage (image){
  modal.style.display = "block";
  modalImg.src = image;
  captionText.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
