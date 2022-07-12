import React,{useState, useEffect} from 'react'
import {sortProducts} from '../../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import './SortProduct.css'



const sortItem= [
    { value: '', text: '--sort by--' },
    { value: 'newest', text: 'Newest' },
    { value: 'oldest', text: 'Oldest' },
    
]

function SortProduct() {
    const dispatch=useDispatch() 
    const [sortTerm, setSortTerm]=useState('')

const handleSortTerm=(e)=>{
    setSortTerm(e.target.value)
 
}
   
dispatch(sortProducts(sortTerm))

  return (
    <div className='sort-container'>
        <h4 className='sortHeader'>Sort By</h4>
    
        <select name="sort"  className='sortSelect' value={sortTerm} onChange={handleSortTerm}>
        {sortItem.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
          </select>
    </div>
  )
}

export default SortProduct