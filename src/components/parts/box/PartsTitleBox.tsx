import React from 'react'

type ColorType = 'black' | 'dark-grey' | 'blue' | 'green' | 'red'
type Props = {
  text: string
  title?: string
  color?: ColorType
  textColor?: ColorType
  isDashed?: boolean
  isDouble?: boolean
}

export const PartsTitleBox: React.VFC<Props> = ({
  text = '',
  title = 'title',
  color = 'dark-grey',
  textColor = 'dark-grey',
  isDashed = false,
  isDouble = false,
}) => {
  return (
    <div
      className={`parts-title-box parts-title-box__${color} parts-title-box__text--${textColor}
       ${isDashed ? 'parts-title-box__dash' : ''} ${
        isDouble ? 'parts-title-box__double' : ''
      }
      `}
    >
      <span
        className={`parts-title-box__title parts-title-box__title-color--${color}`}
      >
        {title}
      </span>
      <p>{text}</p>
    </div>
  )
}

export default PartsTitleBox
