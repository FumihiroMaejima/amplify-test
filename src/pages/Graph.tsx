import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PartsTitleBox } from '@/components/parts/box/PartsTitleBox'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsLabelHeading } from '@/components/parts/heading/PartsLabelHeading'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import {
  PartsSimpleEditTable,
  TableHeaderType,
  SimpleTableDataType,
} from '@/components/parts/table/PartsSimpleEditTable'
import { createTodo } from '@/graphql/mutations'
import { queryApi, createApi } from '@/graphql/utils'
import { listTodos } from '@/graphql/queries'

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

export const Graph: React.VFC = () => {
  // formデータs
  const [todoNameValue, setName] = useState('')
  const [todoDescriptionValue, setDescription] = useState('')
  const [todos, setTodo] = useState<TodoListType>([])

  // mount後に実行する処理
  const onDidMount = (): (() => void) => {
    getInitialData().then((data) => {
      setTodo(data)
    })
    return () => {
      console.log('clean up')
    }
  }
  useEffect(onDidMount, [])

  /**
   * create todo request handler
   * @param {React.MouseEvent<HTMLButtonElement>} event
   * @return {MouseEventHandler<HTMLButtonElement>}
   */
  const createToDoRequestHandler: React.MouseEventHandler<HTMLButtonElement> = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    createApi(createTodo, {
      input: {
        name: todoNameValue,
        description: todoDescriptionValue,
      },
    }).then((res) => {
      console.log('create todo is: ' + `${res ? 'success' : 'failed'}`)

      // 新規作成後に再検索
      if (res) {
        getInitialData().then((data) => {
          setTodo(data)

          // フォームデータの初期化
          setName('')
          setDescription('')
        })
      }
    })
  }

  return (
    <div className="page-container page-container__mx-auto">
      <PartsSimpleHeading
        text="GraphQLテストページ"
        color="dark-grey"
        isDashed={false}
        isDouble={false}
      />
      {/* {todos.map((todo: TodoType, i) => (
        <p key={i}>{todo.name}</p>
      ))} */}

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

      <PartsLabelHeading text="Create ToDo Form" color="green" />
      <div className="m-xy4 parts-simple-box util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p">
        <div className="m-y4 d-flex flex-align-center">
          <label>name: </label>
          <PartsSimpleTextField
            value={todoNameValue}
            onInput={(e) => setName(e.currentTarget.value)}
            placeholder="input new todo name."
            maxLength={25}
          />
        </div>
        <div className="m-y4 d-flex flex-align-center">
          <label>description: </label>
          <PartsSimpleTextField
            value={todoDescriptionValue}
            onInput={(e) => setDescription(e.currentTarget.value)}
            placeholder="input new todo description."
            maxLength={100}
          />
        </div>
        <div className="d-flex flex-justify-right m-r2">
          <PartsSimpleButton
            text="create todo"
            color="green"
            disabled={todoNameValue === '' || todoDescriptionValue === ''}
            onClick={createToDoRequestHandler}
          />
        </div>
      </div>

      <PartsLabelHeading text="ToDos" />

      <div className="m-xy2">
        <PartsSimpleEditTable
          headers={todoTableHeaderData}
          items={todos}
          editable={true}
          editableKeys={['name', 'description']}
          onInput={(e) => console.log('form edit:', e.currentTarget.value)}
        />
      </div>

      <div className="m-y2">
        <Link to={`/`}>Go To Home</Link>
      </div>
    </div>
  )
}

export default Graph
