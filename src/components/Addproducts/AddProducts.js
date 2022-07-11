import React, {useState ,useEffect} from 'react'
import './AddProducts.css'
import { Button, Form, Input, Select, Typography ,Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {addProduts} from '../../features/products/productsSlice'
import "antd/dist/antd.css";
import ProductItem from './ProductItem';





function AddProducts() {
  

  const products = useSelector((state) => state.products)
  const productList =products.products
  //console.log(productList)
  const dispatch = useDispatch()
  
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] =useState('')
    const [category, setCategory] = useState('')
   
    const [arr , setArr] = useState([])

    //console.log(title,quantity,category)
     const handleSelect=(e)=>{
        setCategory(e.target.value)
       
    }
   
    const handleSubmit =()=>{
        setArr((arr)=>[...arr, {title, quantity,category}])
     
        setTitle('')
        setCategory('')
        setQuantity('')
    }


    console.log(arr)
    useEffect(()=>{
      dispatch(addProduts(arr))
    },[arr])

  return (
    <>
    
        <Row >
         <Col span={12} offset={6} className='conatiner'>
         <div className="formfield">
  <label>title</label>
  <div className="input-wrapper">
    <input id="title" name='title' value ={title} className="table-form" onChange={(e)=>setTitle(e.target.value)}/>
  </div>
</div>
<div className="formfield">
  <label>Quantity</label>
  <div className="input-wrapper">
    <input id="quantity" name='quantity' type='number' value={quantity} className="table-form" onChange={(e)=>setQuantity(e.target.value)}/>
  </div>
</div>
<div className="formfield">
  <label>Category</label>
  <div className="input-wrapper">
  <select className='select' onChange={handleSelect} value={category}>
   
  <option value="">
       select...
      </option>
      <option value="Luke Skywalker">
        Luke Skywalker
      </option>
      <option value="C-3PO">C-3PO</option>
      <option value="R2-D2">R2-D2</option>
    </select>
  </div>
</div>


<div className='btn'>
  <input type="submit" value="Submit" onClick={handleSubmit}/>
</div>
<div>
 {productList && productList.map((item)=>{
  return <ProductItem key={item.title} {...item}/>
})} 
</div>


         </Col>
    </Row>
        
    </>
  )
}

export default AddProducts



{/* <Form middle className='form' >
<Form.Item name="title" label="Title" >
     <input value={title} onChange={event => setTitle(event.target.value)}/>
</Form.Item>
<Form.Item name="quantity" label="Quantity">
  <input  value={quantity} onChange={event => setQuantity(event.target.value)}/>
</Form.Item>
<Form.Item name="category" label="Category"  >
  <Select
   className='select'
    placeholder="Select a Category "
    onChange={(e)=>handleSelect(e)}
   
    allowClear
    >
    <Option value="male"  className='option'>male</Option>
    <Option value="female" className='option'>female</Option>
    <Option value="other" className='option'>other</Option>
  </Select>
</Form.Item>

<Form.Item className='btn-item'>
  <Button type="submit" className='btn' htmlType="submit"  onClick={handleSubmit}>
    Submit
  </Button>
 
 
</Form.Item> 


 
</Form> */}