var botao = document.querySelectorAll('FlexFaQ');


    botao[0].addEventListener('toggle', ()=>{
        let mostrar = document.getElementById('questao1');
        botao.classList.add('mostrarResposta');
    });
