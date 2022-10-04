import React, { useEffect, useState } from 'react'
import './Solicitudes.css'
import Arrow from '../../assets/images/arrow-right-circle.png';

function Solicitudes (props){

    const [solicitudes, setSolicitudes]  = useState('');
    const [cambio, setCambio] = useState('');



    
    useEffect(() => {
        fetch("/solicitudes")
          .then((response) => response.json())
          .then((res) => setSolicitudes(res))
      }, []);
    

      
    useEffect(() => {
      if (cambio !== '') {
        window.location.assign(`/chatView/${props.usuario}`)
      }



    }, [cambio])



  return (
    <div>

{solicitudes ? solicitudes.map((solic, i) =>

<div className='cards' onClick={() => setCambio(solic)}>
  
  <p id='cardText'>{solic.asunto}</p>
  <p id='nombreSolic'>{solic.nombreApellidos}</p>
  <span id='kmFecha'>{solic.Kms} - {solic.fechaCreacion}</span>
  <img id="imgSolic" src={require(`../../assets/images/` + solic.fotoMiembro)} />
 <img id='arrow' src={Arrow}/>
</div>) : ""}
 

<div className='footerCont'>
          <div id='footer'>
            <a id='donate' className='footerSolic' href='#'>Añade Solicitud</a>
            <div className='contPlus'>
            <a id='plusSolic'>+</a>
            </div>
          </div>
        </div>

</div>
  )
}


export default Solicitudes;