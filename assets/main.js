$(function () {
  $(document).ready(function(){

    var altoPantalla = $(window).height();
    var anchoPantalla = $(window).width();

    var altoApertura = $('.opening').height();

    // console.log( "alto de pantala: " + altoPantalla );
    // console.log( "ancho de pantala: " + anchoPantalla );
    // console.log( "alto de apertura: " + altoApertura );

    $(window).scroll(function() {
      var valorScroll = window.scrollY;

      //if (anchoPantalla < 768) {
        if ( valorScroll  >= ( altoApertura / 4 ) ) {
          $(".down").fadeOut("fast");
        }

        if ( valorScroll  < ( altoApertura / 4 ) ) {
          $(".down").fadeIn();
        }
      //}
    });
  });
});

function scrollDown() {
  var a = $(".benefits").offset().top;
  var b = a - 70;
  $('html, body').animate({
    scrollTop: b
  }, 800);
}

document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});
