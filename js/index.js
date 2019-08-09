//------------------------------------------------------------------------------------------------------------------
function juegoNuevo() {

    document.getElementById("juego_terminado").value = 0;
    document.getElementById("turno").value = 1;
    document.getElementById("turno_jugador").innerHTML = '<img src="../images/o.png" width="100" height="100" />';
    document.getElementById("juego_nuevo").disabled = true;
    for (i = 1; i <= 9; i++) {
        document.getElementById("imagen_" + i).innerHTML = '<img src="../images/blanco.png" width="100" height="100" id="' + i + '" onclick="jugar(this.id);" />';
        document.getElementById("posicion_" + i).value = 0;
    }
}
//------------------------------------------------------------------------------------------------------------------
function casillaOcupada() {
    alert("Esta posicion ya esta ocupada");
}
//------------------------------------------------------------------------------------------------------------------
function jugar(id) {
    var pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, continuar = 1, victorias_j1 = 0, victorias_j2 = 0;
    turno = document.getElementById("turno").value;
    juegoTerminado = document.getElementById("juego_terminado").value;
    document.getElementById("turno").value = "";
    if (juegoTerminado == 0) {
        if (turno == 1) {
            document.getElementById("imagen_" + id).innerHTML = '<img src="../images/o.png" width="100" height="100" id="1" onclick="casillaOcupada();" />';
            document.getElementById("turno_jugador").innerHTML = '<img src="../images/x.png" width="100" height="100" />';
            document.getElementById("turno").value = 2;
            document.getElementById("posicion_" + id).value = 1;
        } else {
            document.getElementById("imagen_" + id).innerHTML = '<img src="../images/x.png" width="100" height="100" id="2" onclick="casillaOcupada();" />';
            document.getElementById("turno_jugador").innerHTML = '<img src="../images/o.png" width="100" height="100" />';
            document.getElementById("turno").value = 1;
            document.getElementById("posicion_" + id).value = 2;
        }
        //}
        //------------------------------------------------------------------------------------------------------------------
        pos1 = document.getElementById("posicion_1").value;
        pos2 = document.getElementById("posicion_2").value;
        pos3 = document.getElementById("posicion_3").value;
        pos4 = document.getElementById("posicion_4").value;
        pos5 = document.getElementById("posicion_5").value;
        pos6 = document.getElementById("posicion_6").value;
        pos7 = document.getElementById("posicion_7").value;
        pos8 = document.getElementById("posicion_8").value;
        pos9 = document.getElementById("posicion_9").value;
        victorias_j1 = parseInt(document.getElementById("victorias_j1").value);
        victorias_j2 = parseInt(document.getElementById("victorias_j2").value);
        empates = parseInt(document.getElementById("empates").value);
        if (pos1 == 1 && pos2 == 1 && pos3 == 1) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 1 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor = document.getElementById("ver_victorias_j1").innerHTML = victorias_j1 + 1;
            document.getElementById("ver_derrotas_j2").innerHTML = "" + nuevo_valor;
            document.getElementById("victorias_j1").value = nuevo_valor;
        } else if (pos4 == 1 && pos5 == 1 && pos6 == 1) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 1 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor = document.getElementById("ver_victorias_j1").innerHTML = victorias_j1 + 1;
            document.getElementById("ver_derrotas_j2").innerHTML = "" + nuevo_valor;
            document.getElementById("victorias_j1").value = nuevo_valor;
        } else if (pos7 == 1 && pos8 == 1 && pos9 == 1) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 1 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor = document.getElementById("ver_victorias_j1").innerHTML = victorias_j1 + 1;
            document.getElementById("ver_derrotas_j2").innerHTML = "" + nuevo_valor;
            document.getElementById("victorias_j1").value = nuevo_valor;
        } else if (pos3 == 1 && pos5 == 1 && pos7 == 1) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 1 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor = document.getElementById("ver_victorias_j1").innerHTML = victorias_j1 + 1;
            document.getElementById("ver_derrotas_j2").innerHTML = "" + nuevo_valor;
            document.getElementById("victorias_j1").value = nuevo_valor;
        } else if (pos1 == 1 && pos5 == 1 && pos9 == 1) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 1 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor = document.getElementById("ver_victorias_j1").innerHTML = victorias_j1 + 1;
            document.getElementById("ver_derrotas_j2").innerHTML = "" + nuevo_valor;
            document.getElementById("victorias_j1").value = nuevo_valor;
        } else if (pos1 == 1 && pos4 == 1 && pos7 == 1) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 1 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor = document.getElementById("ver_victorias_j1").innerHTML = victorias_j1 + 1;
            document.getElementById("ver_derrotas_j2").innerHTML = "" + nuevo_valor;
            document.getElementById("victorias_j1").value = nuevo_valor;
        } else if (pos2 == 1 && pos5 == 1 && pos8 == 1) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 1 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor = document.getElementById("ver_victorias_j1").innerHTML = victorias_j1 + 1;
            document.getElementById("ver_derrotas_j2").innerHTML = "" + nuevo_valor;
            document.getElementById("victorias_j1").value = nuevo_valor;
        } else if (pos3 == 1 && pos6 == 1 && pos9 == 1) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 1 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor = document.getElementById("ver_victorias_j1").innerHTML = victorias_j1 + 1;
            document.getElementById("ver_derrotas_j2").innerHTML = "" + nuevo_valor;
            document.getElementById("victorias_j1").value = nuevo_valor;
        }
        //------------------------------------------------------------------------------------------------------------------
        if (pos1 == 2 && pos2 == 2 && pos3 == 2) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 2 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            document.getElementById("juego_terminado").value = 1;
            nuevo_valor_2 = document.getElementById("ver_victorias_j2").innerHTML = victorias_j2 + 1;
            document.getElementById("ver_derrotas_j1").innerHTML = "" + nuevo_valor_2;
            document.getElementById("victorias_j2").value = nuevo_valor_2;
        } else if (pos4 == 2 && pos5 == 2 && pos6 == 2) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 2 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            document.getElementById("juego_terminado").value = 1;
            nuevo_valor_2 = document.getElementById("ver_victorias_j2").innerHTML = victorias_j2 + 1;
            document.getElementById("ver_derrotas_j1").innerHTML = "" + nuevo_valor_2;
            document.getElementById("victorias_j2").value = nuevo_valor_2;
        } else if (pos7 == 2 && pos8 == 2 && pos9 == 2) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 2 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            document.getElementById("juego_terminado").value = 1;
            nuevo_valor_2 = document.getElementById("ver_victorias_j2").innerHTML = victorias_j2 + 1;
            document.getElementById("ver_derrotas_j1").innerHTML = "" + nuevo_valor_2;
            document.getElementById("victorias_j2").value = nuevo_valor_2;
        } else if (pos3 == 2 && pos5 == 2 && pos7 == 2) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 2 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            document.getElementById("juego_terminado").value = 1;
            nuevo_valor_2 = document.getElementById("ver_victorias_j2").innerHTML = victorias_j2 + 1;
            document.getElementById("ver_derrotas_j1").innerHTML = "" + nuevo_valor_2;
            document.getElementById("victorias_j2").value = nuevo_valor_2;
        } else if (pos1 == 2 && pos5 == 2 && pos9 == 2) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 2 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor_2 = document.getElementById("ver_victorias_j2").innerHTML = victorias_j2 + 1;
            document.getElementById("ver_derrotas_j1").innerHTML = "" + nuevo_valor_2;
            document.getElementById("victorias_j2").value = nuevo_valor_2;
        } else if (pos1 == 2 && pos4 == 2 && pos7 == 2) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 2 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor_2 = document.getElementById("ver_victorias_j2").innerHTML = victorias_j2 + 1;
            document.getElementById("ver_derrotas_j1").innerHTML = "" + nuevo_valor_2;
            document.getElementById("victorias_j2").value = nuevo_valor_2;
        } else if (pos2 == 2 && pos5 == 2 && pos8 == 2) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 2 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor_2 = document.getElementById("ver_victorias_j2").innerHTML = victorias_j2 + 1;
            document.getElementById("ver_derrotas_j1").innerHTML = "" + nuevo_valor_2;
            document.getElementById("victorias_j2").value = nuevo_valor_2;
        } else if (pos3 == 2 && pos6 == 2 && pos9 == 2) {
            document.getElementById("juego_terminado").value = 1;
            alert("¡Felicitaciones, el jugador 2 ha vencido!"); continuar = 2;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor_2 = document.getElementById("ver_victorias_j2").innerHTML = victorias_j2 + 1;
            document.getElementById("ver_derrotas_j1").innerHTML = "" + nuevo_valor_2;
            document.getElementById("victorias_j2").value = nuevo_valor_2;
        }
        //------------------------------------------------------------------------------------------------------------------
        if (pos1 != 0 && pos2 != 0 && pos3 != 0 && pos4 != 0 && pos5 != 0 && pos6 != 0 && pos7 != 0 && pos8 != 0 && pos9 != 0 && continuar != 2) {
            alert("¡No hay ganadores ni perdedores. EMPATE!");
            document.getElementById("juego_terminado").value = 1;
            document.getElementById("juego_nuevo").disabled = false;
            nuevo_valor_3 = document.getElementById("ver_empates").innerHTML = empates + 1;
            document.getElementById("empates").value = nuevo_valor_3;
        }
    }
}