import React from 'react'
// import FormikAndYup from './Form-Val/FormikAndYup'
import FormikAndYup from './FormikAndYup'
import { useAppContext } from '../../Context/ContextProvider';

const FormWithYup = () => {
    const { isOpenForm, handleIsOpenForm } = useAppContext();
  return (
    isOpenForm && <div className='form'>
      <FormikAndYup/>
    </div>
  )
}

export default FormWithYup