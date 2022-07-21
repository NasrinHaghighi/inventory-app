import React from 'react'
import './ProductItem.css'
import {deleteProduts} from '../../features/products/productsSlice'
import Slide from 'react-reveal/Slide';
import { useSelector, useDispatch } from 'react-redux'
import { Tooltip } from 'antd';
import "antd/dist/antd.css";



function ProductItem({...item}) {
    const dispatch=useDispatch()
    console.log(item)
   const today=item.date
   const today1=new Date(today)
   const date1=today1.getFullYear() + '-' + (today1.getMonth() + 1) + '-' + today1.getDate() 
 
  
    
   const date2=today1.getHours()+':'+  today1.getMinutes()
  
  return (
    <Slide bottom>
    <div className='container'>
      <div className='tit'>{item.title}</div>
      <div className='info'>
      <div className='time'>{date1}</div>
      <div className='time'>{date2}</div>
    <Tooltip title={item.category.des}>
       <span className='category'>{item.category.value} </span> 
       </Tooltip>
       <Tooltip title='Quantity'>
      <span className='quantity'>{item.quantity}</span>
      </Tooltip>
      <div className='delete' onClick={()=>dispatch(deleteProduts(item.id))}>Delete</div>
      </div>
    </div>
    </Slide>
  )
}

export default ProductItem