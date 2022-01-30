import React from 'react'
import "./intro.css"
import Me from "../../img/2.png"

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-greet'>Hi lad, my name is </h2>
                    <h1 className='i-name'>Jorge Martínez</h1>
                    <div className='i-title'>
                        <div className= 'i-title-wrapper'>
                            <div className='i-title-item'>Desarrollador Frontend con React</div>
                            <div className='i-title-item'>Ingeniero obras públicas</div>
                            <div className='i-title-item'>Master en puertos y obras marítimas</div>
                            <div className='i-title-item'>Piloto avanzado de RPAS/Drones autorizado por AESA</div>
                            <div className='i-title-item'>Futbolero</div>
                        </div>
                    </div>
                    <p className='i-description'>
                    A lo largo de mi trayectoria académica y profesional, me he formado en el estudio de la
                    ingeniería de obras públicas en la rama de hidrología e hidráulica, especializándome en obras
                    y construcciones en el entorno marino y las implicaciones de las mismas en la costa. Una 
                    vez terminados los estudios de ingeniería, me decido por reinventarme, adentrándome en
                    el mundo de la programación web mediante el autoaprendizaje.
                    </p>
                </div>
                
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={Me} alt='' className='i-img' />
            </div>
        </div>
    )
}

export default Intro