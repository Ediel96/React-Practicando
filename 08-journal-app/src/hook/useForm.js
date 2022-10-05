import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations  = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
      createValidatiors();
    }, [formState])

    //valida si el formulario es valido
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue]!== null)return false;
        }

        return true;
    }, [formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidatiors = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {

            // const funcion y mensaje de error
            const [fn, errorMessage= 'Este campo es requerido.'] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}