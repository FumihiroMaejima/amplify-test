import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export const PartsContentsBoard: React.VFC<Props> = (props) => {
  return <div className="parts-content-board">{props.children}</div>
}

export default PartsContentsBoard
