function getJugador(){
    let jugador= {
        nombre: "nahuel",
        apellido: "bertulo",
        club: "cerro porteño",
        apodo: "cornu",
        edad: "20",
        activo: true,
        historial: [],
    }
    console.log (jugador.club)
}

function getCharacter() {
fetch (`https://rickandmortyapi.com/api/character/1`)
.then (function(response){
  return response.json()
})
.then (function(data){
 console.log(data);
})
}