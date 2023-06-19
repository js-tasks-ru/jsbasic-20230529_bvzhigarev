function initCarousel() {
  const carouselInner = document.querySelector( ".carousel__inner" );
  const slides = document.querySelectorAll( ".carousel__slide" );
  const offsetWidth = carouselInner.offsetWidth;
  const arrowLeft = document.querySelector( ".carousel__arrow_left" );
  const arrowRight = document.querySelector( ".carousel__arrow_right" );
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
    };
  });
}