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
                //console.log(tempPro)
            tempPro = tempPro.filter((item) => {
                return item.id !== action.payload
            })
            state.products = tempPro
        },

        //sort//
        sortProducts: (state, action) => {



            if (action.payload === 'newest') {
                let tempPro = state.products
                tempPro.sort((a, b) => b.date - a.date)
                state.products = tempPro

            }
            if (action.payload === 'oldest') {
                let tempPro = state.products
                tempPro.sort((a, b) => a.date - b.date)
                state.products = tempPro
            }
            // if (action.payload === '24ago') {
            //     console.log('24ago')
            // }
            // if (action.payload === '') return


        },
        searchProducts: (state, action) => {
            console.log(action.payload)
            let tempPro = state.products
            tempPro = tempPro.filter((item) => {
                return item.title.includes(action.payload)
            })
            state.products = tempPro
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProduts, deleteProduts, sortProducts, searchProducts } = productsSlice.actions

export default productsSlice.reducer