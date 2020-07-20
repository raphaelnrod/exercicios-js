$(function(){

    $('.btn').click(function (e){
        $('.bg').fadeIn();
        e.stopPropagation();
        $('form.cadastro').appendTo('.posicao');
    })

    $('body').click(function (e){
        $('.bg').fadeOut();
    })

    $('form.cadastro').click(function (e){
        e.stopPropagation();
    })


})

