import React from 'react';
import Proptypes from 'prop-types';
//css
import './clima.css';
import climalogo from './climalogo.png'

const Clima = ({resultado}) => {

    const{name, main} = resultado;

    if(!name) return null;

    // grados kelvin
    const kelvin=273.15
    return (
        <div className="climaCard card-panel col s12">
            <div className="black-text">
                <h5>El clima de {name} es </h5>
                <div className="imgClima"><img src={climalogo} width="100%" alt="clima"></img></div>
                <h2 className="temperatura">{ parseFloat(main.temp - kelvin).toFixed(2)}
                <span>&#x2103;</span></h2>
                <div className="black-text2">
                <div className="TemperaturaMax">    
                <h5 className="temperaturaMax">Temperatura maxima</h5>
                <h5 className="temperaturaMax">{ parseFloat(main.temp_max - kelvin).toFixed(2)}
                <span>&#x2103;</span></h5>
                </div>
                <div className="TemperaturaMin">  
                <h5 className="temperaturaMin">Temperatura minima</h5>
                <h5 className="temperaturaMin">{ parseFloat(main.temp_min - kelvin).toFixed(2)}
                <span>&#x2103;</span></h5>
                </div>
                </div>
            </div>
        </div>
    );
};

Clima.prototype = {
    resultado: Proptypes.object.isRequired
}

export default Clima;