import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-18 py-8'>
        <h4 className="bg-black uppercase text-white rounded-full px-6 py-2">Target audience</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default NavBar