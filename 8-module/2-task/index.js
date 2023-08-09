import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor( products ) {
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
      this.elem.querySelector( '.products-grid__inner' ).append( new ProductCard( product ).elem );
    }  
  }

  updateFilter( filters ) {
    for( let key of Object.keys( filters ) ) {
      this.filters[key] = filters[key];
    }

//изначально было сделано через display:none, чтобы не перерисовывать весь грид 
//но задание почему-то требует, чтобы количество нод в контейнере менялось
//поэтому грохаем ноды
// V V V V V V V  

    for( let product of this.elem.querySelectorAll( '.card' ) ) {
      if( this.isFiltered( product ) ) { 
        product.remove();
      }
    }
  }

//------------------------------------------------------------------------------

  isFiltered( product ) {
    let name = product.querySelector( '.card__title' ).innerHTML;
    let hasNuts = this.products.find( element => element.name == name ).nuts;
    let vegeterian = this.products.find( element => element.name == name ).vegeterian;
    let category = this.products.find( element => element.name == name ).category;
    let spiciness = this.products.find( element => element.name == name ).spiciness;

    if( ( !this.filters.noNuts || hasNuts != true ) 
		  && ( !this.filters.vegeterianOnly || vegeterian )
		  && ( !this.filters.maxSpiciness || this.filters.maxSpiciness >= spiciness )
		  && ( !this.filters.category || this.filters.category == category )	
		) {
		  return false;
	  } else { 
		  return true 
	  };
  }	
}