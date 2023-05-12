let pagAct = 0;
let info;
let cols = 2;
let eps = [0,0];
let names = ['','']
function getCharacter(x) {
    for(let i = 1; i < x+1; i++)
    {
        let id = document.getElementById("CharBox"+i).value;
        id = parseInt(id);
        let pag = parseInt(id / 20) + 1;
        let rId = (id % 20) - 1;
        if (pag == pagAct) {
            if(id > 0)
            {
                console.log('No Fetch');
                let dat = info.results[rId]
                document.getElementById("name"+i).innerText = dat.name;
                document.getElementById("status"+i).innerText = dat.status;
                document.getElementById("specie"+i).innerText = dat.species;
                document.getElementById("city"+i).innerText = dat.location.name;
                document.getElementById("foto"+i).innerHTML = ` <img src="` + dat.image + `">`;
                eps[i-1]=dat.episode.length;
                names[i-1]=dat.name;
                comparar();
            } else{
                document.getElementById("name"+i).innerText = "Error: Personaje invalido";
                document.getElementById("status"+i).innerText = "";
                document.getElementById("specie"+i).innerText = "";
                document.getElementById("city"+i).innerText = "";
                document.getElementById("foto"+i).innerHTML = "";
            }
        } else {
            console.log('Fecth');
            fetch("https://rickandmortyapi.com/api/character/?page=" + pag)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    let dat = data.results[rId]
                    info = data;
                    console.log(dat);
                    document.getElementById("name"+i).innerText = dat.name;
                    document.getElementById("status"+i).innerText = dat.status;
                    document.getElementById("specie"+i).innerText = dat.species;
                    document.getElementById("city"+i).innerText = dat.location.name;
                    document.getElementById("foto"+i).innerHTML = ` <img src="` + dat.image + `">`;
                    pagAct = pag;
                    eps[i-1]=dat.episode.length;
                    names[i-1]=dat.name;
                    comparar();
                })
                .catch(function (error) {
                    document.getElementById("name"+i).innerText = "Error: Personaje invalido";
                    document.getElementById("status"+i).innerText = "";
                    document.getElementById("specie"+i).innerText = "";
                    document.getElementById("city"+i).innerText = "";
                    document.getElementById("foto"+i).innerHTML = "";
                    console.log(error)

                })
        }
    }
}

let con = 0;
function comparar()
{
    con++;
    console.log(con+' || '+cols)
    if(con == cols){
        let maxeps = 0;
        for(let i = 0; i < cols; i++){
            if(maxeps < eps[i]){
                maxeps=eps[i];
            }
            console.log(eps[i])
        }
        console.log(maxeps);
        con = 0;
        let iguales = 0;
        let igualNames = '';
        for(let i = 0; i < cols; i++){
            if(maxeps == eps[i]){
                iguales++;
                if(iguales > 1) {igualNames+=' y '+names[i];}
                else {igualNames+=names[i];}
            }   
        }
        if(iguales == 1){
            document.getElementById("qdm").innerText = igualNames+' aparece en mas episodios con '+ maxeps;
        } else if(iguales > 1) {
            document.getElementById("qdm").innerText = 'Aparecen en la misma cantidad de episodios ('+igualNames+') con '+ maxeps;
        }
    }

}