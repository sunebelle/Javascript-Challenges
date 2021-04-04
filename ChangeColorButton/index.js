const colors = [
  "btn-primary",
  "btn-secondary",
  "btn-success",
  "btn-danger",
  "btn-warning",
  "btn-info",
  "btn-light",
  "btn-dark",
  // "btn-link",
];

function changeBtnColors(color) {
  const value = color.value;
  if (value === "default") {
    location.reload();
  } else if (value === "random") {
    let random = Math.floor(Math.random() * colors.length);
    
    for (i = 0; i < $("button").length; i++) {
      let x = document.querySelectorAll("button")[i].className;
      $("button").removeClass(x).addClass(`${colors[random]} btn-lg`);
      // document.querySelectorAll("button")[i].classList.remove(x[1]);
      // document.querySelectorAll("button")[i].classList.add(`${colors[random]}`);
    }
  } else {
    for (i = 0; i < $("button").length; i++) {
      let x = document.querySelectorAll("button")[i].className;
      $("button").removeClass(x).addClass(`btn-${value} btn-lg`);
    }
  }
}

