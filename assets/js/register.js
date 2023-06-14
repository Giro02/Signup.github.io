

var back = document.getElementById('backArrow');

back.addEventListener('click', ()=>{
    window.location.href = '../index.html';

})

document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('newuser').value;
  var password  = document.getElementById('newpass').value;
  var confpass = document.getElementById('newconf').value;
  var checkador = document.getElementById('termsCheckbox');

  var usuarioExistente = verificarUsuarioExistente(username);
  var invalid = document.getElementById('passcred');
  var h1invalid = document.getElementById('h1credentials');

  const inputuser = document.getElementById('newuser');
  if (usuarioExistente === false && username !== '' && password === confpass && password !== '' && checkador.checked) {
    var newUser = { user: username, pass: password };
    cadastrarUsuario(newUser);

    alert('User registered. All registers will be erased after 1 minute.');
    window.location.href = '../index.html';
  } else {
    if (usuarioExistente === true) {
      invalid.classList.add('wrong-cred');

      inputuser.classList.add('invalid-input');
      h1invalid.innerHTML = "* User already registered";

      inputuser.addEventListener('click', ()=>{
        inputuser.classList.remove('invalid-input')
        invalid.classList.remove('wrong-cred');
      })


    }
    if (password !== confpass && usuarioExistente === false) {
 
      var passwordInput = document.getElementById('newpass');
      var confpassInput = document.getElementById('newconf');

      passwordInput.classList.add('invalid-input');
      confpassInput.classList.add('invalid-input');
      invalid.classList.add('wrong-cred');
      h1invalid.innerHTML = "* Passwords don't match";

      passwordInput.addEventListener('click',()=>{
        passwordInput.classList.remove('invalid-input');
        invalid.classList.remove('wrong-cred');
      })
      confpassInput.addEventListener('click',()=>{
        confpassInput.classList.remove('invalid-input');
        invalid.classList.remove('wrong-cred');
      })
    }

  }
});

function verificarUsuarioExistente(username){
  const usuariosCadastrados = localStorage.getItem('usuarios');

  if (usuariosCadastrados) {
    const usuarios = JSON.parse(usuariosCadastrados);
    const usuarioExistente = usuarios.find(usuario => usuario.user === username);
    return !!usuarioExistente; 
  }

  return false; 
}

function cadastrarUsuario(usuario) {
  let usuariosCadastrados = localStorage.getItem('usuarios');
  if (usuariosCadastrados) {
    usuariosCadastrados = JSON.parse(usuariosCadastrados);
  } else {
    usuariosCadastrados = [];
  }

  usuariosCadastrados.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));
}

function limparLocalStorage() {
  localStorage.clear();
}

setInterval(limparLocalStorage, 60 * 1000); 
