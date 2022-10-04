import React, { useState, useEffect } from "react";

import './Voluntarios.css';


//Componente funcional ->
function VoluntarioOpinions(props) {
  const [opinion, setOpinion] = useState("")

  useEffect(() => {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: props.voluntario
      }),
    };
    fetch("/opinion", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setOpinion(res.opinion)
        console.log(res.opinion)
      })
  }, [props]);

  return (
    <div className="opiniones">
      <div className="opinionhead">
        <p class="Opiniones">
          Opiniones
        </p>
      </div>
      <div className="horizontal-scroll-wrapperOpinion">

        {opinion != "" ? opinion.map((todo, i) =>
          <div className="opinion3">

            <div class="OPININ---VALORACIN">
              <div class="Frame-9">
                <img className="imgCards2" src={require(`../../assets/images/` + todo.fotoMiembro)} />

                <p class="opinionName">
                  {todo.nombreMiembro}
                </p>

              </div>

              <p class="opinionText">
                {todo.opinion}
              </p>
            </div>
          </div>) : ""}
      </div>
    </div>
  );
}

export default VoluntarioOpinions;
