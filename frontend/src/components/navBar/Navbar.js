import React, { useState } from 'react';
import Picture from '../../assets/images/perfilPicture.png';
import mailIcon from '../../assets/images/mailIcon.svg';

import './Navbar.css';


function Navbar(props) {

    const [isShown, setIsShown] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    }
  


    return (
        <nav>
            <div id="navbar">


                <img src={mailIcon} id="mailIcon" />

                <div id="burgerBox" onClick={handleClick}>
                    <p id="burgerText" >Menú</p>
                    <div className='bars__menu'>
                    <span className='line1__bars-menu' ></span>
                    <span className='line2__bars-menu' ></span>
                    <span className='line3__bars-menu' ></span>
                    </div>
                  
                </div>
                <div id="saludo">
                    <img className='picture' src={Picture} />
                    <h3>Hola, {props.usuario}</h3>
                </div>



                <div className='menu' style={{ display: isShown ? 'none' : 'block' }}>

                    <div id='xContainer' onClick={handleClick}>
                        <p id='xLetter'>x</p>
                    </div>
                    <ul className='list'>
                        <li className='menuList'><a Link='#'>Categorías</a></li>
                        <ul className='subList'>
                            <li className='menusubList'><a Link='#'>Salud</a></li>
                            <li className='menusubList'><a Link='#'>Nuevas Tecnologías </a></li>
                            <li className='menusubList'><a Link='#'>Amigos y Ocio</a></li>
                            <li className='menusubList'><a Link='#'>El día a día</a></li>
                            <li className='menusubList'><a Link='#'>Burocracia</a></li>
                            <li className='menusubList'><a Link='#'>Servicios del Municipio</a></li>
                        </ul>
                        <li className='menuList'><a Link='#'>Perfil</a></li>
                        <li className='menuList'><a Link='#'>Notificaciones</a></li>
                        <li className='menuList'><a Link='#'>DONA</a></li>
                        <li className='menuList'><a Link='#'>Salir</a></li>


                    </ul>
                    {/* <div id="menuOptions">
                <a href='#'>¿Quieres donar?</a>
            <div id="cta">
                <a href='#'>CTA</a>
            </div>
            </div> */}

                </div>


            </div>
        </nav>
    )
}

export default Navbar;