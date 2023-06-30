import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor( categories ) {
    this.categories = categories;
    this.elem = createElement( `<div class="ribbon"></div>` );
    this.render();
    this.ribbonInner = this.elem.querySelector( '.ribbon__inner' );
    this.currentActiveMenuElement;
  }
  render() {
    this.elem.insertAdjacentHTML( "afterbegin",
      `<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>`
    );
    this.elem.insertAdjacentHTML("beforeend", `<div class="ribbon__inner">${this.categories.map( category => {
      return (
        `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`  
      )
    } ).join( '' )}</div>`);
    this.elem.insertAdjacentHTML( "beforeend",
      `<button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>`
    );
    this.elem.addEventListener( 'click', event => {
      if( event.target.closest( '.ribbon__arrow_left' ) ) {
        this.scrollLeft();
      } else if ( event.target.closest( '.ribbon__arrow_right' ) ) {
        this.scrollRight();
      };
    } );
    this.elem.addEventListener( 'click', event => {
      if(event.target.closest( '.ribbon__item' ) ) {
        event.preventDefault();
        event.target.dispatchEvent(
          new CustomEvent( 'ribbon-select', { 
            detail: event.target.getAttribute( 'data-id' ), 
            bubbles: true 
          })
        );
        if( this.currentActiveMenuElement ) {
          this.currentActiveMenuElement.classList.remove( 'ribbon__item_active' );
          this.currentActiveMenuElement = event.target;
          this.currentActiveMenuElement.classList.add( 'ribbon__item_active' )
        } else {
          this.currentActiveMenuElement = event.target;
          this.currentActiveMenuElement.classList.add( 'ribbon__item_active' )
        }
      }
    } ); 
  }
  scrollLeft() {
    this.ribbonInner.scrollBy( -350, 0 );
    if(this.ribbonInner.scrollLeft == 0) {
      this.elem.querySelector( '.ribbon__arrow_left' ).classList.remove( 'ribbon__arrow_visible' );
      this.elem.querySelector( '.ribbon__arrow_right' ).classList.add( 'ribbon__arrow_visible' );
    }
  }
  scrollRight() {
    this.ribbonInner.scrollBy( 350, 0 );
    if(this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth < 1) {
      this.elem.querySelector( '.ribbon__arrow_right' ).classList.remove( 'ribbon__arrow_visible' );
      this.elem.querySelector( '.ribbon__arrow_left' ).classList.add( 'ribbon__arrow_visible' );
    }
  }
}