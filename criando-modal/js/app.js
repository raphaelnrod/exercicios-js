//funcao que verifica a incidencia de uma palavra ou trecho de frase, exatamente igual, dentro da frase (case sensitive)
verifica = (text, word) => text.match(word);
encontrou = (res) => (res ? "Encontramos" : "Nao encontramos");

$(function () {
  openForm();
  dismissClick();

  $("form.cadastro").submit(function (e) {
    e.preventDefault();
    let validate = 0;
    var nome = $("input[name=nome]").val();
    var tel = $("input[name=telefone]").val();
    var email = $("input[name=email]").val();

    !verifyName(nome) ? warningInputError($("input[name=nome]")) : validate++;

    !verifyPhone(tel.toString())
      ? warningInputError($("input[name=telefone]"))
      : validate++;

    !verifyEmail(email)
      ? warningInputError($("input[name=email]"))
      : validate++;

    if (validate === 3){
      $(".bg").fadeOut();
      setTimeout(() => {
        alert('Validado com sucesso!');
        resetInput($('input[name=nome]'));
        resetInput($('input[name=telefone]'));
        resetInput($('input[name=email]'));        
      }, 420);
    }
  });

  $("input[type=text]").focus(function (e) {
    $(this).val() === "Campo inválido!" && resetInput($(this));
  });

  //abre o modal ao clicar no btn
  function openForm() {
    $(".btn").click((e) => {
      $(".bg").fadeIn();
      e.stopPropagation();
      $("form.cadastro").appendTo(".posicao");
    });
  }

  //fecha o modal ao clicar fora do objeto
  function dismissClick() {
    $("body").mousedown((e) => {
      let target = $(e.target);
      !target.is("DIV") ? e.stopPropagation() : $(".bg").fadeOut();
    });
  }

  function verifyName(nome) {
    let amt = nome.split(" ").length;
    let splitStr = nome.split(" ");
    if (amt >= 2) {
      for (var i = 0; i < amt; i++) {
        if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }

  function verifyPhone(phone) {
    let numbers = phone.replace(/[^\d]+/g, "");
    if (numbers.length === 11) {
      return true;
    } else {
      return false;
    }
  }

  function verifyEmail(email) {
    return verifica(email, /^(.*?)@(.*?).com(.*?)$/);
  }

  function warningInputError(element) {
    element.css("color", "red");
    element.css("border", "2px solid red");
    element.val("Campo inválido!");
  }

  function resetInput(element) {
    element.css("color", "black");
    element.css("border", "1px solid #ccc");
    element.val("");
  }
});
