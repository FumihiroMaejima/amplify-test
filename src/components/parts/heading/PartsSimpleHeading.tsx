import React from 'react'

type ColorType = 'black' | 'dark-grey' | 'blue' | 'green' | 'red'
type Props = {
  text: string
  color: ColorType
  isDashed?: boolean
  isDouble?: boolean
}

export const PartsSimpleHeading: React.VFC<Props> = (
  props = { text: '', color: 'dark-grey', isDashed: false, isDouble: false }
) => {
  return (
    <h1
      className={`parts-simple-heading parts-simple-heading__${props.color} ${
        props.isDashed ? 'parts-simple-heading__dash' : ''
      }, ${props.isDouble ? 'parts-simple-heading__double' : ''}`}
    >
      {props.text}
    </h1>
  )
}

export default PartsSimpleHeading
