const count = document.getElementById("clicker__counter")
const img = document.getElementById("cookie")
img.onclick = () => {
  if (Number(count.textContent) % 2 == 0) {
    img.width += 50
  } else {
    img.width -= 50
  }
  count.textContent = Number(count.textContent) + 1
}
