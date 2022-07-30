import { useState } from "react"

export const useForm = (initialState = {}) => {

    const[values, setValues] = useState(initialState);

    const handleInputChange = ({target}) =>{

        const { name , value} = target;

        setValues({
            ...values,
            [ name ] : value
          });

    }

    const onResetForm = () => {
        setValues(initialState);
    }

    return { ...values,
        values, 
        handleInputChange,
        onResetForm
    }

}
