
import React, { useState, useEffect } from "react";
import member from "../assets/images/member.png"
import voluntary from "../assets/images/voluntariosImg.png"
import Ambos from "../assets/images/ambos.png"


function Options(props) {
  

  const [typeUser, setTypeUser] = useState("")

  if (typeUser === "ambos"||typeUser === "voluntario"||typeUser === "Miembro") {
    window.location.assign(`/checkView/${props.usuario}`)
  }
 if(typeUser=== "miembro"){
  window.location.assign(`/categories/${props.usuario}`)
 }
  
  

  return (
    <div>

      <div className="opstionsTextC" >
        <p className="optionsText">
          ¿Qué papel quieres tener en la red?
        </p>
      </div>
      <div className="imgMember">
        <img className="memberImg" src={member} alt="" />
      </div>
      <div class="Card-tipos-miembro" onClick={() => setTypeUser("miembro")}>
        <div>
          <p className="members">
            Miembros
          </p>
          <p className="textCardOptions">
            Elige esta opción si buscas a alguien que te acompañe para solucionar tus problemas.
          </p>
        </div>
      </div>

      <div className="imgMember2">

        <img className="memberImg2" src={voluntary} alt="" />

      </div>
      <div className="Card-tipos-miembro2" onClick={() => setTypeUser("voluntario")}>
        <div>
          <p className="members">
            Voluntarios
          </p>
          <p className="textCardOptions">
            Elige esta opción si buscas aportar tu granito de arena a la comunidad de mayores
          </p>
        </div>
      </div>
      <div className="imgMember">

        <img className="memberImg3" src={Ambos} alt="" />

      </div>
      <div onClick={() => setTypeUser("ambos")} className="Card-tipos-miembro3">
        <div>
          <p className="members">
            Ambos
          </p>
          <p className="textCardOptions">
            Elige esta opción si buscas las dos anteriores opciones
          </p>
        </div>
      </div>


    </div>


  );

}

export default Options;