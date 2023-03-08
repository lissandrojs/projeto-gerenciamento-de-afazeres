import React from 'react'
import { BtnSubmit, ButtonContainer } from './styled'

const Button = ({title}) => {
  return (<>
    <ButtonContainer>
      <BtnSubmit> {title} </BtnSubmit>
    </ButtonContainer>
    </>)
}

export {Button}