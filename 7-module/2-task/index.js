import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.title;
    this.body;
    this.elem = createElement(
      `
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">
            </h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>  
      `
    );
  }
  setTitle( title ) {
    this.elem.querySelector( '.modal__title' ).textContent = title;
  }
  setBody( body ) {
    this.elem.querySelector( '.modal__body' ).innerHTML = '';
    this.elem.querySelector( '.modal__body' ).append( body );
  }
  open() {
    document.querySelector( 'BODY' ).append( this.elem );
    document.querySelector( 'BODY' ).classList.add( 'is-modal-open' );
    this.elem.addEventListener( 'click', event => {
      if( event.target.closest( '.modal__close' ) ) {
        this.close();
      }
    } );
    document.addEventListener( 'keydown', event => {
      if( event.code === 'Escape' ) {
        this.close();
      }
    } );
  }
  close() {
    this.elem.remove();
    document.querySelector( 'BODY' ).classList.remove( 'is-modal-open' );
    document.removeEventListener( 'keydown', event => {
      if( event.code === 'Escape' ) {
        this.close();
      }
    } );
  }
}  