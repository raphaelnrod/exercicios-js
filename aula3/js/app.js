$(function(){

    var box1 = $('.box1')
    var box2 = $('.box2')
    var box3 = $('.box3')

    // PRIMEIRA OPÇÃO DE ESTRUTURA DO CODIGO (MAIS COMUM, MENOS COMPLEXA, POREM MAIS LINHAS E MENOS DESEMPENHO)
    /***********
    box1.fadeOut(2000, function(){
        box2.fadeIn(2000, function () {
            box2.click(function (){
                box3.slideToggle(500, function(){
                    console.log("Slide funcionando")
                })
            })
        })
    })
    ***********/

    // SEGUNDA OPÇÃO DE ESTRUTURA DO CODIGO (UTILIZANDO ARROW FUNCTIONS, PODEMOS FAZER EM APENAS UMA LINHA)
    // box1.fadeOut(1500, () => box2.fadeIn(1500, () => box2.click(() => box3.slideToggle(500, () => console.log("Slide Funcionando")))));
    

    // TERCEIRA OPÇÃO DE ESTRUTURA DO CODIGO (UTILIZANDO FUNCOES PARA QUEBRAR O PROBLEMA EM PROBLEMAS MENOS, AUMENTANDO A REUTILIZAÇÃO DE CODIGO)

    //funcao para fazer fade in e fade out (outra forma de estrutura do código acima)
    fade = (firstBox, secBox, timeOut, timeIn) => firstBox.fadeOut(timeOut, () => secBox.fadeIn(timeIn))

    //funcao para fazer o evento do clique e exibir o elemento com Slide animation (outra forma de estrurua do mesmo código)
    slideClick = (boxClick, boxShow, time) => boxClick.click(() => boxShow.slideToggle(time)) 

    //chamando a fução passando os params
    fade(box1, box2, 1000, 500) 
    slideClick(box2, box3, 300)    

})

