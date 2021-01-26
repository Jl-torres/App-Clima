import React, { useState } from 'react';
import Error from '../error/Error';
import Proptypes from 'prop-types';
//css
import './form.css';


const Form = ({busqueda, guardarBusqueda, guardarConsultar}) => {

//State

const [error, guardarError] = useState(false);

const {ciudad, pais} = busqueda;
//Funcion

const handleChange = e => {
    guardarBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
    });
}

const handleSubmit = e => {
    e.preventDefault();
    //validar
    if(ciudad.trim() === '' || pais.trim() === '') {
        guardarError(true);
        return;
    }
    guardarError(false);
    guardarConsultar(true);
}

    return (
        <form className="formulario" onSubmit={handleSubmit} >
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}

            <div className="inputForm input-field col s12">
                <select name="pais" id="pais" value={pais} onChange={handleChange}>
                 <option value="">--Seleccione un pais--</option>
                 <option value="US">Estados Unidos</option>
                 <option value="MX">Mexico</option>
                 <option value="AR">Argentina</option>
                 <option value="CO">Colombia</option>
                 <option value="CR">Costa Rica</option>
                 <option value="ES">España</option>
                 <option value="PE">Peru</option>
                 <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="pais">Pais:</label>
            </div>
            
            <div className="inputForm input-field col s12">
                <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
                className="inputCiudad"/>
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
           
            <div className="input-field col s12">
                <input 
                type="submit"
                value="Buscar Clima"
                className="btn"
                />

            </div>
        </form>
    );
};

Form.prototype = {
    busqueda: Proptypes.object.isRequired,
    guardarBusqueda: Proptypes.func.isRequired,
    guardarConsultar: Proptypes.func.isRequired
}

export default Form;