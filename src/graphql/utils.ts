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
 * @return {Promise<T | undefined>}
 */
export const queryApi = async <T = Record<string, unknown>>(
  query: unknown,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<T | undefined> => {
  // queries
  // const todos = await API.graphql(graphqlOperation(listTodos))
  // const todos = await API.graphql(graphqlOperation(query, variables))

  // Promise<GraphQLResult<object>>型の値を返す

  try {
    const response = (await API.graphql(
      graphqlOperation(query, variables)
    )) as Promise<GraphQLResult<T>>

    // console.log('response: ' + JSON.stringify(response, null, 2))
    return (await response).data
  } catch (error: unknown) {
    throw new Error('query api error: ' + JSON.stringify(error, null, 2))
  }

  /* try {
    return await API.graphql(graphqlOperation(query, variables)).then(
      (res: GraphQLResult<T>) => {
        return res.data
      }
    )

    // console.log('response: ' + JSON.stringify(response, null, 2))
    // return  await response.data
  } catch (error: unknown) {
    throw new Error('query api error: ' + JSON.stringify(error, null, 2))
  } */

  /* const result = (await API.graphql(
    graphqlOperation(query, variables)
  )) as Promise<GraphQLResult<T>>

  return await result
    .then((response) => {
      console.log('response: ' + JSON.stringify(response, null, 2))
      return response
    })
    .catch((error: unknown) => {
      throw new Error('query api error: ' + JSON.stringify(error, null, 2))
    }) */

  /* console.log('result: ' + JSON.stringify(result, null, 2))
  return result */
  /* return (await API.graphql(graphqlOperation(query, variables))) as Promise<
    GraphQLResult<T>
  > */
}

/**
 * graphql create api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<boolean>}
 */
export const createApi = async <T = Record<string, unknown>>(
  query: unknown,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<boolean> => {
  // create
  // await API.graphql(graphqlOperation(createTodo, { input: todo }))
  // await API.graphql(graphqlOperation(query, variables))

  try {
    const response = (await API.graphql(
      graphqlOperation(query, variables)
    )) as Promise<GraphQLResult<T>>

    console.log('create response: ' + JSON.stringify(response, null, 2))
    // return (await response).data
    return true
  } catch (error: unknown) {
    console.log('create api error: ' + JSON.stringify(error, null, 2))
    // throw new Error('query api error: ' + JSON.stringify(error, null, 2))
    return false
  }
}

/**
 * graphql update api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<boolean>}
 */
export const updateApi = async <T = Record<string, unknown>>(
  query: unknown,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<boolean> => {
  // update
  /* await API.graphql(
    graphqlOperation(updateTodo, {
      input: { id: todoId, name: 'Updated todo info' },
    })
  ) */
  // await API.graphql(graphqlOperation(query, variables))

  try {
    const response = (await API.graphql(
      graphqlOperation(query, variables)
    )) as Promise<GraphQLResult<T>>

    console.log('update response: ' + JSON.stringify(response, null, 2))
    // return (await response).data
    return true
  } catch (error: unknown) {
    console.log('update api error: ' + JSON.stringify(error, null, 2))
    // throw new Error('query api error: ' + JSON.stringify(error, null, 2))
    return false
  }
}

/**
 * graphql delete api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<boolean>}
 */
export const deleteApi = async <T = Record<string, unknown>>(
  query: unknown,
  // eslint-disable-next-line
  variables?: {} | undefined
): Promise<boolean> => {
  // delete
  // await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }))
  // await API.graphql(graphqlOperation(query, variables))

  try {
    const response = (await API.graphql(
      graphqlOperation(query, variables)
    )) as Promise<GraphQLResult<T>>

    console.log('delete response: ' + JSON.stringify(response, null, 2))
    // return (await response).data
    return true
  } catch (error: unknown) {
    console.log('delete api error: ' + JSON.stringify(error, null, 2))
    // throw new Error('query api error: ' + JSON.stringify(error, null, 2))
    return false
  }
}

/**
 * graphql subscription api
 * @param {unknown} query
 * @param {{} | undefined} variables
 * @return {Promise<void>}
 */
export const subscriptionApi = async <T = Record<string, unknown>>(
  query: unknown,
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
