import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'

const Home = () => {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [currentCategory, setCurrentCategory] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductName = e.target.productName.value
    setProductName(newProductName)
  }

  const productByName = useMemo(() => {
    //unicamente has este calculo si productName y products cambia
    return products.filter((product) => product.title.toLowerCase().includes(productName.toLowerCase()))
  }, [productName, products])

  const handleClickCategory = (e) => {
    setCurrentCategory(Number(e.target.dataset.category))
  }

  useEffect(() => {
    //el axios normal ya no se usa pero se debe crear el configAxios.js
    axiosEcommerce
      .get("categories")
      .then((res) => setCategories(res.data))
      .catch((err => console.log(err)))
  }, [])

  useEffect(() => {
    if (currentCategory === 0) {

      axiosEcommerce.get("products")
        .then((res) => setProducts(res.data))
        .catch((err => console.log(err)))
    }
  }, [currentCategory])

  useEffect(() => {
    if (currentCategory !== 0) {
      axiosEcommerce.get(`products?categoryId=${currentCategory}`)
        .then((res) => setProducts(res.data))
        .catch((err => console.log(err)))
    }
  }, [currentCategory])


  return (
    <main className='px-2 mt-32'>
      <form className='lg:flex flex-col lg:flex-row lg:justify-between' onSubmit={handleSubmit}>
        <ul className='flex gap-[9px] lg:gap-10 lg:text-2xl text-sm font-bold mb-10 pl-2 lg:pl-[7%]'>
          <li className='cursor-pointer text-slate-500 border-b-[1px] border-red-300 rounded-md hover:text-red-400' onClick={handleClickCategory} data-category={0}>ALL</li>
          {
            categories.map(category => <li className='cursor-pointer text-slate-500 border-b-[1px] border-red-300 rounded-md hover:text-red-400' onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>)
          }
        </ul>
        <div className='lg:pr-16 lg:grid lg:grid-rows-2 lg:gap-3'>
          <input className='rounded-md mr-5 lg:w-[230px] text-center text-xl shadow-sm shadow-red-500/50' id='productName' type="text" placeholder='What are you looking for?' />
          <button className="bg-red-400 rounded-md w-14 h-7 mx-auto"><i className='bx bx-search font-semibold text-lg text-white'></i></button>
        </div>
      </form>



      <section className='grid pb-12 mt-10 justify-center gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_300px)] sm:grid-cols-[repeat(auto-fill,_350px)]'>
        {
          productByName.map(product => <ProductCard key={product.id} product={product} />)
        }
      </section>
    </main>
  )
}

export default Home