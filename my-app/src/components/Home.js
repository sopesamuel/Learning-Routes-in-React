import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const Navigate = useNavigate()
  return (
    <>
    <div>
        HOME PAGE
    </div>
    <button onClick={()=> Navigate('/order-summary')}>Place Order</button>
    </>
   
  )
}
