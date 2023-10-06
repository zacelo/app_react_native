import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../firebase'

export const shopApi = createApi({
    reducerPath:'shopApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:builder => ({
        getCategories: builder.query ({
            query: ()=> 'catagories.json'
        }),
        getProductsByCategory:builder.query({
            query: category => `products.json?orderBy="categoria"&equalTo="${category}"`
        })
    })
}) 

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } = shopApi