const listaUsuarios = () =>{
    return fetch('http://localhost:3000/users')
        .then(res => {
            return res.json();
        })
}

const adicionaUsuario = (id, name, age) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            id: id,
            name: name,
            age: age
        })
    })
    .then(response => response.json())
        .then(json => {
            return json;
        });
}

export const userService = {
    listaUsuarios,
    adicionaUsuario
}