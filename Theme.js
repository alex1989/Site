function changeTheme(selectBackColor, selectColor="#dbdbdb") {
  var elements = document.querySelectorAll(".my-style");
  for (var i = 0; i < elements.length; i++) {
	elements[i].style.backgroundColor=selectBackColor;
	elements[i].style.color=selectColor;
  }	
}

