import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/products/productsSlice'
import categorySlice from '../features/categorySlice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        categoryList: categorySlice
    },
})