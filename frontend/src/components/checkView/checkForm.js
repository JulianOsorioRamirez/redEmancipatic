
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";




//Componente funcional -> 
function CheckForm(props) {
  const navigate = useNavigate()

let name = props.usuario
let location = "Madrid"
const [isShown, setIsShown] = useState(true);

function fuerza1(){
  navigate(`/categories/${name}`)
}




return (
<div>
<div className="checkFormBox">
    <div className="checkFormContainer">
      <div className="formContainer">
       <p className="FormText1"> Te llamas {name} y vives en {location}, ¿es correcto?</p>
       <div>

       </div>
       <label className="labelCheck1">
        <input type="radio" className="check1" id="check1" />
        <span className="Text-here">Sí</span>
      </label>
      <label>
        <input type="radio" className="check1" />
        <span className="Text-here">No</span>
      </label>
       
      </div>
      <div className=".QU-OFRECES">
        <p className="FormText2">¿En que crees que puedes ayudar?</p>
      <div className="CATEGORAS">
       <label className="labelCheck2">
        <input type="checkbox" className="check2" id="check1" />
        <span className="span3">Salud</span>
      </label>
      <label className="labelCheck3">
        <input type="checkbox" className="check2" />
        <span className="span3">Tareas diarias</span>
      </label>
      <label className="labelCheck4">
        <input type="checkbox" className="check2" id="check1" />
        <span className="span3">Ocio y amistad</span>
      </label>
      <label className="labelCheck5">
        <input type="checkbox" className="check2" />
        <span className="span3">Burocracia</span>
      </label>
      <label className="labelCheck6">
        <input type="checkbox" className="check2" id="check1" />
        <span className="span3">Servicios del municipio</span>
      </label >
      <label className="labelCheck7">
        <input type="checkbox" className="check2" />
        <span className="span3">Nuevas tecnologías</span>
      </label>
      </div>
      </div>
       <div className="checkContainer3">
       <p className="FormText3">¿Hasta donde puedes ayudar?</p>
       <label className="labelCheck8">
        <input type="checkbox" className="check2" id="check1" />
        <span className="span3">Rango de km</span>
      </label >
      <label className="labelCheck9">
        <input type="checkbox" className="check2" />
        <span className="span3">Solo mi municipio</span>
      </label>
       </div>
      <input type="button" className="btncheck" value="Entrar" onClick={fuerza1()}/>
    </div>
    <div className="msjTrue"style={{display: isShown ? 'none' : 'block'}}>
        <div className="xDiv">
        
        </div>
        <div className="msjText">
           <p className="textP">!ENHORABUENA!</p>
        </div>
        <p className="textMsj">
         Ya te has dado de alta y tienes una cuenta en RED EmancipaTIC
      </p>
      </div>

</div>
</div>


  );

}

export default CheckForm;