var papel = 'papel';
var pedra = 'pedra';
var tixeira = 'tixeira';

var valorCpu = escollerItemDeArray([pedra, papel, tixeira]);
console.log(resutadoXogo(tixeira, valorCpu));

function resutadoXogo(valorHumano, valorMaquina) {
  if (valorHumano == valorMaquina) {
    return 'empate';
  } else if (ganaUsuario(valorHumano, valorMaquina)) {
    return 'Gana humano';
  } else {
    return 'gana maquina';
  }
}

function escollerItemDeArray(array) {
  var itemSelecionado = array[Math.floor(Math.random() * array.length)];
  console.log(itemSelecionado);
  return itemSelecionado;
}

function ganaUsuario(usuario, cpu) {
  switch (usuario) {
    case papel:
      if (cpu == pedra) {
        return true;
      }
      break;
    case pedra:
      if (cpu == tixeira) {
        return true;
      }
      break;
    case tixeira:
      if (cpu == papel) {
        return true;
      }
      break;
  }
  return false;
}
