var back = document.getElementById('backArrow');

back.addEventListener('click', ()=>{
    window.location.href = '../login.html';

})
document.addEventListener('DOMContentLoaded', function() {

  var token = JSON.parse(localStorage.getItem('object'));
  console.log(token) // Obtém o token armazenado

  if (!token) {
    window.location.href = '../login.html';
  } else {
    // Verifica se o token é válido (exemplo: verifica se não expirou)
    if(token[1]['time'] < new Date().getTime()){
      window.location.href = '../login.html';
      localStorage.clear();
    } else {
    console.log('Acesso permitido à página index.html');
    }
    }
     
});


