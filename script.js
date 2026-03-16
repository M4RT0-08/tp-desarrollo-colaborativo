let queVote = "";
let ideas = 0;

const original = document.getElementById("idea2")
const textoVotos = document.getElementById("contador")




function voteEsto(ideaN){
    return queVote.includes(ideaN);
}
   


const form = document.getElementById("formPropuesta")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value
    let idea = document.getElementById("idea").value

    if (nombre == "" || idea == "") {

        document.getElementById("mensaje").innerText = "Completa todos los campos"

    } else {
        document.getElementById("mensaje").innerText = "La idea se mando con exito!"
    }

    ideas++;
    const ideaa = original.cloneNode(true);
    ideaa.id = "nuevaIdea";
    original.after(ideaa);

    let a = ideaa.querySelector("#name");
    let b = ideaa.querySelector("#ideado");
    let c = ideaa.querySelector("#votar");
    let d = ideaa.querySelector("#contador");
    a.innerText = nombre;
    b.innerText = idea;
    c.onclick = function(){
        if (!voteEsto(ideas)) {
        d.innerText = "Votos: 1"
        queVote+=ideaN+"";
    }
    }





})