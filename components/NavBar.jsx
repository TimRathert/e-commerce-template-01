import React from 'react'
import { Menu } from '@headlessui/react'
import { bars3 } from 'react-icons/hi'

function NavBar() {
    const navToggle = () => {

    }
  return (
    <div className='flex justify-between p-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div className='sm:max-md:hidden'>nav medium up</div>
        <div className='text-3xl font-light'>Beans Shop</div>
        <div className=''>search / cart</div>
    </div>
  )
}

export default NavBar

