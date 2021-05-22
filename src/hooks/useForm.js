import { useContext, useState } from 'react';
import { ErrorContext } from '../context/ErrorContext';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);
    const {setIsFormValueCorrect} = useContext(ErrorContext);
    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
        
        setIsFormValueCorrect((previousValues) => ({
            ...previousValues,
            [target.name]: true}))

    }
    


    return [values, handleInputChange, reset];
}