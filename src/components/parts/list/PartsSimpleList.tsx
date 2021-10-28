import React from 'react'

type ColorType = 'black' | 'dark-grey' | 'blue' | 'green' | 'red' | 'white'
type ItemType = number | string | Record<'key', number | string>
type Props = {
  items: ItemType[]
  color?: ColorType
  textColor?: ColorType
}

export const PartsSimpleList: React.VFC<Props> = ({
  items = [],
  color = 'dark-grey',
  textColor = 'dark-grey',
}) => {
  return (
    <ul
      // className={`parts-simple-button util-color__bg--${color} util-color__text--${textColor}`}
      className={`parts-simple-list parts-simple-list__color--${color} util-color__text--${textColor}`}
    >
      {items.map((item: ItemType, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default PartsSimpleList
