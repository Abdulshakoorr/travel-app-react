import React from 'react'
import pageNotFound from '../../assets/images/pagenotfound.svg'
const PageNotFound = () => {
  return (
    <div className='container flex items-center justify-center flex-col  p-4'>
        <h1 >Page not found!</h1>
        <img src={pageNotFound} alt="404" className='w-48'/>
    </div>
  )
}

export default PageNotFound