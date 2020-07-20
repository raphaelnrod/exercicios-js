$(function(){

    openForm()
    dismissClick()
    
    //abre o modal ao clicar no btn
    function openForm(){
        $('.btn').click((e) => {
            $('.bg').fadeIn()
            e.stopPropagation()
            $('form.cadastro').appendTo('.posicao')
        })
    }

    //fecha o modal ao clicar fora do objeto
    function dismissClick(){
        $('body').click(() => $('.bg').fadeOut())
        $('form.cadastro').click((e) => e.stopPropagation())
    }

    $('form.cadastro').submit(function (){
        var nome = $('inpute[name=name]').val()
        var tel = $('inpute[name=telefone]').val()
        var email = $('inpute[name=email]').val()

        var amount = nome.split(' ').length
        amount >= 2 ? true : false


    })



})

