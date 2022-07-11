import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduts: (state, action) => {
            state.products = action.payload

        },
        deleteProduts: (state, action) => {
            let tempPro = state.products
            tempPro = tempPro.filter((item) => {
                return item.id !== action.payload
            })
            state.products = tempPro
        },

    },
})

// Action creators are generated for each case reducer function
export const { addProduts, deleteProduts } = productsSlice.actions

export default productsSlice.reducer