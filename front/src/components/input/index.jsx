import React from 'react'
import {  Controller } from "react-hook-form";
import { ErrorText, IconContainer, InputContainer, InputText } from './styled'

const Input = ({leftIcon, control, name,errorMessage, ...rest}) => {
  return (<>
    <InputContainer >
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
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