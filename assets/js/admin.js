
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var username = document.getElementById('inputs').value;
  var password = document.getElementById('inputs2').value;

  verificarCredenciais(username, password)
    .then(check => {
      if (check) {

        var token = generateToken();

        var timestamp = new Date().getTime() + 60000;

        
        var object = [{"token":token},{"time":timestamp}]

        localStorage.setItem('object', JSON.stringify(object));

        window.location.href = '/assets/main.html';

      } else {
        const elemento = document.getElementById('cred');

        elemento.classList.remove('cred');
        elemento.classList.add('wrong-cred');

        const inputs = document.getElementById('inputs');

        inputs.classList.remove('username-input');
        inputs.classList.add('invalid-input');

        const inputs2 = document.getElementById('inputs2');

        inputs2.classList.remove('username-input');
        inputs2.classList.add('invalid-input');

        inputs.addEventListener('click', ()=>{
          inputs.classList.add('username-input');
          inputs.classList.remove('invalid-input');

          elemento.classList.add('cred');
          elemento.classList.remove('wrong-cred')

          inputs2.classList.add('username-input');
          inputs2.classList.remove('invalid-input');
          
        })

        inputs2.addEventListener('click', ()=>{
          inputs.classList.add('username-input');
          inputs.classList.remove('invalid-input');

          elemento.classList.add('cred');
          elemento.classList.remove('wrong-cred')

          inputs2.classList.add('username-input');
          inputs2.classList.remove('invalid-input');
          
        })
      }
    })
    .catch(error => {
      alert(error)
    });
});

function signin(){
  window.location.href = '/assets/register.html';
}

async function verificarCredenciais(username, password) {
  const usuariosCadastrados = localStorage.getItem('usuarios');

  if (usuariosCadastrados) {
    const usuarios = JSON.parse(usuariosCadastrados);

    for (let usuario of usuarios) {
      if (usuario.user === username && usuario.pass === password) {
        return true;
      }
    }
  }

  return false;
}
function limparLocalStorage() {
  localStorage.clear();
}

setInterval(limparLocalStorage, 60 * 1000); 
  
function generateToken(){
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}