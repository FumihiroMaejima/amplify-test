import React from 'react'

type ColorType = 'black' | 'dark-grey' | 'blue' | 'green' | 'red' | 'white'
type Props = {
  text?: string
  color?: ColorType
  textColor?: ColorType
}

export const PartsSimpleButton: React.VFC<Props> = ({
  text = 'text',
  color = 'dark-grey',
  textColor = 'white',
}) => {
  return (
    <button
      // className={`parts-simple-button util-color__bg--${color} util-color__text--${textColor}`}
      className={`parts-simple-button parts-simple-button__color--${color} util-color__text--${textColor}`}
    >
      {text}
    </button>
  )
}

export default PartsSimpleButton
