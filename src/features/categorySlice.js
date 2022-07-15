import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryList: [
        { id: 0, value: '', text: '--Choose an option--', des: 'ssssssssssss' },
        { id: 1, value: 'fruits', text: 'Fruits', des: 'ffff' },
        { id: 2, value: 'vegtable', text: 'Vegtable', des: 'vv' },
        { id: 3, value: 'meat', text: 'Meat', des: 'mmm' },
    ]
}

export const categorySlice = createSlice({
    name: 'categoryList',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            //console.log(action.payload)
            state.categoryList = action.payload
            console.log(state.categoryList)

        },

    },
})

// Action creators are generated for each case reducer function
export const { addCategory } = categorySlice.actions

export default categorySlice.reducer