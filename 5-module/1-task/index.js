function hideSelf() {
  let element = document.querySelector( ".hide-self-button" );
  element.onclick = () => {
    element.setAttribute( "hidden", true );
  };
}