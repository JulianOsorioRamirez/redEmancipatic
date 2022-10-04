import React, { useState, useEffect }from 'react'
import './Landing.css'
import Logo from '../../assets/images/logoHorizontal.png'
import ImgCab from '../../assets/images/fotoCabecera.png'
import fotoRedonda from '../../assets/images/fotoRedonda.png'
import Banda from '../../assets/images/bandaFotos.png'
import Bandainfo from '../../assets/images/bandaInfo.png'
import movilLand from '../../assets/images/movilLand.png'
function Landing () {
    const [cambio, setCambio] = useState('');



    
    useEffect(() => {
      if (cambio !== '') {
        window.location.assign('/login')
      }
    }, [cambio])

  return (
    <div>
    <img className='LogoLand' src={Logo}></img>
    <p className='titleLand'>¿Sabías que Internet puede hacerte la vida más fácil?</p>
    <img className='imgCab' src={ImgCab}></img>
    <p className='subTitleLand'>Únete a nuestra comunidad.<br/> ¡Es gratis!</p>
    <div className='descubre' onClick={() => setCambio(1)}>
        <a id="descubre">Descubre cómo</a>
    </div>
    <div className='contText'>
        <div className='titleCont'>
            <p>Red EmancipaTIC es para ti si...</p>
        </div>
        <div className='listCont'>
            <p className='listText'>¿No sabes cómo <span>utilizar Whatsapp o enviar un correo</span>?</p>
            <p className='listText'>¿Necesitas que alguien te <span>acompañe a la compra</span>?</p>
            <p className='listText'>¿Te gustaría <span>pedir cita con tu médico por Internet </span>y no sabes cómo?</p>
            <p className='listText'>¿Te gustaría encontrar <span>personas afines a ti</span>?</p>
        </div>
        <div className='fotoList'>
            <img src={fotoRedonda}></img>
        </div>
   
    </div>
<div>
    <img src={Banda}></img>
    <img className="BandaInfo" src={Bandainfo}></img>
</div>
<div className='parteCont' onClick={() => setCambio(1)}>
    <p>Quiero formar parte</p>
</div>

<div className='formarParte'>
    <p className='Como'>¿Cómo unirte gratis?</p>
    <div className='listComo'>
        <p>1.- Accede a <span>Red EmancipaTIC</span> aquí abajo</p>
        <p>2.- <span>Escribe tus datos y crea tu propia contraseña,</span> por ejemplo, minietoeslomas1</p>
        <p>3.- Pincha sobre <span>'Crear cuenta</span></p>
        <p>4.- ¡Listo! <span>Ya puedes acceder</span> a Red EmancipaTIC y empezar a hablar con un voluntario.</p>
    </div>
    <img className='movilLand' src={movilLand}></img>
</div>
<div className='irEnlaces'>
    <p>Ir a Red EmancipaTIC</p>
    <p> Copyright 2022 Red EmancipaTIC<br/>Aviso Legal|Política de Privacidad|<br/>Política de Cookies</p>
</div>

    </div>
  )
}

export default Landing;