import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/IProduct'

export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      getProducts: builder.query<IProduct[], void>({
        query: () => '/65266b8c-9c4c-4470-bcbb-a3d6f340f30b',
      }),
    }
  },
})
