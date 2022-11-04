const button = document.querySelector('#btnConcorrer')
const modal_bg = document.getElementById('modal_background')
const modal_form = document.getElementById('modal_cadastro')
let open_modal = [button, modal_bg]

open_modal.map((item) => {
    item.addEventListener('click', () => {
        modal_bg.classList.toggle('dp_none')
        modal_form.classList.toggle('dp_none')
    })
})