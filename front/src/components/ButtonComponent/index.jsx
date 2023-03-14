import React from 'react'
import { BtnSubmit, ButtonContainer } from './styled.jsx'

const ButtonComponent = ({title}) => {
  return (<>
    <ButtonContainer>
      <BtnSubmit> {title} </BtnSubmit>
    </ButtonContainer>
    </>)
}

export {ButtonComponent}