import React, {useState, useEffect} from 'react'
import { Button, Form, Input, Select, Typography ,Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {addCategory} from '../../features/categorySlice'

import "antd/dist/antd.css";
import './AddCategory.css'



function AddCategory({showCategoryHandle}) {
  const dispatch=useDispatch()
  const categoryList =useSelector((state) => state.categoryList)
  const listOfCAtegory =categoryList.categoryList
  
    const [title, setTitle] =useState('')
    const [des, setDes] =useState('')
    const [newCategory, setNewCategory]=useState(listOfCAtegory)
   

    const submiteCategory=()=>{
      setNewCategory((newCategory)=>[...newCategory, {value:title, text:title, des:des}])
      setDes('')
      setTitle('')
    }
   
   useEffect(()=>{
dispatch(addCategory(newCategory))
   },[newCategory])
  return (
   
           <Row>
         <Col span={24} offset={6} className='container-Category'>
         <div className="formfield">
       <label>title</label>
           <div className="input-wrapper">
            <input id="title" name='title' value={title} className="table-form" onChange={(e)=>setTitle(e.target.value)}/>
     </div>
      </div>
   

      <div className="formfield">
       <label>Description</label>
           <div className="input-wrapper">
            <textarea id="descriptin" name='description' value={des} rows="4"  className="table-form" onChange={(e)=>setDes(e.target.value)}/>
     </div>
      </div>
      <div className='btn'>
          <input type="submit" value="Submit" onClick={submiteCategory}/>
          <input type="submit" value="Cancle" onClick={showCategoryHandle}/>
     </div>
         </Col>
          </Row>
   
  )
}

export default AddCategory