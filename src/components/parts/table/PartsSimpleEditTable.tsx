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
  maxLength?: number
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
}

export const PartsSimpleEditTable: React.VFC<Props> = ({
  headers = [],
  items = [],
  editable = false,
  editableKeys = [],
  onInput = undefined,
  onChange = undefined,
  maxLength = undefined,
  required = undefined,
  disabled = false,
  readOnly = false,
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
                    maxLength={maxLength}
                    required={required}
                    disabled={disabled}
                    readOnly={readOnly}
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
