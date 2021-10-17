import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PartsLabelHeader } from '@/components/parts/PartsLabelHeader'
import { PartsLabelTable } from '@/components/parts/PartsLabelTable'
import { PartsMessageBoard } from '@/components/parts/PartsMessageBoard'
import { TableContentsType } from '@/types'
// import '@/assets/scss/index.scss'

const tableData: TableContentsType[] = [
  { label: '会社名', value: 'テスト株式会社' },
  { label: '創業', value: '1950年' },
  { label: '従業員数', value: '600人' },
  { label: '電話番号', value: '123-456-7890' },
]

export const Sample: React.VFC = () => {
  return (
    <div className="page-container page-container__mx-auto">
      <h1 className="page-header">Sample</h1>

      <PartsLabelHeader text="Slot label header" color="blue" />

      <div className="">
        <PartsLabelTable items={tableData} />
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
