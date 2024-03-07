const a = Array.from(document.getElementsByClassName('font-size'))
const div = document.getElementsByClassName("book")[0]

for (const elem of a) {
  elem.addEventListener('click', () => {
    let active = document.getElementsByClassName("font-size_active") 
    active[0].classList.remove("font-size_active")
    elem.classList.add('font-size_active')


    if (Boolean(elem.getAttribute("data-size"))) {
      div.classList.remove(div.classList[1])
      div.classList.add("book_fs-" + elem.getAttribute("data-size"))
    } else {
      div.classList.remove(div.classList[1])
    }
  })
}