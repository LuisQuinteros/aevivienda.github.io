var x=1;
	var y=0;
	var z=0;

function rollDice()
{
    var dado = document.getElementById("dado");
    var dado2 = document.getElementById("dado2");
    var puntosHumano = document.getElementById("puntosHumano");
    var puntosMaquina = document.getElementById("puntosMaquina");

    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;

    var pos =d1 + y;
    var pos2 =d2 + z;

    dado.innerHTML = d1;
    dado2.innerHTML = d2;

    puntosHumano.innerHTML = "Tu puntuacion es  "+ pos +".";
    puntosMaquina.innerHTML = "La puntuacion de la Maquina es  "+ pos2 +".";

    tiro.innerHTML = " La cantidad de tiros es "+x+".";

    x = x+1;
    y = pos;
    z = pos2;
    if (pos > 99)
    {
    	alert("EL juego ha terminado Has Ganado");
    	y = 0;
    }
    if (pos2 > 99)
    {
    	alert("EL juego ha terminado Has Perdido");
    	y = 0;
    }
}