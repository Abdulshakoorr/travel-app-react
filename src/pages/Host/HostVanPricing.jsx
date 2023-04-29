import React from 'react'
import { useOutletContext
} from 'react-router-dom'
const HostVanPricing = () => {
    const {currentVan} = useOutletContext();
  return (
    <div className='px-16 py-4'>
        <p className='text-md'>Pricing : $ {currentVan.price}</p>
    </div>
  )
}

export default HostVanPricing