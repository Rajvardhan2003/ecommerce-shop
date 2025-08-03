import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
        <div>
            <h1 className="text-2xl font-bold">E-commerce Shop</h1>
        </div>
        <div className='flex px-20 space-x-4'>
            <div><a href="/">Home</a></div>
            <div><a href="/products">Products</a></div>

        </div>
        <div className='flex space-x-4'>
            <div><a href="/cart">Cart</a></div>
            <div><a href='/profile'>Profile</a></div>
        </div>
    </div>
  )
}

export default Navbar