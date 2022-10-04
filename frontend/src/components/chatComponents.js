import React, { useState, useEffect } from "react";
import Navbar from "./navBar/Navbar";

//Componente funcional ->
function ChatComponents() {
  return (
    <div>
      <div className="Ttulo-y-descripcin">
        <p className="userTextChat ">Pepe Rodríguez</p>
        <p className="userMsjChat">
          El otro día recibí un mensaje y no sé cómo responderlo por ordenador
        </p>
        </div>
        <div className="CONVERSACIN-CHAT">
          <div className="FRAME-CHAT">
            <div className="Burbuja">
              <p className="-Mensaje">
                ¡Hola, Pepe! Soy Laura, encantada. Cuéntame, ¿el correo era de
                Gmail, Hotmail, Yahoo…?
              </p>
            </div>
            <div className="BURBUJAS-CHAT">
              <div className="divMsjChat2">
                <p className="-Mensaje2">Gmail</p>
              </div>
            </div>
            <div className="Burbuja2">
              <p className="-Mensaje3">
                ¡Genial! ¿Te llamo y te explico paso a paso cómo hacerlo?
              </p>
            </div>
          </div>
        </div>
        <div class="BASEChat">
        <input
                  className="chatInput "
                  id="telfLog"
                  type="text"
                  placeholder="Escribe aqui"
                  
                />
        </div>
        
      
    </div>
  );
}

export default ChatComponents;