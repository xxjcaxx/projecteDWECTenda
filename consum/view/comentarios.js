export {getcomentarios}

import { usuaris } from "../dadesTest/dades"

function getcomentarios(comentarios){

    let listaComentarios = document.createElement("div")

    for (const c of comentarios) {
        
        let divC = document.createElement("div")
        
        let divPunt = document.createElement("div")
        let divUsuario = document.createElement("div")
        let divDesc = document.createElement("div")

        let idANombreUser = ""

        for (const u of usuaris) {
            if(u.id === c.idUsuario){              
                idANombreUser = u.nom
            }
        }

        divPunt.innerHTML = "Puntuación: " + c.puntuacion
        divUsuario.innerHTML ="Usuario: "+ idANombreUser
        divDesc.innerHTML ="Descripción: "+ c.descripcion

        divC.append(divPunt)

        divC.append(divUsuario)

        divC.append(divDesc)

        listaComentarios.append(divC)
        
    }


    return listaComentarios

}