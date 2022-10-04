
import React, { useState, useEffect } from "react";
import Logo from "./logo/logo1";
import Options from "./options";
import { useParams } from "react-router-dom";







function OptionsUsers() {

  const { usuario} = useParams()
  




  return (
<div>
 <Logo/>
 <Options usuario={usuario} />
 </div>


  );

}

export default OptionsUsers;