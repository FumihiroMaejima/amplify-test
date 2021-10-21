import React from 'react'

type ColorType = 'black' | 'dark-grey' | 'blue' | 'green' | 'red'
type Props = {
  text: string
  color?: ColorType
  textColor?: ColorType
  isDashed?: boolean
  isDouble?: boolean
}

export const PartsSimpleBox: React.VFC<Props> = (
  props = {
    text: '',
    color: 'dark-grey',
    textColor: 'dark-grey',
    isDashed: false,
    isDouble: false,
  }
) => {
  return (
    <div
      className={`parts-simple-box parts-simple-box__${
        props.color
      } parts-simple-box__text--${props.textColor}
       ${props.isDashed ? 'parts-simple-box__dash' : ''}, ${
        props.isDouble ? 'parts-simple-box__double' : ''
      }
      `}
    >
      <p>{props.text}</p>
    </div>
  )
}

export default PartsSimpleBox
