const classL = document.getElementsByClassName("reveal");

function isVisible (elem) {
  const { top, bottom } = elem.getBoundingClientRect()
  if (bottom < 0) {
    return false;
  }

  if (top > window.innerHeight) {
    return false;
  }

  return true;
}

setInterval(() => {
  for (const div of classL) {
    if (isVisible(div)) {
      div.classList.add("reveal_active");
    } else {
      div.classList.remove("reveal_active");
    }
  };
}, 250);