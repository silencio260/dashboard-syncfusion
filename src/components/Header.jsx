import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mb-10'>
      <p className="tex-gray-400">
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-950'>
        {title}
      </p>
      
    </div>
  )
}

export default Header