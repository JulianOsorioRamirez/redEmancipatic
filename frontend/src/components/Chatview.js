import React, { useState, useEffect } from "react";
import Navbar from "./navBar/Navbar";
import ChatComponents from "./chatComponents";
import { useParams } from "react-router-dom";






//Componente funcional -> 
function Chatview() {


  const { usuario } = useParams()



  return (
<div>
<Navbar usuario={usuario}/>
<ChatComponents/>
</div>


  );

}

export default Chatview;