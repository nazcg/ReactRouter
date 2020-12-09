import React, {useEffect, useState}from 'react';
import { withRouter } from 'react-router-dom';

function Info (props) {
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const [telefono, settelefono] = useState('');
    
 useEffect(()=> {
     if (props.location.state) {
         const estado = props.location.state;
         setnombre(estado.nombre);
         setapellido(estado.apellido);
         settelefono(estado.telefono);
     }
     else
     {
         alert('error');
     }
 }, [props.location.state]);

 const atras = () => {
     props.history.goBack();
 }
 return(
     <div>
         <h4> Gracias por registrarte {nombre + " " + apellido}, </h4>
         <h4> nos pondremos en contacto contigo a través de tu numero de telefono: {telefono}</h4>
     </div>
 )
}

export default withRouter(Info);
 