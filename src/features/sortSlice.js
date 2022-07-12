import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortItem: [
        { value: '', text: '--sort by--' },
        { value: 'newest', text: 'Newest' },
        { value: 'oldest', text: 'Oldest' },
        { value: '24ago', text: '24 Hours Ago' },
    ]
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        changeSort: (state, action) => {
            if (action.payload === '') return
            if (action.payload === 'newest') {
                console.log('newest')
            }
            if (action.payload === 'oldest') {
                console.log('oldest')
            }
            if (action.payload === '24ago') {
                console.log('24ago')
            }


        },

    },
})

// Action creators are generated for each case reducer function
export const { changeSort } = sortSlice.actions

export default sortSlice.reducer