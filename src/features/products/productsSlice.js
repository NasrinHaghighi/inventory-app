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

    },
})

// Action creators are generated for each case reducer function
export const { addProduts } = productsSlice.actions

export default productsSlice.reducer