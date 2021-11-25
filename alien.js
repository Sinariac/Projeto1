function ripleyOpcao() {
  var ripleyOpcao = prompt("O que Ripley deve fazer? Escolha entre 1 e 2:");

  if (ripleyOpcao == 1) {
    location = "./ripleysim1.html";
  } else if (ripleyOpcao == 2) {
    location = "./ripley3";
  } else {
      alert ("Resposta inválida")
    }
}