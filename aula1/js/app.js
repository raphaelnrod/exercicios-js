//EXECUTA O SCRIPT APOS O CARREGAMENTO TOTAL DOS ELEMENTOS DA PÁGINA
/**************************************
    $(window).on('load', function(){
        alert('Ola mundo')
    })
**************************************/

//CARREGAMENTO PADRÃO DO JQUERY
$(function(){

    console.log($('.artigo1').css('background-color'))
    
    //funcao de delay em milissegundos (2000 = 2s)
    setTimeout(function() { 
        $('.artigo1').css('background-color', '#ccc').css('padding', '15px').css('font-size', '20px')  //altera as propriedades do CSS  
        $('.artigo1 p').text('Mudei o texto, a cor de fundo e o espaçamento com JQuery')   //altera o texto do elemento HTML
        console.log($('.artigo1').css('background-color'))
    }, 2000);

    //evento de click no elemento
    $('.artigo2').click(function (){
        if ($('.artigo3').css('background-color') == 'rgb(218, 218, 218)'){ //se o elemento esta na cor original que foi atribuido no css
            $('.artigo3').css('background-color', 'red') //mude para a cor 'red'
        }else{
            $('.artigo3').css('background-color', 'rgb(218, 218, 218)') //senao, volte para a cor original
        }
    });

    //evento hover no elemento
    $('.artigo3').hover(function (){
        $('.artigo2').css('background-color', 'green') //passa a cor do elemento para 'green'
    }, function(){
        $('.artigo2').css('background-color', '#b2b2b2') //volta a cor original ao mover o cursos para fora do elemento
    });

    //evento focus no elemento
    $('textarea').focus(function(){
        console.log("Estou focado no textarea")
    }).blur(function(){ //evento blur (tirar o foco do elemento)
        console.log("Estou fora no textarea")
    });
    
    //funcao
    function validarForm(){
        //evento de mudança de estado do elemento
        $('select').change(function(){
            console.log("Meu select foi alterado")
        })
    }

    validarForm();


});