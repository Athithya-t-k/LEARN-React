import React from 'react'

function Card({user}) {
  return (
    <div className='bg-gray-400 w-64 h-64 border-black border rounded-md'>
        {user.name}
    </div>
  )
}

export default Card
