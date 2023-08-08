import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();
    this.addEventListeners();
  }
  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }
  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');
      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;
      this.updatePosition();
      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});
    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }
  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }
  updatePosition() {
    let initialPosition = this.elem.getBoundingClientRect().y + window.scrollY;

    //console.log( 'actualLeftIndent', Math.round(this.elem.getBoundingClientRect().left) );
    //console.log( 'expectedLeftIndent', Math.round(document.querySelector('.container').getBoundingClientRect().right) + 20 );

    let isMobile = document.documentElement.clientWidth <= 767;

    if ( isMobile ) {
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''
      });
    }  
    if( window.scrollY > initialPosition && !isMobile ) {
      this.elem.style.position = 'fixed';
      let leftIndent = Math.min(
        document.querySelector('.container').getBoundingClientRect().right + 20,
        document.documentElement.clientWidth - this.elem.offsetWidth - 10
      ) + 'px';
      Object.assign(this.elem.style, {
        position: 'fixed',
        top: '50px',
        zIndex: 1e3,
        right: '10px',
        left: leftIndent
      });
    }  
    if( window.scrollY == initialPosition && !isMobile ) {
      this.elem.style.position = 'absolute';
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''
      });
    }
  }
}