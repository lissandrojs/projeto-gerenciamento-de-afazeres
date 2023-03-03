import React from 'react'
import { Botao, ButtonContainer } from './styled'

const Button = ({title}) => {
  return (
    <ButtonContainer>
      <Botao>{title}</Botao>
    </ButtonContainer>
  )
}

export {Button}