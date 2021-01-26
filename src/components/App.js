import React, {Fragment, useState, useEffect} from 'react';
import Header from './header/Header';
import Form from './form/form';
import Clima from './clima/Clima';
import Error from './error/Error';
import Otros from './otros/otros';
//css
import './App.css';

function App() {

  //State
  const [busqueda, guardarBusqueda]= useState({
    ciudad:'',
    pais:''
});

const[consultar, guardarConsultar] = useState(false);
const [resultado, guardarResultado]=useState({});
const[error, guardarError] = useState(false);
const[otros, guardarOtros] = useState(true)

const {ciudad, pais} = busqueda;

useEffect(() => {
  const consultarAPI = async () => {
    if (consultar){
      const appId ='216c7c1083142241108f6618918c88f9';
    const url = `  http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}
    &appid=${appId}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    
    guardarResultado(resultado);
    guardarConsultar(false);
    guardarOtros(false);

    if(resultado.cod === "404"){
      guardarError(true);
      guardarOtros(true);
    
    } else {
      guardarError(false);
      guardarOtros(false);
      
    };

    }
   
  }
  consultarAPI();
  // eslint-disable-next-line
},[consultar]);

let componente;
if(error) {
  componente = <div className="errorApp"><Error mensaje="No Hay Resultados"/></div>
} else {
  componente = <Clima
  resultado={resultado}/>
};




  return (
    <Fragment>
      <Header
      titulo='Clima React App'/>
    
     <div className="contenedor-form">
     <div className="contenedorApp">
       <div className=" appRow row">
         <div className="form col m6 s12">
           <Form
           busqueda={busqueda}
           guardarBusqueda={guardarBusqueda}
           guardarConsultar={guardarConsultar}/>
         </div>
         <div className="col m6 s12">
           {componente}
         </div>
       </div>
      </div>
      { otros ? (
        null
       ) : (
         <Otros
         resultado={resultado}/>
       ) } 
              
     </div>
     
    </Fragment>
  );
}

export default App;

