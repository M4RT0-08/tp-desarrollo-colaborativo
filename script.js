let votos = 0
let votaste = false

const original = document.getElementById("idea")
const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")
const idea = original.cloneNode(true);
idea.id = "nuevaIdea";
original.after(idea);

boton.addEventListener("click", function () {

    if (!votaste) {
        votos = votos + 1

        textoVotos.innerText = "Votos: " + votos

        console.log("voto registrado")
        votaste = true
    }

})


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


})