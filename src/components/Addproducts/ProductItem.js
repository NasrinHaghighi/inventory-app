import React from 'react'
import './ProductItem.css'
import {deleteProduts} from '../../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'



function ProductItem({...item}) {
    const dispatch=useDispatch()
    //console.log(item)
   const today=item.date
   const today1=new Date(today)
   const date1=today1.getFullYear() + '-' + (today1.getMonth() + 1) + '-' + today1.getDate() 
 
  
    
   const date2=today1.getHours()+':'+  today1.getMinutes()
  
  return (
    <div className='container'>
      <div className='tit'>{item.title}</div>
      <div className='info'>
      <div className='time'>{date1}</div>
      <div className='time'>{date2}</div> 
      <div className='category'>{item.category}</div>
      <div className='quantity'>{item.quantity}</div>
      <div className='delete' onClick={()=>dispatch(deleteProduts(item.id))}>Delete</div>
      </div>
    </div>
  )
}

export default ProductItem