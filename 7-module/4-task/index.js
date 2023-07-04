//import createElement from "../../assets/lib/create-element";

export default class StepSlider {
  constructor( { steps, value = 0 } ) {
    this.config = {
      steps: steps,
      value: value 
    };
    this.elem;
    this.render();
  }
  createElement( html ) {
    const div = document.createElement( 'div' );
    div.innerHTML = html;
    return div.firstElementChild;
  };
  render() {
    this.elem = this.createElement(
      `
      <div class="slider">
        <div class="slider__thumb" style="left: ${this.config.value * 10}%;">
          <span class="slider__value">${this.config.value}</span>
        </div>
        <div class="slider__progress" style="width: ${this.config.value * 10}%;"></div>
        <div class="slider__steps">
          <span class="slider__step-active"></span>
          ${'<span></span>'.repeat( this.config.steps - 1)}
        </div>
      </div>
      `
    )
    this.elem.addEventListener( 'click', this.moveSlider );
    let thumb = this.elem.querySelector( '.slider__thumb' );
    thumb.ondragstart = () => false;
    thumb.addEventListener( 'pointerdown', this.onPointerDown );
    this.thumb = thumb;
  }
  moveSlider = ( event ) => {
    let clickPosition = event.clientX - this.elem.getBoundingClientRect().x;
    let clickPositionInner = clickPosition / this.elem.offsetWidth;
    let segments = this.config.steps - 1;
    let approxValue = clickPositionInner * segments;
    let value = Math.round(approxValue);
    let leftPercents = value / segments * 100;
    this.elem.querySelector('.slider__thumb').style.left = `${leftPercents}%`;
    this.elem.querySelector('.slider__progress').style.width = `${leftPercents}%`;
    this.elem.querySelector( '.slider__value' ).innerHTML = value;
    this.elem.querySelector( '.slider__step-active' ).classList.remove( 'slider__step-active' );
    this.elem.querySelector( '.slider__steps' ).children[value].classList.add( 'slider__step-active' );
    this.elem.dispatchEvent(
      new CustomEvent( 'slider-change', { 
        detail: value, 
        bubbles: true 
      } )
    );
  }
  onPointerDown = () => {
    document.addEventListener( 'pointermove', this.onPointerMove );
    document.addEventListener( 'pointerup', this.onPointerUp );
    document.querySelector( '.slider' ).classList.add( 'slider_dragging' );
    
  }
  onPointerMove = ( event ) => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    if (leftRelative < 0) {
      leftRelative = 0;
    }
    if (leftRelative > 1) {
      leftRelative = 1;
    }
    let leftPercents = leftRelative * 100;
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;
    this.approximateValue = leftRelative * ( this.config.steps - 1 );
  }
  onPointerUp = () => {
    document.querySelector( '.slider' ).classList.remove( 'slider_dragging' );
    document.removeEventListener( 'pointermove', this.onPointerMove );
    document.removeEventListener( 'pointerup', this.onPointerUp );
    this.elem.dispatchEvent( new CustomEvent('slider-change', { 
      detail: Math.round(this.approximateValue), 
      bubbles: true 
    } ) );
  }
}