var back = document.getElementById('backArrow');

back.addEventListener('click', ()=>{
    window.location.href = '../index.html';

})
document.addEventListener('DOMContentLoaded', function() {

  var token = JSON.parse(localStorage.getItem('object'));

  if (!token) {
    window.location.href = '../index.html';
  } else {
    // Verifica se o token é válido (exemplo: verifica se não expirou)
    if(token[1]['time'] < new Date().getTime()){
      window.location.href = '../index.html';
      localStorage.clear();
    } else {
    }
    }
     
});


