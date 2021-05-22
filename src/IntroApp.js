import React, { useState } from 'react'
import { Template } from './components/template/Template'
import { ErrorContext } from './context/ErrorContext'

export const IntroApp = () => {

    const [isFormValueCorrect, setIsFormValueCorrect] = useState({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
    });

    return (
        <ErrorContext.Provider value={{isFormValueCorrect, setIsFormValueCorrect}} >
            <Template />
        </ErrorContext.Provider>
    )
}
