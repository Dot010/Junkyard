import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => '/produtos.json'
    })
  })
})

export const { useGetJogosQuery } = api

export default api
