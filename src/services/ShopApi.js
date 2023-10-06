import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../firebase'

export const shopApi = createApi({
    reducerPath:'shopApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:builder => ({
        getCategories: builder.query ({
            query: ()=> 'catagories.json'
        })
    })
}) 

export const { useGetCategoriesQuery } = shopApi