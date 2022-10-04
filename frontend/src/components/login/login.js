import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css" 



function Login(props) {
  const navigate = useNavigate()
  const [sendPhone, setDataToPhone] = useState("")
  const [sendPass, sendDataPass] = useState("")
  const [mensaje, setMensaje] = useState("")

  function sendLogin() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        telf: sendPhone,
        pass: sendPass

      }),
    };

    fetch("login", requestOptions)
      .then((response) => response.json())
      .then((res) => {
       setMensaje(res.logeado)
        if (res.logeado!==false){
          navigate(`/categories/${res.logeado}`)
        }

    });
  }
  function sendRegister() {
navigate("/Regist")
  }



  return (

    <div>

      <div className="loginInputs">

        
          <div className="loginInputs">

            <div className="inputsLog">
              <div className="COMPLETE">
                <label>Movil</label>
                <input
                  className="Rectangle-1"
                  id="telfLog"
                  type="text"
                  placeholder="Introduce tu numero"
                  onChange={(e) => setDataToPhone(e.target.value)}
                />
              </div>
              <div className="COMPLETE">
                <label>Contraseña</label>
                <input
                  className="Rectangle-1"
                  id="telfLog"
                  type="password"
                  pattern="(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}"
                  title="La contraseña ha de tener al menos una mayúscula, minúculas y un número. Mínimo 6 caracteres, máximo 16."
                  placeholder="Pon tu contraseña"
                  onChange={(e) => sendDataPass(e.target.value)}
                />

              </div>

            </div>


            <label className="labelCheckRemember">
              <input type="checkbox" className="check2" id="check1" />
              <span className="spanRemember">Recordar mi contraseña</span>
            </label>
            <div className="button">
              <button id="buttonLogin" onClick={sendLogin}>Entrar</button>

            </div>
            <div className="passRemember">
              <label for="remember" id="rememberText">¿Has olvidado tu contraseña?</label>
            </div>
            <div class="Line-1"></div>

            <label id="newMemberTxt">¿Eres Nuevo?</label>

            <button id="buttonLogin2" onClick={sendRegister}>Regístrate</button>


          </div>

        </div>
      </div>
    

  )

}

        export default Login;