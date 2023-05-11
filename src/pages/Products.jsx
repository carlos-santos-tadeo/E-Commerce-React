import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { axiosEcommerce } from '../utils/configAxios'
import ProductDetail from '../components/product/ProductDetail'
import SimilarProducts from '../components/product/SimilarProducts'


const Products = () => {


  //permite tomar los parametros de la url el cual se define en app
  const { id } = useParams()



  return (
    <main className='px-2'>     
      <ProductDetail productId={id}/>
    </main>
  )
}

export default Products