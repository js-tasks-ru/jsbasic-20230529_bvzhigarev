import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
  }
  render() {
    this.elem = createElement(
      `<div class="products-grid">
        <div class="products-grid__inner">
        </div>
      </div>`
    );
    for( let product of this.products ) {
      if( !this.isFiltered( product ) ) {
        this.elem.querySelector( '.products-grid__inner' ).append( new ProductCard( product ).elem );
      }
    }  
  }
  updateFilter( filters ) {
    for( let key of Object.keys( filters ) ) {
      this.filters[key] = filters[key];
    }
    for( let product of this.elem.querySelectorAll( '.card' ) ) {
      if( this.isFiltered( product ) ) {
        product.style.display = 'none'; 
      } else {
        product.style.display = '';
      }
    }
    this.elem.remove();
    this.render();
  }
  isFiltered( product ) {
    if( ( !this.filters.noNuts || product.nuts != true ) 
      && ( !this.filters.vegeterianOnly || product.vegeterian )
      && ( !this.filters.maxSpiciness || this.filters.maxSpiciness >= product.spiciness )
      && ( !this.filters.category || this.filters.category == product.category )	
		) {
      return false;
    }
    return true;
  }	
}
