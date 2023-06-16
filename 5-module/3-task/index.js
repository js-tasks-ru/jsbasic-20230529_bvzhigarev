function initCarousel() {
  let carouselInner = document.querySelector( ".carousel__inner" );
  let slides = document.querySelectorAll( ".carousel__slide" );
  let offsetWidth = carouselInner.offsetWidth;
  let arrowLeft = document.querySelector( ".carousel__arrow_left" );
  let arrowRight = document.querySelector( ".carousel__arrow_right" );
  let currentSlide = 0;
  arrowLeft.style.display = "none";
  document.querySelector( ".carousel" ).addEventListener( "click", event => {
    if( event.target.closest( ".carousel__arrow_right" ) ) {  
      arrowLeft.style.display = '';
      carouselInner.style.transform = `translateX(-${offsetWidth * ( currentSlide + 1 )}px)`;
      currentSlide++;
      if( currentSlide == slides.length - 1 ) {
        arrowRight.style.display = "none";
      };
    };
    if( event.target.closest( ".carousel__arrow_left" ) ) { 
      arrowRight.style.display = '';
      carouselInner.style.transform = `translateX(-${offsetWidth * ( currentSlide - 1 )}px)`;
      currentSlide--;
      if( currentSlide == 0 ) {
        arrowLeft.style.display = "none";
      };
    }
  });
}