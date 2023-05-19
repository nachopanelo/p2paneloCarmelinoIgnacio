function getUser(){
fetch('https://randomuser.me/api/')
.then(function (response){
    return response.json();
})
.then (function (data){
    let dat=data.results[0];
    document.getElementById("nombre").innerText= "Nombre: "+ dat.name.first;
    document.getElementById("apellido").innerText= "Apellido: "+  dat.name.last;
    document.getElementById("genero").innerText= "Genero: "+  dat.gender;
    document.getElementById("fnac").innerText= "Fecha de nacimiento: "+ dat.dob.date.slice(0,10);
    document.getElementById("localidad").innerText= "Localidad: "+ dat.location.country +' / '+ dat.location.state + ' / ' + dat.location.city;
    document.getElementById("foto").innerHTML= '<img src="'+ dat.picture.large + '"alt="">';
    console.log(dat);
})
    
}