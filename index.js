function theme() {
  const checkbox = document.getElementById("checkbox");
  if (checkbox.checked === true) {
    document.body.style.background = "black";
  } else if (checkbox.checked === false) {
    document.body.style.background = "white";
  }
}
