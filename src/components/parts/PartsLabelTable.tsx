import React from 'react'
import { TableContentsType } from '@/types'

type Props = {
  items: TableContentsType[]
}

export const PartsLabelTable: React.VFC<Props> = (props) => {
  return (
    <table className="parts-label-table parts-label-table__table-element">
      {props.items.map((item) => (
        <tr>
          <th>{item.label}</th>
          <td>{item.value}</td>
        </tr>
      ))}
    </table>
  )
}

export default PartsLabelTable
