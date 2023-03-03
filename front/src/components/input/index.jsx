import React from 'react'
import {  Controller } from "react-hook-form";
import { ErrorText, InputContainer, InputText } from './styled'

const Input = ({control, name,errorMessage, ...rest}) => {
  return (<>
    <InputContainer >
       <Controller
        name= {name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText  {...field}{...rest}/>}
      />
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
  </>)
}

export {Input}