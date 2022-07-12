import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],

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
            console.log(tempPro)
            tempPro = tempPro.filter((item) => {
                return item.id !== action.payload
            })
            state.products = tempPro
        },

        //sort//
        sortProducts: (state, action) => {
            if (action.payload === '') return
            if (action.payload === 'newest') {
                let tempPro = state.products
                console.log(tempPro)



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
export const { addProduts, deleteProduts, sortProducts } = productsSlice.actions

export default productsSlice.reducer