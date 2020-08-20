//funcao que verifica a incidencia de uma palavra ou trecho de frase, exatamente igual, dentro da frase (case sensitive)
verifica = (text, word) => text.match(word);
encontrou = (res) => (res ? "Encontramos" : "Nao encontramos");

$(function () {
  var frase = "frase teste";

  //deve-se colocar o trecho a ser pesquisado dentro de uma expressao regular, entre duas barras /conteudo/
  var res = verifica(frase, /asdf/); //retorno false
  var res2 = verifica(frase, /frase/); //retorno true
  console.log(encontrou(res));
  console.log(encontrou(res2));

  var email = "raphaelnrod@gmail.com";

  //EXPLICACAO
  // ^ indica que a varredura começa no inicio da string
  // (.*?) indica que quer que pegue tudo antes do @ e novamente tudo após o @
  // $ indica o delimitador da expressao
  //resumindo, vai pegar tudo que está antes do @ e separar de tudo que está depois do @
  res = verifica(email, /^(.*?)@(.*?)$/);
  console.log(res[1]);
  console.log(res[2]);
});
