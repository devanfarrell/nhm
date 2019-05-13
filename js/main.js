$(window).scroll(function () {
  var navBar = document.getElementById('navbar');
  var content = document.getElementById('content');
  var logo = document.getElementById('nav-logo');
  var wScroll = $(this).scrollTop();
  // between 200px and 500px move the navbar back
  if (100 < wScroll) {
    logo.style.height = '45px'
  } else {
    logo.style.height = '70px'
    content.style.marginTop = "0px";
  }
  if (100 < wScroll && wScroll < 500) {
    navBar.style.top = '-100px';
  } else {
    navBar.style.top = '0px';
  }
  // make the navbar fixed past 200px
  if (350 < wScroll) {
    navBar.style.position = 'fixed';
    content.style.marginTop = "96px";
  } else if (100 < wScroll && wScroll <= 350) {
    navBar.style.position = 'relative';
    content.style.marginTop = "25px";
  } else {
    navBar.style.position = 'relative';
  }
});