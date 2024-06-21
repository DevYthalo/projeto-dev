btnMostrarProjeto.addEventListener('click', () => {
    projetoInativo.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');

    });
});