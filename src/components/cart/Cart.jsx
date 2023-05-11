import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../store'
import { changeIsShowCart, getCartProducts, purchaseCart } from '../../store/slices/cart.slice'
import Products from '../../pages/Products'
import CartProduct from './CartProduct'


const Cart = () => {

  const { isShowCart, products } = useSelector(store => store.cart)


  const { token } = useSelector((store) => store.userInfo)

  const dispatch = useDispatch()


  const handleClickChangeShowCart = () => {
    dispatch(changeIsShowCart())
  }

  const totalPrice = products.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0)

  const handleClickCheckout = () => {
    dispatch(purchaseCart())
  }

  useEffect(() => {
    if (isShowCart) {
      dispatch(getCartProducts())
    }
  }, [isShowCart])

  // min-h-[calc(100vh_-_60px)]
  return (
    <section className={`fixed top-[60px] bg-white shadow-xl w-[300px] h-screen ${isShowCart && token ? "right-0" : "-right-full"} duration-200 p-3 grid grid-rows-[auto_1fr_auto]`}>
      <h2 className='text-xl font-bold'>Shopping cart</h2>
      <i onClick={handleClickChangeShowCart} className='bx bx-x absolute top-2 right-3 text-xl hover:text-red-500 cursor-pointer'></i>

      {/* products del carrito */}
      <section className='overflow-y-auto grid gap-10 py-4 content-start'>
        {
          products.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
      </section>

      {/* ckeckout */}
      <section className='grid grid-cols-2 py-10 border-t-[1px] border-gray-400'>
        <span>Total</span>
        <h4 className='text-end'>${totalPrice}</h4>
        <button onClick={handleClickCheckout} className='w-full col-span-2 bg-red-500 py-2 text-white hover:bg-red-600 transition-colors mt-6 rounded-sm'>checkout</button>
      </section>
      <h4 className='mt-2 text-end '>Total: <span className='font-bold'>$ {(products.quantity * products.price).toFixed(1)}</span></h4>
    </section>
  )
}

export default Cart