import React from 'react'
import { Btn } from './style'

const Button = ({children, type, width, height, onClick})   => {
  return (
    <Btn onClick={onClick} type={type} width={width} height={height}>{children || 'button'}</Btn>
  )
}

export default Button