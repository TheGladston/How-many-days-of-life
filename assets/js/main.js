// Capturar evento de submit do formulário
const form = document.querySelector('#formulario'); // variável para selecionar o elemento , no html, com id formulario

form.addEventListener('submit', function (e) { // Função para "ouvir" algum evento no elemento selecionado. Nesse caso o evento submit.
  e.preventDefault(); // Comando para previnir que o evento submit aconteça

  const inputDia = e.target.querySelector('#dia'); // Variável com comando para capturar os inputs no elemento de id dia no formulário.
  const inputMes = e.target.querySelector('#mes'); // Variável com comando para capturar os inputs no elemento de id mes no formulário.
  const inputAno = e.target.querySelector('#ano'); // Variável com comando para capturar os inputs no elemento de id ano no formulário.

  const dia = Number(inputDia.value); // Variável com comando para selecionar apenas os números e não o input total no elemento dia.
  const mes = Number(inputMes.value); // Variável com comando para selecionar apenas os números e não o input total no elemento mes.
  const ano = Number(inputAno.value); // Variável com comando para selecionar apenas os números e não o input total no elemento ano.

  // Condicionais para que os valores de dia correspondam com: Seja um número, não seja menor que 0 e não seja maior que 31.

  if (!dia) {
    setResultado('Dia inválido', false);
    console.log(`${setResultado}`);
    return;
  }
  else if (dia<1) {
    setResultado('Dia inválido', false);
    console.log(`${setResultado}`);
    return;
  }
  else if (dia>31) {
    setResultado('Dia inválido', false);
    console.log(`${setResultado}`);
    return;
  }

    // Condicionais para que os valores de mês correspondam com: Seja um número, não seja menor que 0 e não seja maior que 12.

    if (!mes) {
      setResultado('Mês inválido', false);
      console.log(`${setResultado}`);
      return;
    }
    else if (mes<1) {
      setResultado('Mês inválido', false);
      console.log(`${setResultado}`);
      return;
    }
    else if (mes>12) {
      setResultado('Mês inválido', false);
      console.log(`${setResultado}`);
      return;
    }


    // Condicionais para que os valores de ano correspondam com: Seja um número, não seja menor que 0 e não seja maior que 2020.

    if (!ano) {
      setResultado('Mês inválido', false);
      console.log(`${setResultado}`);
      return;
    }
    else if (ano<1) {
      setResultado('Mês inválido', false);
      console.log(`${setResultado}`);
      return;
    }
    else if (ano>2020) {
      setResultado('Mês inválido', false);
      console.log(`${setResultado}`);
      return;
    }

    const mesDia = ((mes - 1) * 31) - 2 + dia;
    const anoDia = (ano * 365 - 365) + mesDia;


    const tempoVida = getTempoVida(mesDia, dia, anoDia);

    const msg = `Você têm ${tempoVida} dias de existência!!!`;

    setResultado(msg, true)

    console.log(mesDia);

});

function getTempoVida (mesDia, dia, anoDia) {
  const tempoVida = (2020 * 365) - 365 + 46 - anoDia + mesDia + dia;
  return tempoVida;
}

function criaP () {
  const p = document.createElement('p'); // Variável que cria um elemento, nesse caso um parágrafo
  return p;
  /*p.classList.add('paragrafo-resultado'); // Comando para adicionar uma class no elemento p.
  p.innerHTML = 'Além de falar, agora eu crio parágrafo!'; // Comando para criar os parâmetros de p, o que ele irá exibir, mas ele ainda não foi inserido em lugar nenhum.
  */
}


function setResultado (msg, isValid) {  //Função para exibir o resultado
  const resultado = document.querySelector('#resultado'); // Variável que seleciona a div com o id resultado
  resultado.innerHTML = ''; // Comando para inserir algum texto na div resultado
  
  
  const p = criaP();
  
  if (isValid) p.classList.add('paragrafo-resultado');
  
  p.innerHTML = msg; // Comando para criar os parâmetros de p, o que ele irá exibir, mas ele ainda não foi inserido em lugar nenhum.
  resultado.appendChild(p); // Comando para inserir a constante p na div resultado.
}