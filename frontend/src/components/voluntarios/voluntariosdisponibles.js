import React, { useState, useEffect } from "react";
import star  from "../../assets/images/Vector.png"
import star2  from "../../assets/images/Vector2.png"
import { useNavigate } from "react-router-dom";

import './Voluntarios.css';


function Voluntariosdisponibles(props) {
    const navigate = useNavigate()
    const [voluntarios, setVoluntarios] = useState("")
    const [cambio1, setCambio1] = useState("")
    useEffect(() => {
       
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                categoria: props.categoria.categorias2.Categorias
            }),
        };
        fetch("/voluntariosdisponibles", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                setVoluntarios(res.voluntarios)
            })
    }, [props]);
    function sendvoluntario(todo){
    navigate(`/voluntarioView/${todo.nombreApellidos}/${props.usuario}`)
}


    return (
<div className="opiniones2">
    <h1 className="voluntariesDisponible">Voluntarios disponibles</h1>
        <div className="horizontal-scroll-wrapper">
            {voluntarios !="" ? voluntarios.map((todo, i) =>
                <div className='.Card-voluntario' onClick={()=>sendvoluntario(todo)}>
                    <div className="imgCardsDiv">
                    <img className="imgCards1" src={require(`../../assets/images/` + todo.fotoV)} />
                    </div>
                    <div className="starsVoluntaries">
                      <img className="starImg" src={star} alt="" />
                      <img className="starImg" src={star} alt="" />
                      <img className="starImg" src={star} alt="" />
                      <img className="starImg" src={star} alt="" />
                      <img className="starImg" src={star2} alt="" />
                    </div>
                    <h4 className='cardTitles1'>{todo.nombre}</h4>
                    <p className='cardText1'> {todo.apellidos}</p>
                </div>) : " "}
        </div>
        </div>
    )
}
export default Voluntariosdisponibles