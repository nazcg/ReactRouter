import React,{Fragment, useState} from 'react';
import { withRouter } from 'react-router-dom';

function Formulario (props) {
    const [nombre, setnombre] = useState("");
    const [apellido, setapellido] = useState("");
    const [telefono, settelefono] = useState("");

    function submitValue(e){
        e.preventDefault();
        const detalles = {
            'nombre': nombre,
            'apellido': apellido,
            'telefono': telefono,
        }
        // console.log(detalles);
        props.history.push({
            pathname:'Info',
            state: detalles
        });
        console.log(props.history);
    }

    return(
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={submitValue}>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese Nombre" 
                    className="form-control"
                    type= "text"
                    name="nombre"
                    onChange={e => setnombre(e.target.value)}>

                    </input>
                </div>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese Apellido" 
                    className="form-control"
                    type= "text"
                    name="apellido"
                    onChange={e => setapellido(e.target.value)}>

                    </input>
                </div>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese su Nro de Telefono" 
                    className="form-control"
                    type= "number"
                    name="telefono"
                    onChange={e => settelefono(e.target.value)}>

                    </input>
                </div>
                <div className="col-md-3">
                    <button  className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>
        
    );

}

export default withRouter(Formulario);