import React from 'react'

function ProductItem({...item}) {
  return (
    <div className='container'>
       <div className='tit'>{item.name}</div>
       <div className='ifo'>
        <span></span>
       </div>
    </div>
  )
}

export default ProductItem