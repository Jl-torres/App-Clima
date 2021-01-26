import React from 'react';
import './otros.css';
import Proptypes from 'prop-types';
//imagenes
import humedad from './media/humedad.png';
import presion  from './media/presion.png';
import vientos  from './media/vientos.png';

const Otros = ({resultado}) => {

  const {name, main, wind  } = resultado;

  if(!name) return null;

    return (
        <div className="otros">
          <div className="card-otros card-panel col s12">
          <div className="img-humedad">
         <img src={humedad} width="100%" alt="humedad"></img> 
         </div> 
         <div className="text">     
        <h3>Humedad</h3>
        <h3>{ parseFloat(main.humidity)} %</h3>
        </div> 
        </div>     
        <div className="card-otros card-panel col s12">
        <div className="img-presion">
         <img src={presion} width="100%" alt="presion"></img> 
         </div> 
         <div className="text">  
        <h3>Presion</h3> 
        <h3>{ parseFloat(main.pressure)} milibares</h3>  
        </div>
        </div>
        <div className="card-otros card-panel col s12"> 
        <div className="img-vientos">
         <img src={vientos} width="100%" alt="vientos"></img> 
         </div>
         <div className="text"> 
        <h3>Vientos</h3>
        <h5>Direccion: { parseFloat(wind.deg)}grados</h5>   
        <h5>Velocidad: { parseFloat(wind.speed)}m/s</h5>
        </div> 
        </div>
       
         
        </div>
    );
};

Otros.prototype = {
  resultado: Proptypes.object.isRequired
}

export default Otros;