var papel = 'papel';
var pedra = 'pedra';
var tixeira = 'tixeira';

console.log(resutadoXogo(tixeira, pedra));

function resutadoXogo(valorHumano, valorMaquina) {
  if (valorHumano == valorMaquina) {
    return 'empate';
  } else if (elementoGanador(valorHumano, valorMaquina) == valorHumano) {
    return 'Gana humano';
  } else {
    return 'gana maquina';
  }
}

function elementoGanador(elemento1, elemento2) {
  if (elemento1 == papel) {
    if (elemento2 == tixeira) {
      return elemento2;
    } else if (elemento2 == pedra) {
      return elemento1;
    }
  } else if (elemento1 == tixeira) {
    if (elemento2 == pedra) {
      return elemento2;
    } else if (elemento2 == papel) {
      return elemento1;
    }
  } else if (elemento1 == pedra) {
    if (elemento2 == tixeira) {
      return elemento1;
    } else if (elemento2 == papel) {
      return elemento2;
    }
  }
}
