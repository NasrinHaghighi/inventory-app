import React from 'react'
import './ProductItem.css'
import {deleteProduts} from '../../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'



function ProductItem({...item}) {
    const dispatch=useDispatch()
    //console.log(item)
  return (
    <div className='container'>
      
       <div className='tit'>{item.title}</div>
       <div className='ifo'>
        <span >{item.date}</span>
        <span className='quantity'>{item.quantity}</span>
        <span className='category'>{item.category}</span>
      
        <span className='delete' onClick={()=>dispatch(deleteProduts(item.id))}>Delete</span>
       </div>
    </div>
  )
}

export default ProductItem