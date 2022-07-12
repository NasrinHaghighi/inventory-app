import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryList: [
        { value: '', text: '--Choose an option--' },
        { value: 'fruits', text: 'Fruits', des: 'this category is includes all fruits' },
        { value: 'vegtable', text: 'Vegtable', des: 'this category is includes all vegtable' },
        { value: 'meat', text: 'Meat', des: 'this category is includes cow meat' },
    ]
}

export const categorySlice = createSlice({
    name: 'categoryList',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            //console.log(action.payload)
            state.categoryList = action.payload

        },

    },
})

// Action creators are generated for each case reducer function
export const { addCategory } = categorySlice.actions

export default categorySlice.reducer