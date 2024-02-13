dead = document.getElementById("dead");
lost = document.getElementById("lost");
getHole = index => document.getElementById(`hole${index}`)
for (let i = 1; i < 10; i++) {
  getHole(i).onclick = () => {
    if (getHole(i).className === 'hole hole_has-mole') {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) >= 10) {
      alert('win');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    if (Number(lost.textContent) >= 5) {
      alert("lose")
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}
