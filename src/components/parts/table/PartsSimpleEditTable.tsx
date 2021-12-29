import React, { FormEventHandler, ChangeEventHandler } from 'react'

export type TableHeaderType = Record<'label', string>

export type SimpleTableDataType = {
  [key: string]: undefined | null | string | number | boolean
}

type Props = {
  headers: TableHeaderType[]
  items: SimpleTableDataType[]
  editable?: boolean
  editableKeys?: string[]
  onInput?: FormEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const PartsSimpleEditTable: React.VFC<Props> = ({
  headers = [],
  items = [],
  editable = false,
  editableKeys = [],
  onInput = undefined,
  onChange = undefined,
}) => {
  return (
    <table className="parts-simple-edit-table parts-simple-edit-table__table-element">
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, j) => (
          <tr key={j}>
            {Object.keys(item).map((key) => (
              <td key={key}>
                {editable && editableKeys.includes(key) ? (
                  <input
                    className="parts-simple-edit-table__text-field"
                    type="text"
                    value={item[key] as string}
                    onInput={onInput}
                    onChange={onChange}
                  />
                ) : (
                  item[key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PartsSimpleEditTable
