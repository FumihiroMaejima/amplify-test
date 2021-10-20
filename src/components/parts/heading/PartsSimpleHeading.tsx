import React from 'react'

type ColorType = 'black' | 'dark-grey' | 'blue' | 'green' | 'red'
type Props = {
  text: string
  color: ColorType
}

export const PartsSimpleHeading: React.VFC<Props> = (props) => {
  return (
    <h1 className={`parts-simple-heading parts-simple-heading__${props.color}`}>
      {props.text}
    </h1>
  )
}

export default PartsSimpleHeading
