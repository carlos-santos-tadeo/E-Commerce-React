import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.slice'

const Header = () => {

  const {token} = useSelector((store) => store.userInfo)

  const dispatch = useDispatch()

  const navigate = useNavigate()

 const handleClickChangeShowCart = () => {
  if(!token) return navigate("/login")
  dispatch(changeIsShowCart())
 }

  return (
    <section className='grid grid-cols-2 h-[50px]'>
      {/* nombre */}


      <Link className='border-[1px] border-r-0' to="/">
        <h1>e-commerce</h1>
      </Link>

      {/* enlace a rutas */}
      <nav className='grid grid-cols-[1fr_1fr_1fr] border-[1px]'>
        <Link to="/login">
          <i className='bx bx-user'></i>
        </Link>
        <Link className='border-x-[1px]' to="/purchases">
          <i className='bx bx-box'></i>
        </Link>
        <button onClick={handleClickChangeShowCart}>
          <i className='bx bx-cart'></i>
        </button>
      </nav>
    </section>
  )
}

export default Header