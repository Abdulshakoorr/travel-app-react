import React from 'react'
import { useOutletContext
} from 'react-router-dom'
const HostVanPhotos = () => {
    const {currentVan} = useOutletContext();
  return (
    <div className='px-16 py-4'>
        <img src={currentVan.imageUrl} alt={currentVan.name} className='w-36 rounded'/>
    </div>
  )
}

export default HostVanPhotos