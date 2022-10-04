
import React, { useState, useEffect } from "react";
import Logo from "../logo/logo1";
import CheckForm from "./checkForm";
import { useParams } from "react-router-dom";





//Componente funcional -> 
function Checkview() {
  const { usuario} = useParams()
  





  return (
<div>
<Logo/>
<CheckForm usuario={usuario}/>
</div>


  );

}

export default Checkview;