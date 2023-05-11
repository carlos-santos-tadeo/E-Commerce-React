import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'

const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  const handleClickAddProduct = (e) => {
    //si tienes un padre que puede afectar con esto se quita e.stopPropagation
    e.preventDefault()
    dispatch(addProductCart({quantity: 1, productId: product.id}))
  }

  return (
    <Link to={`/products/${product.id}`} className='border-[1px] border-gray-300 rounded-md'>
      <div className='relative p-4 border-b-[1px] border-gray-300 h-[200px] overflow-hidden group'>

        <img className='h-full w-full object-contain group-hover:opacity-0 duration-300'
          src={product.images[0].url} 
          alt="" />

          <img className='h-full w-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300'
          src={product.images[1].url} 
          alt="" />

      </div>

      {/* object contain ajusta la imagen a su contenedor horizontal y vertical*/}
      <section className='relative'>
        <h4 className='text-gray-400 font-bold'>{product.brand}</h4>
        <h3 className='font-bold text-sm ml-2'>{product.title}</h3>

        <h4 className='text-gray-400 font-bold mt-4'>price</h4>
        <span className='font-bold text-sm ml-2'>{product.price}</span>

        <button onClick={handleClickAddProduct} className='absolute right-4 bottom-4 bg-red-500 p-2 text-white text-xl rounded-full w-[50px] aspect-square hover:bg-red-600'><i className='bx bx-cart-alt' ></i></button>
      </section>
    </Link>
  )
}

export default ProductCard