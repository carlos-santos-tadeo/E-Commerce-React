import React from 'react'
import { formatDateDDMMYYYY } from '../../utils/date'

const PurchaseCard = ({purchase}) => {
  return (
    <article className='grid grid-cols-2 items-center gap-2 sm:gap-20 text-sm sm:text-base'>
      <section className='flex gap-2 items-center'>
        <div className='h-[50px] sm:h-[80px] text-center px-2 '>
          <img className='h-full w-full object-contain' loading='lazy' src={purchase.product.images[2].url} alt="" />
          <h4 className='w-[120px] sm:w-[200px]'>{purchase.product.title}</h4>
        </div>
      </section>

      <section className='grid text-center gap-4 sm:grid-cols-3'>
        <span className='text-gray-400'>{formatDateDDMMYYYY(purchase.createdAt)}</span>
        <div>
          <span className='p-2 border-[1px] border-gray-400'>{purchase.quantity}</span>
        </div>
        <h4 className='font-bold'>$ {(purchase.quantity * purchase.product.price).toFixed(1)}</h4>
      </section>
    </article>
  )
}

export default PurchaseCard