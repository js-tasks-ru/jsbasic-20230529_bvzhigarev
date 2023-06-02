function ucFirst(str) {
  if(str.length > 1) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
  } else if(str.length === 1) {
	  return str.toUpperCase();  
  } else {
	  return "";
  } 
}