import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    useEffect(() => {
        console.log('Carga inicial')
    },[]);

    useEffect(() => { 
        console.log('formState cambio')
    },[formState]);

    const onInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]:target.value
            //[target.name] nombre de la propiedad que se esta modificando
            //target.value valor de la propiedad
        });
    }

    const sendForm = (formState) => {
        console.log(formState);
    }

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={onInputChange}
            />
        </div>

        <div className="form-group">
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu email"
                autoComplete="off"
                value={email}
                onChange={onInputChange}
            />
        </div>

        <button className="btn btn-primary mt-2" onClick={() => sendForm(formState)}> Enviar</button>

        {
            (name === '123') && (<Message/>)
        }
    </>
  )
}
