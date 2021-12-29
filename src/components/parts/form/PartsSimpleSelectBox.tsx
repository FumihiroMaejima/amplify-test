import React, { FormEventHandler, ChangeEventHandler } from 'react'

type Props = {
  value: string | number | readonly string[] | undefined
  onInput?: FormEventHandler<HTMLSelectElement>
  onChange?: ChangeEventHandler<HTMLSelectElement>
  items?: Record<string, string | number | string[] | undefined>[]
  itemText?: string
  itemValue?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

export const PartsSimpleSelectBox: React.VFC<Props> = ({
  value = undefined,
  onInput = undefined,
  onChange = undefined,
  items = [],
  itemText = 'text',
  itemValue = 'value',
  placeholder = undefined,
  required = undefined,
  disabled = false,
}) => {
  return (
    <select
      className="parts-simple-select-box"
      value={value}
      onInput={onInput}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    >
      {items.map((item, i) => (
        <option key={i} value={item[itemValue]}>
          {item[itemText]}
        </option>
      ))}
    </select>
  )
}

export default PartsSimpleSelectBox
