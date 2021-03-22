import {userService} from '../service/users-service.js';

const criaNovaLinhaUsuario = (id, nome, idade) => {
    const novaLinha = document.createElement('tr');
    const conteudoNovaLinha = `
        <td class="td" data-td>${id}</td>
        <td>${nome}</td>
        <td>${idade}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="edita_usuario.html?" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
        `
    novaLinha.innerHTML = conteudoNovaLinha;
    novaLinha.dataset.id = id;
    return novaLinha;
}

const tabela = document.querySelector("#tabela");

userService.listaUsuarios()
    .then(resposta => {
        resposta.forEach(elemento =>{
            tabela.appendChild(criaNovaLinhaUsuario(elemento.id, elemento.name, elemento.age));
        })
    })