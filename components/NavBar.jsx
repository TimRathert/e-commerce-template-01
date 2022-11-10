import React from 'react'
import { Menu } from '@headlessui/react'

function NavBar() {
    const navToggle = () => {

    }
  return (
    <div className='flex justify-between p-2'>
        <div className='md:hidden'>Drop small</div>
        <div className='sm:max-md:hidden'>nav medium up</div>
        <div className='text-3xl font-light'>Beans Shop</div>
        <div className=''>search / cart</div>
    </div>
  )
}

export default NavBar