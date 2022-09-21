import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {
    const Navigate = useNavigate()
  return (
    <>
         <div>Order Confirmed!</div>
         <button onClick={()=> Navigate(-1)}>Abeg Go Back!</button>
    </>
   
  )
}
