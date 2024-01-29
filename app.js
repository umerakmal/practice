let name = document.querySelector('#name');
let mail = document.querySelector('#email');
let pwd = document.querySelector('#pwd');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let div = document.createElement('div');
    let username = document.createElement('p');
    let email = document.createElement('p');
    let password = document.createElement('p');
    username.innerHTML = `User Name: <b>${name.value}</b>`;
    email.innerHTML = `E-mail: <b>${mail.value}</b>`;
    password.innerHTML = `Password: <b>${pwd.value}</b>`;
    div.append(username);
    div.append(email);
    div.append(password);
    document.body.append(div)
})