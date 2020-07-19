$(function(){
    
    //evento de rolagem da scroll bar
    $(window).scroll(function (){
        console.log("Scroll ativo")
    });

    //evento de redimensionamento de tela
    $(window).resize(function (){
        console.log("Tela redimensionada")
    }); 
    
    var wt = $('.box').width(); //pega width menos o valor do padding da div .box
    var iw = $('.box').innerWidth(); //pega width da div .box (valor total, com padding)
    var ow = $('.box').outerWidth(true); //pega widht total, com padding e ainda adiciona o valor da margin

    //mesma lógica acima, so muda que aqui pegamos o valor do Height
    var ht = $('.box').height(); 
    var ih = $('.box').innerHeight(); 
    var oh = $('.box').outerHeight(true); 

    //function que muda o texto dos elementos h2 do html para os valores de dimensoes obtidos acima
    function getDimensions() {
        $('#item1').text("Width: " + wt + " Height: " + ht)
        $('#item2').text("Inner Width: " + iw + " Inner Height: " + ih)
        $('#item3').text("Outer Width: " + ow + " Outer Height: " + oh)
    }

    //arrow function
    $('body').click(() => getDimensions()) //ao clicar no body execute essa função
    $('.box').click((e) => e.stopPropagation()) //ao clicar dentro da div .box não dispara o evento acima


    //pega o valor de um input e ao clicar o button, dispara o evento dentro
    //function split separa o conteudo com o caracter passado como parametro e retorna um array com os valores
    $('input[type=button]').click(function(){
        var v = $('input[type=text]').val()
        var val2 = v.split(",")
        console.log(val2)
    });
    

})