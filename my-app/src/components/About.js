import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const Navigate = useNavigate()
  return (
    <>
    <div>
        About Page
    </div>
    <button onClick={()=> Navigate('/order-summary')}>Place Order</button>
    </>

  )
}
