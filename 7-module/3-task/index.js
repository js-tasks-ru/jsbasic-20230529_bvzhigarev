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
}