import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export const PartsTextContens: React.VFC<Props> = (props) => {
  return <div className="parts-text-contents">{props.children}</div>
}

export default PartsTextContens
