let timer = document.getElementById("timer")
inter = setInterval(() => {
  timer.textContent = Number(timer.textContent) - 1
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе!")
    timer.textContent = 59
  }
}, 1000)
