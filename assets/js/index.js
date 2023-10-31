const card = document.querySelector('.card')
const botao = document.querySelector('.botao');
const input = document.querySelector('#input_email');
const span = document.querySelector('.aviso');
const sucesso = document.querySelector('.sucesso')
const mensEmail = document.querySelector('.mensEmail')
const reset = document.querySelector('.return')

botao.addEventListener('click', function(event) {
  verificaEmail();
  event.preventDefault()
})

reset.addEventListener('click', () =>  {
  resetPage()
}) 



const verifica = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/


function verificaEmail() {
  if (input.value.length == 0 || !verifica.test(input.value)) {
    erroEmail(input);
  } else {
    sucessEmail(input);
  }
}

function erroEmail(input) {
  input.classList.add('erro');
  span.style.display = 'block'
  console.log('erro');
}

function sucessEmail(input) {
  input.classList.remove('erro')
  sucesso.style.display = 'block'
  mensEmail.innerHTML = `${input.value}`
  card.style.display = 'none'
  span.style.display = 'none'
  console.log('sucesso');;
}

function resetPage() {
  sucesso.style.display = 'none'
  card.style.display = 'flex'
}