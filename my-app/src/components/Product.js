import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <>    
    <div>
    <input type='search' placeholder='Search products'></input>
    </div>
    <div className='link'>
    <Link to='featured'>Featured</Link>
    <Link to='new'>New</Link>
    </div>
   <Outlet/>
    </>

  )
}
