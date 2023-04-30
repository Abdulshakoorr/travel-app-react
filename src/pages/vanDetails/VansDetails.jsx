import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const vansDetailsDetails = () => {
  const [vansDetail, setVansDetail] = useState([]);
    const {id} = useParams();
    console.log(id)


    useEffect(() => {
       fetch(`/api/vans/${id}`)
           .then(res => res.json())
           .then(data => setVansDetail(data.vans))
   }, [id])


  
console.log(vansDetail)
  return (
    <section>
    <h1 className='text-left px-8 md:px-36 my-8 md:text-3xl font-extrabold'>vansDetails</h1>
    <main className='sm:px-16 md:px-24 flex justify-center flex-wrap'>
    <div className="w-full mx-auto">
            {vansDetail ? (
                <div className="w-full flex gap-4 md:gap-8 flex-wrap md:flex-nowrap">
                    <img src={vansDetail.imageUrl}  className=' md:w-96 rounded-md shadow-2xl'/>
                    <div className="text-content flex flex-col gap-5 items-start py-8 px-4">

                    <i className="text-orange-300">{vansDetail.type}</i>
                    <h2 className='text-4xl font-bold'>{vansDetail.name}</h2>
                    <p className="vansDetail-price"><span>${vansDetail.price}</span>/day</p>
                    <p className='lg:w-96 leading-6'>{vansDetail.description}</p>
                    <NavLink className="link-button bg-orange-300 font-bold tracking-wider p-4 px-8">Rent this vansDetail</NavLink>
                </div>
                    </div>
            ) : <h2>Loading...</h2>}
        </div>
    </main>
  </section>
  )
}

export default vansDetailsDetails