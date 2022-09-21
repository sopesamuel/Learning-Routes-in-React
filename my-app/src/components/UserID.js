import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserID() {
    const {userId} = useParams()
   
  return (
    <div>Details about user {userId}</div>
  )
}
