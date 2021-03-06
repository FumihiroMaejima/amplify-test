import React, { useState, Component } from 'react'
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

const todoTableHeaderData: TableHeaderType[] = [
  { label: 'id' },
  { label: '名前' },
  { label: '詳細' },
  { label: '作成日時' },
  { label: '更新日時' },
]

type TodoType = {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

type TodoListType = TodoType[]

const getInitialData = async (): Promise<TodoListType> => {
  const queryData = await queryApi<
    Record<'listTodos', Record<'items', TodoListType>>
  >(listTodos)
  console.log('queryData: ' + JSON.stringify(queryData, null, 2))
  return queryData?.listTodos.items || []
}

export class Graph extends Component {
  public state = {
    posts: [],
    content: [] as TodoListType,
  }

  async componentDidMount(): Promise<void> {
    // this.state.content = await getInitialData()
    this.setState({ content: await getInitialData() })
  }

  render(): JSX.Element {
    return (
      <div className="page-container page-container__mx-auto">
        <PartsSimpleHeading
          text="GraphQLテストページ"
          color="dark-grey"
          isDashed={false}
          isDouble={false}
        />
        {this.state.content.map((todo: TodoType, i) => (
          <p key={i}>{todo.name}</p>
        ))}

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
          <PartsSimpleTable
            headers={todoTableHeaderData}
            items={this.state.content}
          />
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
}

export default Graph
