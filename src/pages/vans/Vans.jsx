import React,{useState, useEffect} from 'react'
import { Link,NavLink,useSearchParams } from 'react-router-dom';
import { getVans } from '../../apiPath';

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const filterData = searchParams.get("type");

 useEffect(() => {

      async function loadVans() {
        setLoading(true);

        try {
          const data = await getVans()
          setVans(data)
          
        } catch (error) {
          setError(error);
        }finally{
          setLoading(false);
        }
      }
          loadVans()
}, [])

const displayFilter = filterData ? vans.filter((van) => van.type === filterData) : vans;

const vanElements = displayFilter.map(van => (
  <Link to={`/vans/${van.id}`} className='my-4' key={van.id}>
    <div  className="m md:w-72 w-96 sm:w-48 bg-slate-50 m-2 shadow-md h-full flex items-start justify-between flex-col ">
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

if(loading){
  return <p>loading....</p>
}
if(error){
  return <p>There is an error.... : {error.message}</p>
}

return (
  <section>
    <h1 className='text-center my-8 md:text-3xl font-extrabold'>Explore our van options</h1>
    <nav className='px-32 flex gap-4'>
      {/* <NavLink to='.'
      >All</NavLink>
      <NavLink to='?type=simple'
      >Simple</NavLink>
      <NavLink to='?type=rugged'
      >Rugged</NavLink>
      <NavLink to='?type=luxury'
    
      >Luxury</NavLink> */}
        <button onClick={() => setSearchParams("")} className={` hover:scale-110`}>All</button>
      <button onClick={() => setSearchParams("type=simple")} className={`hover:scale-110`}>Simple</button>
        <button onClick={() => setSearchParams("type=luxury")} className={` hover:scale-110`}>Luxury</button>
        <button onClick={() => setSearchParams("type=rugged")} className={`hover:scale-110`}>Rugged</button>
    </nav>
    <main className='sm:px-16 md:px-24 flex justify-center flex-wrap'>
        {vanElements}
    </main>
  </section>
)

}

export default Vans