export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct( product ) {
    if( arguments.length > 0 && product != null) {
      let productIsAlreadyAdded = false;
      for( let cartItem of this.cartItems ) {
        if( cartItem.product.id == product.id ) {
          productIsAlreadyAdded = true;
        }
      }
      if( !productIsAlreadyAdded ) {
        this.cartItems.push(
          {'product': product, 'count': 1}
        );
        this.onProductUpdate(this.cartItems[this.cartItems.length - 1]);
      } else {
        for( let cartItem of this.cartItems) {
          if( cartItem.product.id == product.id ) {
            cartItem.count = cartItem.count + 1;
          }
          this.onProductUpdate(cartItem);  
        };
      }
    }
  } 
  updateProductCount(productId, amount) {
    for( let cartItem of this.cartItems ) {
      if( cartItem.product.id == productId ) {
        cartItem.count += amount;
        if (cartItem.count < 1) { 
          this.cartItems.splice(this.cartItems.indexOf(cartItem), 1); 
        }
      }
    }
  }

  isEmpty() {
    return !this.cartItems.length;
  }

  getTotalCount() {
    let result = 0;
    for( let cartItem of this.cartItems ) {
      result += cartItem.count;
    }
    return result;
  }

  getTotalPrice() {
    let result = 0;
    for( let cartItem of this.cartItems ) {
      result += cartItem.product.price * cartItem.count;
    }
    return result;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

