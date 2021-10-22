import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PartsLabelHeader } from '@/components/parts/PartsLabelHeader'
import { PartsLabelTable } from '@/components/parts/table/PartsLabelTable'
import { PartsMessageBoard } from '@/components/parts/PartsMessageBoard'
import { PartsSimpleBox } from '@/components/parts/box/PartsSimpleBox'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import {
  PartsSimpleTable,
  TableHeaderType,
  SimpleTableDataType,
} from '@/components/parts/table/PartsSimpleTable'
import { TableContentsType } from '@/types'

const tableData: TableContentsType[] = [
  { label: '会社名', value: 'テスト株式会社' },
  { label: '創業', value: '1950年' },
  { label: '従業員数', value: '600人' },
  { label: '電話番号', value: '123-456-7890' },
]

const simpleTableHeaderData: TableHeaderType[] = [
  { label: 'label1' },
  { label: 'label2' },
  { label: 'label3' },
]
const simpleTableData: SimpleTableDataType[] = [
  { label1: 'v1', label2: 'v2', label3: 'v3' },
  { label1: 'v4', label2: 'v5', label3: 'v6' },
  { label1: 'v7', label2: 'v8', label3: 'v9' },
]

export const Sample: React.VFC = () => {
  return (
    <div className="page-container page-container__mx-auto">
      <h1 className="page-header">Sample</h1>

      <PartsSimpleHeading
        text="simple heading"
        color="dark-grey"
        isDashed={false}
        isDouble={false}
      />

      <div className="m-xy2">
        <PartsSimpleBox text="simple box" isDashed={false} />
      </div>

      <PartsLabelHeader text="Slot label header" color="blue" />

      <div className="m-xy2">
        <PartsLabelTable items={tableData} />
      </div>

      <div className="m-xy2">
        <PartsSimpleTable
          headers={simpleTableHeaderData}
          items={simpleTableData}
        />
      </div>

      <div className="">
        <p>Hello Home!</p>
        <PartsMessageBoard>
          <PartsLabelHeader text="Slot label header" color="blue" />
        </PartsMessageBoard>
      </div>
      <div className="">
        <Link to={`/about`}>Go To About</Link>
      </div>
      <div className="">
        <Link to={`/sample`}>Go To Sample</Link>
      </div>
    </div>
  )
}

export default Sample
