const hamburguesa = document.querySelector("#hamburguer")
const enlaces = document.querySelector("#links")

hamburguesa.addEventListener('click', () =>{
    enlaces.classList.toggle('show')
})
