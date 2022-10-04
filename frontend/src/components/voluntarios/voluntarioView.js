
import React, { useState, useEffect } from "react";
import Navbar from '../navBar/Navbar';
import VoluntarioCard from "./VoluntarioCard"
import { useParams } from "react-router-dom";

import './Voluntarios.css';


//Componente funcional -> 
function VoluntarioView() {
  const { voluntario, usuario} = useParams()






  return (
<div>
    <Navbar usuario={usuario}/>
    <VoluntarioCard voluntario={voluntario}/>

</div>


  );

}

export default VoluntarioView;