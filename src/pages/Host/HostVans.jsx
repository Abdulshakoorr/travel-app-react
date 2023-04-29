import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const HostVans = () => {
  const [vans, setVans] = useState([]);

 useEffect(() => {
    fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
}, [])

const vanElements = vans.map(van => (
  <Link to={`/host/vans/${van.id}`} className='my-4'  key={van.id}>
    <div className="m md:w-72 w-96 sm:w-48 bg-slate-50 m-2 shadow-md h-full flex items-start justify-between flex-col ">
        <img  src={van.imageUrl} />
        <div className="px-4 flex items-center justify-between py-2 flex-wrap ">
            <h3 className='text-xl font-serif font-bold'>{van.name}</h3> / 
            <p className='text-sm '>${van.price}<span>/day</span></p>
        </div>
        <p className='px-4 py-2'>{van.description.slice(0,75)}...</p>
        <i className="px-4 py-2 md:px-8 md:py-4 bg-slate-50 border  shadow-2xl text-sm text-center w-full cursor-pointer hover:bg-orange-200 hover:text-md transition-all duration-200">{van.type}</i>
    </div>
  </Link>
))

return (
  <section>
    <h1 className='text-center my-8 md:text-3xl font-extrabold'>Host Vans List</h1>
    <main className='sm:px-16 md:px-24 flex justify-center flex-wrap'>
        {vanElements}
    </main>
  </section>
)

}

export default HostVans