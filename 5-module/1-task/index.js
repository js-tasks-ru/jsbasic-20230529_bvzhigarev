function hideSelf() {
  document.querySelector( ".hide-self-button" ).addEventListener( "click", event => {
    event.target.setAttribute( "hidden", true );
  });
}