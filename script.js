// script.js - form validation + gallery modal + basic feedback

// Bootstrap form validation
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          // If using Formspree, allow submission; show message after delay
          var status = document.getElementById('formStatus');
          status.innerText = 'Submitting...';
          setTimeout(function(){ status.innerText = 'Application submitted — we will contact you soon.'; }, 1200);
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

// Gallery modal
document.querySelectorAll('.gallery-item').forEach(function(img){
  img.addEventListener('click', function(){
    var src = this.getAttribute('src');
    var modalImg = document.getElementById('galleryModalImg');
    modalImg.setAttribute('src', src);
    var modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
  });
});