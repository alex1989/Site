function changeTheme(selectBackColor='#212121', selectColor="#dbdbdb") {
  var elements = document.querySelectorAll(".my-style");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor=selectBackColor;
    elements[i].style.color=selectColor;
  }	

  elements = document.querySelectorAll("a");
  for (var i = 0; i < elements.length; i++) {
  	elements[i].style.backgroundColor=selectBackColor;
    elements[i].style.color=selectColor;
  }	

  /*elements = document.getElementsByTagName('footer');
  elements[0].style.color='green';*/
}

