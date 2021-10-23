import React from 'react'

type ColorType = 'black' | 'dark-grey' | 'blue' | 'green' | 'red'
type Props = {
  text: string
  color?: ColorType
  textColor?: ColorType
  isDashed?: boolean
  isDouble?: boolean
}

export const PartsSimpleBox: React.VFC<Props> = ({
  text = '',
  color = 'dark-grey',
  textColor = 'dark-grey',
  isDashed = false,
  isDouble = false,
}) => {
  return (
    <div
      className={`parts-simple-box util-border-solid-3p__color--${color} util-color__text--${textColor}
       ${isDashed ? 'parts-simple-box__dash' : ''} ${
        isDouble ? 'parts-simple-box__double' : ''
      }
      `}
    >
      <p>{text}</p>
    </div>
  )
}

export default PartsSimpleBox
