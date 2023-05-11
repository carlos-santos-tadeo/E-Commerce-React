import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Header from './components/layout/Header'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import ProtectedAuth from './components/auth/ProtectedAuth'
import Cart from './components/cart/Cart'
function App() {


  return (
    //en pages van las rutas que voy a usar
    //en routes las rutas protegidas
    //lo que no representa una ruta es un componente
    //NotFound la pagina que se mostrara cuando se busque una ruta que no existe
    <section className='grid grid-rows-[auto_1fr] min-h-screen font-["Yantramanav"]'>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedAuth />}>
          <Route path='/purchases' element={<Purchases />} />
        </Route>
        <Route path='/products/:id' element={<Products />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>

      <Cart/>

    </section>
  )
}

export default App
