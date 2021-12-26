import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PartsTitleBox } from '@/components/parts/box/PartsTitleBox'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsLabelHeading } from '@/components/parts/heading/PartsLabelHeading'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { PartsStickyNoteList } from '@/components/parts/list/PartsStickyNoteList'
import {
  PartsSimpleTable,
  TableHeaderType,
  SimpleTableDataType,
} from '@/components/parts/table/PartsSimpleTable'
import { TableContentsType } from '@/types'
import { queryApi } from '@/graphql/utils'
import { listTodos } from '@/graphql/queries'

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

export const Graph: React.VFC = () => {
  // DynamoDBのデータの取得
  // WARN ここで実行すると2回リクエストを実行する
  /* const queryData = queryApi<Record<'id', number>>(listTodos).then((res) => {
    console.log('then: ' + JSON.stringify(res, null, 2))
  }) */
  const [todos, setTodo] = useState(0)

  const created = async () => {
    const queryData = await queryApi<Record<'id', number>>(listTodos)
    console.log('queryData: ' + JSON.stringify(queryData, null, 2))
  }
  created()

  // const test1 = React.Component
  // console.log('test1: ' + JSON.stringify(queryData, null, 2))

  return (
    <div className="page-container page-container__mx-auto">
      <PartsSimpleHeading
        text="GraphQLテストページ"
        color="dark-grey"
        isDashed={false}
        isDouble={false}
      />

      <div className="m-xy2">
        <PartsTitleBox text="title box" isDashed={false} />
      </div>

      <div className="m-xy2">
        <PartsSimpleButton text="button text" />
        <PartsSimpleButton text="black" color="black" />
        <PartsSimpleButton text="blue" color="blue" />
        <PartsSimpleButton text="red" color="red" />
        <PartsSimpleButton text="green" color="green" />
        <PartsSimpleButton text="white" color="white" />
      </div>

      <PartsLabelHeading text="ヘッダー" />

      <div className="m-xy2">
        <PartsStickyNoteList items={[1, 2, 3, 4, 5]} />
      </div>

      <div className="m-xy2">
        <PartsSimpleTable
          headers={simpleTableHeaderData}
          items={simpleTableData}
        />
      </div>
      <div className="m-y2">
        <Link to={`/`}>Go To Home</Link>
      </div>
    </div>
  )
}

export default Graph
