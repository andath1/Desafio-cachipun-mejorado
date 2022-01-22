let jugadas = prompt("Ingresa cantidad de veces que deseas jugar: ")


let cont = 1
let contusu = 0
let contmaq = 0

while (cont <= parseInt(jugadas)) {
    let machineChoice = Math.floor(Math.random() * (4 - 1)) + 1;
    /*  alert(machineChoice) */
    opcionUsuario = parseInt(prompt(`
"¿Qué eliges?:
1 : Piedra
2 : Papel
3 : Tijeras
`));

    switch (opcionUsuario) {
        case 1:
            alert("Eligiste Piedra")
            break
        case 2:
            alert("Eligiste Papel")
            break
        case 3:
            alert("Eligiste Tijeras")
            break
    }
    switch (machineChoice) {
        case 1:
            alert("La maquina eligió Piedra")
            break
        case 2:
            alert("La maquina eligió Papel")
            break
        case 3:
            alert("La maquina eligió Tijeras")
            break
    }


    if (opcionUsuario === 1) {
        if (machineChoice === 1) {
            alert("Empate!");
        } else if (machineChoice === 2) {
            alert("Haz perdido contra la maquina");
            contmaq = contmaq + 1;
        } else if (machineChoice === 3) {
            alert("Felicidades Ganaste!!");
            contusu = contusu + 1
        }
    }
    if (opcionUsuario === 2) {
        if (machineChoice === 2) {
            alert("Empate!");
        } else if (machineChoice === 3) {
            alert("Haz perdido contra la maquina");
            contmaq = contmaq + 1;
        } else if (machineChoice === 1) {
            alert("Felicidades Ganaste!!");
            contusu = contusu + 1
        }
    }
    if (opcionUsuario === 3) {
        if (machineChoice === 3) {
            alert("Empate!");
        } else if (machineChoice === 1) {
            alert("Haz perdido contra la maquina");
            contmaq = contmaq + 1;
        } else if (machineChoice === 2) {
            alert("Felicidades Ganaste!!");
            contusu = contusu + 1
        }
    }
    cont = cont + 1

}
document.write("ganaste " + contusu + " la maquina gano " + contmaq + " los empates fueron " + (jugadas - contusu - contmaq));