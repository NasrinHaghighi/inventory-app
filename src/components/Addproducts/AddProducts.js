import React, {useState ,useEffect} from 'react'
import './AddProducts.css'
import { Button, Form, Input, Select, Typography ,Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {addProduts} from '../../features/products/productsSlice'
import "antd/dist/antd.css";
import ProductItem from './ProductItem';
import { v4 as uuidv4 } from 'uuid';
import AddCategory from '../AddCategory/AddCategory';
import SortProduct from './SortProduct';
import SearchProducts from './SearchProducts';




function AddProducts() {
  

  const products = useSelector((state) => state.products)
  const categoryList =useSelector((state) => state.categoryList)

  const productList =products.products
const listOfCAtegory =categoryList.categoryList
//console.log(listOfCAtegory)
  const dispatch = useDispatch()
  
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] =useState('')
    const [category, setCategory] = useState(listOfCAtegory[0])
    const [showCategory, setShowcategory]= useState(false)
    //console.log(category)
   
    const [arr , setArr] = useState([])

   
     const handleSelect=(e)=>{
      console.log(e.target.value)
       setCategory(listOfCAtegory[e.target.value])
      console.log(listOfCAtegory[e.target.value])
       }
  
    var today;
    const getTime=()=>{
     today= new Date().getTime();
      //date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '   '+  today.getHours()+':'+  today.getMinutes();
  
    }
    
    const handleSubmit =()=>{
      getTime()
        setArr((arr)=>[...arr, {title, quantity,category, date:today, id:uuidv4().slice(0, 8)}])
  console.log(arr)
        // setTitle('')
        // setCategory(listOfCAtegory[0])
        // setQuantity('')
    }
    useEffect(()=>{
      dispatch(addProduts(arr))
      ///localStorage.setItem('products', JSON.stringify(arr));
    },[arr])

    const showCategoryHandle=()=>{
      setShowcategory(!showCategory)
    }

  return (
        <>
        <Row>
        <Col span={12} offset={6} >
          <div className='button-section'>
        
          <div className={showCategory ? 'active' : 'addCategory'} onClick={showCategoryHandle}>Add New Category?</div>
          {showCategory ? <AddCategory showCategoryHandle={showCategoryHandle}/> : ''}
          <br></br>
          <div className='addProduct'>Add New Product</div>
          </div>
          </Col>
        </Row>
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
  <select onChange={handleSelect} className='select' value={category.value}>
        {listOfCAtegory.map((option, index) => (
          <option key={index} value={option.id} >
            {option.text}
          </option>
        ))}
      </select>
    </div>
</div>



<div className='btn'>
  <input type="submit" value="Submit" onClick={handleSubmit}/>
</div>
<div>
  <SearchProducts />
</div>
<div>

<SortProduct />
</div>
<div className='product-list-container'>
  <h2>Product List</h2>

 {productList.length>0 ? productList.map((item)=>{
 
  return <ProductItem key={item.title} {...item}/>
})
 : <h3>Product List Is Empty</h3>
 
 } 
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