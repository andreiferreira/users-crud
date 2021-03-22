import {userService} from '../service/users-service.js';

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener('submit', (evento) => {
    alert('oi');
    evento.preventDefault();
    const inputId = evento.target.querySelector('[data-id]').value;
    const inputNome = evento.target.querySelector('[data-nome]').value;
    const inputIdade = evento.target.querySelector('[data-idade]').value;

    userService.adicionaUsuario(inputId, inputNome, inputIdade)
        .then(() => {
            window.location.href = '../lista_usuario.html';
        })

})