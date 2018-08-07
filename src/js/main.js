/* variables */
const splash = document.querySelector('.flex-container')
const principal = document.getElementById('principal')


principal.style.display = 'none'

setTimeout(() => {
    splash.style.display = 'none'
    principal.style.display = 'block'
    document.body.style.background = '#ffffff'
     document.body.style.display = 'block'
    }, 2000);