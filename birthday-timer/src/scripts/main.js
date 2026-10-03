const dataDoEvento = new Date("Apr 29, 2026 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diaAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); 
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

  document.getElementById('dias').innerText = diaAteOEvento;
    document.getElementById('horas').innerText = horasAteOEvento;
    document.getElementById('minutos').innerText = minutosAteOEvento;
    document.getElementById('segundos').innerText = segundosAteOEvento;


    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('.event__time').innerHTML = "O evento já acabou!";
    }

}, 1000)