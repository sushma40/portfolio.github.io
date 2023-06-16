window.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById('menu');
  var header = document.querySelector('header');

  menu.addEventListener('click', function() {
    this.classList.toggle('fa-times');
    header.classList.toggle('toggle');
  });

  window.addEventListener('scroll', function() {
    menu.classList.remove('fa-times');
    header.classList.remove('toggle');
  });

  window.addEventListener('load', function() {
    menu.classList.remove('fa-times');
    header.classList.remove('toggle');
  });
  document.querySelectorAll('a[href*="#"]').forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

});
