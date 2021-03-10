var TipoTirada = {
	PEDRA: 'pedra',
	PAPEL: 'papel',
	TIXEIRA: 'tixeira',
};
var tiposTirada = [TipoTirada.PAPEL, TipoTirada.PEDRA, TipoTirada.TIXEIRA];

var tiradaHumano;
var tiradaMaquina;

do {
	realizarTiradas();
} while (eEmpate(tiradaHumano, tiradaMaquina));
xogar(tiradaHumano, tiradaMaquina);

function eEmpate(tiradaHumano, tiradaMaquina) {
	if (tiradaHumano == tiradaMaquina) {
		console.log(`Empate (${tiradaHumano})`);
		return true;
	}
}

function xogar(tiradaMaquina, tiradaHumano) {
	if (ganouHumano(tiradaMaquina, tiradaHumano)) {
		console.log('Ganaches');
	} else {
		console.log('Perdeches');
	}
}

function realizarTiradas() {
	tiradaHumano = tiposTirada[getRandomInt(3)];
	tiradaMaquina = tiposTirada[getRandomInt(3)];
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function ganouHumano(tiroMaquina, tiroHumano) {
	return (
		(tiroHumano == TipoTirada.PEDRA && tiroMaquina == TipoTirada.TIXEIRA) ||
		(tiroHumano == TipoTirada.PAPEL && tiroMaquina == TipoTirada.PEDRA) ||
		(tiroHumano == TipoTirada.TIXEIRA && tiroMaquina == TipoTirada.PAPEL)
	);
}
