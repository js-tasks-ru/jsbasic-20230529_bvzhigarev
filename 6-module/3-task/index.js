import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
  }
  render() {
    this.elem = document.createElement( "DIV" );
    this.elem.classList.add( "carousel" );
    this.elem.insertAdjacentHTML( "beforeend", 
      `<div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner"></div>`
    );
    for( const slide of this.slides ) {
      this.elem.querySelector( ".carousel__inner" ).insertAdjacentHTML( "beforeend",
        `<div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`
      );
      this.elem.querySelector(`[data-id=${slide.id}]`).onclick = () => {
        this.elem.dispatchEvent( new CustomEvent( "product-add", { 
          detail: slide.id, 
          bubbles: true 
        } ) );
      };
    };
    const carouselInner = this.elem.querySelector( ".carousel__inner" );
    const products = this.elem.querySelectorAll( ".carousel__slide" );
    let offsetWidth;
    const arrowLeft = this.elem.querySelector( ".carousel__arrow_left" );
    const arrowRight = this.elem.querySelector( ".carousel__arrow_right" );
    let currentProduct = 0;
    arrowLeft.style.display = "none";
    this.elem.addEventListener( "click", event => {
      offsetWidth = document.querySelector( ".carousel" ).offsetWidth;
      if( event.target.closest( ".carousel__arrow_right" ) ) {  
        arrowLeft.style.display = '';
        carouselInner.style.transform = `translateX(-${offsetWidth * ( currentProduct + 1 )}px)`;
        currentProduct++;
        if( currentProduct == products.length - 1 ) {
          arrowRight.style.display = "none";
        };
      };
      if( event.target.closest( ".carousel__arrow_left" ) ) { 
        arrowRight.style.display = '';
        carouselInner.style.transform = `translateX(-${offsetWidth * ( currentProduct - 1 )}px)`;
        currentProduct--;
        if( currentProduct == 0 ) {
          arrowLeft.style.display = "none";
        };
      };
    });
  }
}
