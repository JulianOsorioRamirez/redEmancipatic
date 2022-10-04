import React, { useState, useEffect } from "react";
import voluntarioGirl from "../../assets/images/Rectangle_6girl.png";
import star from "../../assets/images/Vector.png"
import VoluntarioOpinions from "./opinionsVoluntarios";

import './Voluntarios.css';

//Componente funcional ->
function VoluntarioCard(props) {
  const [voluntario, setVoluntario] = useState("")
  console.log(props.voluntario)

  useEffect(() => {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: props.voluntario
      }),
    };
    fetch("/voluntario", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setVoluntario(res.voluntario)
      })
  }, [props]);




  return (
    <div >
      <div className="TXT-PIC">
        <div className="voluntarioImg">
          {voluntario != "" ? <img className="voluntarioImg" src={require(`../../assets/images/` + voluntario.fotoV)} alt="" /> : ""}
        </div>
        <div>
          <p className="voluntarioName"> {voluntario != "" ? voluntario.nombreApellidos : ""}</p>
        </div>

      </div>
      <div class="Valoraciones">
        <img className="starImg" src={star} alt="" />
        <p className="numStar">
          {voluntario != "" ? voluntario.estrellas : ""}
        </p>
        <p className="-opiniones">
          ({voluntario != "" ? voluntario.nOpinion + " opiniones" : ""})
        </p>
      </div>
      <p className="Aadir-opinin">
        Añadir opinión
      </p>
      <p className="voluntarioDescripcion">
        {voluntario != "" ? voluntario.bio : ""}
      </p>

      <p class="questText">
        ¿En qué te puedo ayudar?
      </p>

      <ul>
        {voluntario != "" ? voluntario.serviciosDisponibles.map((todo, i) =>
          <li className="li">{todo}</li>
        ) : " "}
      </ul>
     {voluntario !=""? <VoluntarioOpinions voluntario={voluntario.nombreApellidos}/>:""}
      <div className='footerCont'>
        <div id='footer'>
          <a id='donate' href='#'>Contactar</a>
        </div>
      </div>

    </div>
  );
}

export default VoluntarioCard;