import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import xcircle from "../../assets/images/x-circle.png"
import arrow from "../../assets/images/arrow-right-circle.png"
import './Registro.css'

function ContRegis() {
  const [showSecondPart,setShowSecordPart]=useState(false)
  const [sendName, setDataToName] = useState("");
  const [sendUnName, setDataToUname] = useState("");
  // const [sendDni, setDataToDni] = useState("");
  const [sendPass, setDataToPass] = useState("");
  const [sendPassConf, setDataToConPass] = useState("");
  const [sendNumber, setDataToNumber] = useState("");
  const [sendPostalCode, setDataToPostalCode] = useState("");
  const [state, setState] = useState("");
  const [isShown, setIsShown] = useState(true);
  const[user,setUser] = useState("")
 
  



  const handleClick = event => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: sendName,
        unName: sendUnName,
        pass: sendPass,
        passConf: sendPassConf,
        number: sendNumber,
        postalCode: sendPostalCode,
      }),
    };
   

    fetch("registro", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        
        setUser(
       
         res.usuario.Nombre
        
      )
       
         setIsShown(current => !current);
        })
     
    
      
      

  }

const siguiente = event => {
    if(isShown === false){
       window.location.assign(`/Options/${user}`)
      }
}
  // const sendData = () => {
    
    
    
  // };

  return (
    <div className="BASE">
      <div className="msjTrue"style={{display: isShown ? 'none' : 'block'}}>
        <div className="xDiv">
        <img className="xcircle" onClick={siguiente}  src={xcircle}/>
        </div>
        <div className="msjText">
           <p className="textP">¬°ENHORABUENA!</p>
        </div>
        <p className="textMsj">
         Ya te has dado de alta y tienes una cuenta en RED EmancipaTIC
      </p>
      </div>


      {!showSecondPart ? (


        <div>
          <div className="COMPLETE">
            <label>Nombre</label>
            <input
              className="Rectangle-1"
              name="name"
              type="text"
              placeholder="Pon tu Nombre"
              onChange={(e) => setDataToName(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Apellidos</label>
            <input
              className="Rectangle-1"
               name="second_name"
              type="text"
              pattern="^([A-Za-z]{1,15})$"
              placeholder="Pon tus Apellidos"
              onChange={(e) => setDataToUname(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Movil</label>
            <input
              className="Rectangle-1"
              name="phone"
              type="text"
              pattern="^\d{9}$"
              title="Ha de contener 9 n√ļmeros"
              placeholder="Pon tu numero"
              onChange={(e) => setDataToNumber(e.target.value)}
            />
          </div>
          <span className="-de-2">1 de 2</span>
          <button onClick={() => setShowSecordPart(true)}>
            Siguiente{" "}
            <div className="imgMember">
           <img className="arrowImg" src={arrow} alt="" />
          </div>
          </button>
        </div>
      ) : (
<>
<div className="COMPLETE">
            <label>C√≥digo postal</label>
            <input
              className="Rectangle-1"
               name="cp"
              type="text"
              placeholder="Pon tu codigo postal"
              pattern="^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$"
              title="El c√≥digo postal ha de tener 5 n√ļmeros. No se admiten caracteres especiales ni letras."
              onChange={(e) => setDataToPostalCode(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Contrase√Īa</label>
            <input
              className="Rectangle-1"
               name="pass"
              type="password"
              placeholder="Pon tu contrase√Īa "
              pattern="(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}"
              title="La contrase√Īa ha de tener al menos una may√ļscula, min√ļculas y un n√ļmero. M√≠nimo 6 caracteres, m√°ximo 16."
              onChange={(e) => setDataToPass(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Repite tu contrase√Īa</label>
            <input
              className="Rectangle-1"
               name="pass2"
              type="password"
              placeholder="Repite tu contrase√Īa"
              pattern="(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}"
              title="La contrase√Īa ha de tener al menos una may√ļscula, min√ļculas y un n√ļmero. M√≠nimo 6 caracteres, m√°ximo 16."
              onChange={(e) => setDataToConPass(e.target.value)}
            />
          </div>

          <label className="labelCheckR">
          <input type="checkbox" className="check2" id="check1" />
          <span className="spanR">He le√≠do y acepto la Pol√≠tica de privacidad</span>
          </label >
          <div className="span-de-3">
          <span className="-de-3">2 de 2</span>
          </div>
          

          <button onClick={handleClick}>Crear Cuenta</button>

      </>
        
     /*    <div>
          <div className="COMPLETE">
            <label>Codigo postal</label>
            <input
              className="Rectangle-1"
               name="cp"
              type="text"
              placeholder="Pon tu codigo postal"
    
              onChange={(e) => setDataToPostalCode(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Contrase√Īa</label>
            <input
              className="Rectangle-1"
               name="pass"
              type="password"
              placeholder="Pon tu contrase√Īa "
    
              onChange={(e) => setDataToPass(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Repite tu contrase√Īa</label>
            <input
              className="Rectangle-1"
               name="pass2"
              type="password"
              placeholder="Repite tu contrase√Īa"
     
              onChange={(e) => setDataToConPass(e.target.value)}
            />
          </div>

          <label className="labelCheckR">
          <input type="checkbox" className="check2" id="check1" />
          <span className="spanR">He leido y acepto la Politica de privacidad</span>
          </label >
          <div className="span-de-3">
          <span className="-de-3">2 de 2</span>
          </div>
          

          <button onClick={handleClick}>Crear Cuenta</button>
          
        </div> */
   
        
      )}
      
    </div>
  );
}

export default ContRegis;
