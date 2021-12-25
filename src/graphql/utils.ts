import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLOptions, GraphQLResult } from '@aws-amplify/api-graphql'
import { createTodo, updateTodo, deleteTodo } from '@/graphql/mutations'
import { listTodos } from '@/graphql/queries'
import { onCreateTodo } from '@/graphql/subscriptions'
import Observable from 'zen-observable-ts'

// GraphQL設定
// ------------------------------------------------

const todo = { name: 'My first todo', description: 'Hello world!' }
const todoId = 1

/**
 * graphql query api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<void>}
 */
export const queryApi = async <T = Record<string, unknown>>(
  query: any,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<GraphQLResult<T>> => {
  // queries
  // const todos = await API.graphql(graphqlOperation(listTodos))
  // const todos = await API.graphql(graphqlOperation(query, variables))

  // Promise<GraphQLResult<object>>型の値を返す
  return (await API.graphql(graphqlOperation(query, variables))) as Promise<
    GraphQLResult<T>
  >
}

/**
 * graphql create api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<void>}
 */
export const createApi = async (
  query: any,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<void> => {
  // create
  // await API.graphql(graphqlOperation(createTodo, { input: todo }))
  await API.graphql(graphqlOperation(query, variables))
}

/**
 * graphql update api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<void>}
 */
export const updateApi = async (
  query: any,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<void> => {
  // update
  /* await API.graphql(
    graphqlOperation(updateTodo, {
      input: { id: todoId, name: 'Updated todo info' },
    })
  ) */
  await API.graphql(graphqlOperation(query, variables))
}

/**
 * graphql delete api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<void>}
 */
export const deleteApi = async (
  query: any,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<void> => {
  // delete
  // await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }))
  await API.graphql(graphqlOperation(query, variables))
}

/**
 * graphql subscription api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<void>}
 */
export const subscriptionApi = async <T = Record<string, unknown>>(
  query: any,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<void> => {
  // subscriptions
  // Subscribe to creation of Todo
  /* const subscribeResult = API.graphql(
    graphqlOperation(onCreateTodo)
  ) as Observable<typeof todo>
  const subscription = subscribeResult.subscribe({
    next: (todoData) => {
      console.log(todoData)
      // Do something with the data
    },
  })

  // Stop receiving data updates from the subscription
  subscription.unsubscribe()

  */
  const subscribeResult = (await API.graphql(
    graphqlOperation(query)
  )) as Observable<T>

  const subscription = subscribeResult.subscribe({
    next: (data) => {
      console.log(data)
      // Do something with the data
    },
  })

  // Stop receiving data updates from the subscription
  subscription.unsubscribe()
}

/* // subscriptions
// Subscribe to creation of Todo
const subscribeResult = API.graphql(
  graphqlOperation(onCreateTodo)
) as Observable<typeof todo>
const subscription = subscribeResult.subscribe({
  next: (todoData) => {
    console.log(todoData)
    // Do something with the data
  },
})

// Stop receiving data updates from the subscription
subscription.unsubscribe() */
