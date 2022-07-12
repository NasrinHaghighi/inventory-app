import React from 'react'
import './ProductItem.css'
import {deleteProduts} from '../../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'



function ProductItem({...item}) {
    const dispatch=useDispatch()
    //console.log(item)
   const today=item.date
   //const date1=today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() 
   console.log(today)
   //const date2=today.getHours()+':'+  today.getMinutes()
  return (
    <div className='container'>
      <div className='tit'>{item.title}</div>
      <div className='info'>
      {/* <div className='time'>{date1}</div>
      <div className='time'>{date2}</div> */}
      <div className='category'>{item.category}</div>
      <div className='quantity'>{item.quantity}</div>
      <div className='delete' onClick={()=>dispatch(deleteProduts(item.id))}>Delete</div>
      </div>
    </div>
  )
}

export default ProductItem