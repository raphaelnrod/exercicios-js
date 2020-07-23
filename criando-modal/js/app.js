//funcao que verifica a incidencia de uma palavra ou trecho de frase, exatamente igual, dentro da frase (case sensitive)
verifica = (text, word) => text.match(word)
encontrou = (res) => res ? 'Encontramos' : 'Nao encontramos'

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

    $('form.cadastro').submit(function (e){
        e.preventDefault()
        var nome = $('input[name=nome]').val();
        var tel = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        var amount = nome.split(' ').length;
        var splitName = nome.split(' ');
        amount >= 2 ? verifyName(amount, splitName) : warningInputError($('input[name=nome]'))

        return false;
    })

    function verifyName(amt, splitStr){
        for (var i = 0; i < amt; i++){
            if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                imprimeConsole("Bateu")
                $('input[name=nome]').css('border', '1px solid #ccc')
            }else{
                warningInputError($('input[name=nome]'))
                return false
            }
        }
    }

    function imprimeConsole(str){
        console.log(str);
    }

    function warningInputError(element){
        element.css('border', '2px solid red')
        element.data('invalido', 'true')
        el.val('Campo inválido!')
    }

    var teste = 'raphael augusto';
    var res3 = verifica(teste, /raphael/);
    console.log(encontrou(res3));
})



