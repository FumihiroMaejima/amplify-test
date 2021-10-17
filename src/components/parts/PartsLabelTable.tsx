import React from 'react'

type ColorType = 'blue' | 'green' | 'red'
type Props = {
  text: string
  color: ColorType
}

export const PartsLabelTable: React.VFC<Props> = (props) => {
  return (
    <table className="parts-label-table parts-label-table__table-element">
      <tr>
        <th>会社名</th>
        <td>テスト株式会社</td>
      </tr>
      <tr>
        <th>創業</th>
        <td>1950年</td>
      </tr>
      <tr>
        <th>従業員数</th>
        <td>600人</td>
      </tr>
      <tr>
        <th>電話番号</th>
        <td>123-456-7890</td>
      </tr>
    </table>
  )
}

export default PartsLabelTable
