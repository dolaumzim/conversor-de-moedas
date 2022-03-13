function checarRadio() {} //#TODO

function converterDolar() {
  var valorParaConverter = parseFloat(document.getElementById("valor").value);
  var valorConvertido = document.getElementById("valorConvertido");

  var dolarChecado = document.getElementById("dolar1").checked;
  var euroChecado = document.getElementById("euro1").checked;
  var realChecado = document.getElementById("real1").checked;
  var bitcoinChecado = document.getElementById("bit1").checked;

  // checarRadio(); #TODO
  if (dolarChecado) {
    valorConvertido.innerHTML = "U$" + (valorParaConverter * 1).toFixed(2);
  } else if (euroChecado) {
    valorConvertido.innerHTML = "U$" + (valorParaConverter * 1.09).toFixed(2);
  } else if (realChecado) {
    valorConvertido.innerHTML = "U$" + (valorParaConverter * 0.2).toFixed(2);
  } else if (bitcoinChecado) {
    valorConvertido.innerHTML =
      "U$" + (valorParaConverter * 38690.9).toFixed(2);
  } else {
    valorConvertido.innerHTML = "Escolha uma moeda!";
  }
}

function converterEuro() {
  var valorParaConverter = parseFloat(document.getElementById("valor").value);
  var valorConvertido = document.getElementById("valorConvertido");

  var dolarChecado = document.getElementById("dolar1").checked;
  var euroChecado = document.getElementById("euro1").checked;
  var realChecado = document.getElementById("real1").checked;
  var bitcoinChecado = document.getElementById("bit1").checked;

  // checarRadio();#TODO
  if (dolarChecado) {
    valorConvertido.innerHTML = "€" + (valorParaConverter * 0.92).toFixed(2);
  } else if (euroChecado) {
    valorConvertido.innerHTML = "€" + (valorParaConverter * 1).toFixed(2);
  } else if (realChecado) {
    valorConvertido.innerHTML = "€" + (valorParaConverter * 0.18).toFixed(2);
  } else if (bitcoinChecado) {
    valorConvertido.innerHTML =
      "€" + (valorParaConverter * 35483.97).toFixed(2);
  } else {
    valorConvertido.innerHTML = "Escolha uma moeda!";
  }
}

function converterReal() {
  var valorParaConverter = parseFloat(document.getElementById("valor").value);
  var valorConvertido = document.getElementById("valorConvertido");

  var dolarChecado = document.getElementById("dolar1").checked;
  var euroChecado = document.getElementById("euro1").checked;
  var realChecado = document.getElementById("real1").checked;
  var bitcoinChecado = document.getElementById("bit1").checked;

  // checarRadio(); #TODO
  if (dolarChecado) {
    valorConvertido.innerHTML = "R$" + (valorParaConverter * 5.08).toFixed(2);
  } else if (euroChecado) {
    valorConvertido.innerHTML = "R$" + (valorParaConverter * 5.54).toFixed(2);
  } else if (realChecado) {
    valorConvertido.innerHTML = "R$" + (valorParaConverter * 1).toFixed(2);
  } else if (bitcoinChecado) {
    valorConvertido.innerHTML =
      "R$" + (valorParaConverter * 196505.02).toFixed(2);
  } else {
    valorConvertido.innerHTML = "Escolha uma moeda!";
  }
}

function converterBitcoin() {
  var valorParaConverter = parseFloat(document.getElementById("valor").value);
  var valorConvertido = document.getElementById("valorConvertido");

  var dolarChecado = document.getElementById("dolar1").checked;
  var euroChecado = document.getElementById("euro1").checked;
  var realChecado = document.getElementById("real1").checked;
  var bitcoinChecado = document.getElementById("bit1").checked;

  // checarRadio(); #TODO
  if (dolarChecado) {
    valorConvertido.innerHTML =
      (valorParaConverter * 0.000026).toFixed(6) + " BTC";
  } else if (euroChecado) {
    valorConvertido.innerHTML =
      (valorParaConverter * 0.000028).toFixed(6) + " BTC";
  } else if (realChecado) {
    valorConvertido.innerHTML =
      (valorParaConverter * 0.0000051).toFixed(6) + " BTC";
  } else if (bitcoinChecado) {
    valorConvertido.innerHTML = (valorParaConverter * 1).toFixed(6) + " BTC";
  } else {
    valorConvertido.innerHTML = "Escolha uma moeda!";
  }
}
