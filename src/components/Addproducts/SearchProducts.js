import React,{useState, useEffect} from 'react'
import './SearchProducts.css'
import { useSelector, useDispatch } from 'react-redux'
import {searchProducts} from '../../features/products/productsSlice'

function SearchProducts() {
    const dispatch=useDispatch()

    const [searchTerm, setSearchTerm]= useState('')

    
    useEffect(()=>{
        dispatch(searchProducts(searchTerm))
    },[searchTerm])

//console.log(searchTerm)
  return (
    <div className='container'>
         <h4 className='searchHeader'>Search</h4>
          <input className='search' placeholder='search' onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
  )
}

export default SearchProducts