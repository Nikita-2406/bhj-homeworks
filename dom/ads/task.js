const spans = document.getElementsByClassName('rotator__case')
let ind = 0
setInterval(() => {
    if (ind === 5) {
        spans[ind].classList.toggle('rotator__case_active')
        ind = 0
        spans[ind].classList.toggle('rotator__case_active')
    } else {
        spans[ind].classList.toggle('rotator__case_active')
        spans[ind+1].classList.toggle('rotator__case_active')
        ind++
    }
}, 1000)