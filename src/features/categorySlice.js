import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryList: [
        { value: '', text: '--Choose an option--', des: 'ssssssssssss' },
        { value: 'fruits', text: 'Fruits', des: 'ffff' },
        { value: 'vegtable', text: 'Vegtable', des: 'vv' },
        { value: 'meat', text: 'Meat', des: 'mmm' },
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