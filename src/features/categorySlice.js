import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryList: [
        { value: '', text: '--Choose an option--' },
        { value: 'fruits', text: 'Fruits' },
        { value: 'vegtable', text: 'Vegtable' },
        { value: 'meat', text: 'Meat' },
    ]
}

export const categorySlice = createSlice({
    name: 'categoryList',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            //state.category = action.payload

        }

    },
})

// Action creators are generated for each case reducer function
export const { addCategory } = categorySlice.actions

export default categorySlice.reducer