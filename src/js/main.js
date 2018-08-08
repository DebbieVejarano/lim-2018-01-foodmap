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

fetch('../data/restaurant.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    let imagen = data[0].photo
    const prueba = document.querySelector('.prueba')
    prueba.innerHTML = `
    <img src="${imagen}" alt="loho">
    `

} )

