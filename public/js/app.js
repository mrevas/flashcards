const hintbtn = document.querySelector('#showHint');
const hintP = document.querySelector('#hint')

hintbtn.addEventListener('click', () => {
    hintbtn.style.display = 'none'
    hintP.style.display = 'block'
})