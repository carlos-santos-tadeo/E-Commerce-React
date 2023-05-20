import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.slice'

const Header = () => {

  const { token } = useSelector((store) => store.userInfo)
  const { products } = useSelector(store => store.cart)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleClickChangeShowCart = () => {
    if (!token) return navigate("/login")
    dispatch(changeIsShowCart())
  }

  return (
    <main className='fixed bg-white z-50 w-full text-2xl text-gray-400'>

      <section className='h-[70px] grid grid-cols-2'>
        {/* nombre */}


        <Link className='border-[1px] h-[70px] border-r-0 flex items-center group hover:bg-red-400 duration-500 ' to="/">
          <h1 className='sm:pl-20 pl-10 group-hover:text-white font-bold text-xl sm:text-3xl text-[#f85555]'>e-commerce</h1>
        </Link>

        {/* enlace a rutas */}
        <nav className=' grid grid-cols-[1fr_1fr_1fr] border-[1px] h-[70px] items-center text-center'>
          <Link className=' hover:text-red-400' to="/login">
            <i className='bx bx-user  hover:text-red-400 sm:text-3xl'></i>
          </Link>
          <Link className='border-x-[1px]  hover:text-red-400' to="/purchases">
            <i className='bx bx-box  hover:text-red-400 sm:text-3xl'></i>
          </Link>
          <button className='relative hover:text-red-400' onClick={handleClickChangeShowCart}>
            <i className='bx bx-cart  hover:text-red-400 sm:text-3xl'><div className='md:text-sm text-white md:font-bold bg-red-400 md:w-5 rounded-full text-sm w-3 absolute right-[5%] bottom-[25%] md:bottom-[20%] md:right-[35%]'>{products.length > 0 ? products.length : ""}</div></i>

          </button>
        </nav>
      </section>
    </main>
  )
}

export default Header