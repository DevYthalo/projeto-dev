/*Objetivo 1 - quando o usuário clicar no botão de mostrar deve abrir os projeotos que
estão escondido no html 
   Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o ususário
   clicar em cima dele

   Passo 2 - identificar o clipe do botão

   Passo 3 - adicionar a classse "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais 
   Passo 1 - pegar o botão e esconder ele
*/
//Objetivo 1 - quando o usuário clicar no botão de mostrar deve abrir os projeotos que
//estão escondido no html 

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o ususário
//clicar em cima dele

const btnMostrarProjeto = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

btnMostrarProjeto.addEventListener('click', () => {
   newFunction();

   btnMostrarProjeto.classList.add('remover');
});

function newFunction() {
   projetosInativos.forEach(projetoInativo => {
      projetoInativo.classList.add('ativo');
   });
}
