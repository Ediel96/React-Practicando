
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }


  const onSubmit = (event) => { // funcion para obtener el objeto con un enter
    event.preventDefault(); //configuracion para que no se refresque la pagina

    if( inputValue.trim().length <= 1) return; // si el valor del input es menor a 1, no se agrega a la lista

    // setCategoy( category =>  [inputValue, ...category]); // ... es para que se pueda agregar mas elementos a la listainputValue;
    //-> set category en un estado en el cual se guarda el valor de la lista

    onNewCategory( inputValue.trim() );
    setInputValue('');
  }


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder='Buscar Gif'
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  )
}
