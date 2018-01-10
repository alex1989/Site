var currentTheme="theme1";

function changeTheme(theme) {
  var elements = document.getElementsByClassName(currentTheme);
  for (var i = 0; i <= elements.length; i++) {
    str=elements[0].className;
    elements[0].className=str.replace(currentTheme, theme);
  }
  currentTheme=theme;
}