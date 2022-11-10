import React from 'react'
import { Menu, Transition } from '@headlessui/react'

function NavBar(props) {
    const handleClick = () => {
        props.setNavOpen(!props.navOpen)
        console.log(props.navOpen)
    }
  return (
    <div className='md:flex-col'>
        <div className='flex flex-row justify-between py-4 items-center'>
            <div className='md:hidden'>
                <Menu >
                    <Menu.Button as='div'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                    </Menu.Button>

                    <Transition
                        enter="transition duration-150 ease-out"
                        enterFrom="transform scale-95 opacity-0 -translate-x-500"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0 -translate-x-500"
                        as='div' className={`absolute m-0 top-0 h-screen w-96 bg-white`}
                    >

                    <Menu.Items >
                      <Menu.Item>
                        {({ active }) => (

                        <div>
                            <div className='flex'> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-auto m-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className={'flex justify-between mx-6'} /* onClick={''} */  >
                                Category 1
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        
                        </div>
                        )}
                      </Menu.Item>
                        
                    </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hidden md:block">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
            </svg>
                        


                        
            <div className='text-3xl font-light'>Beans Shop</div>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 block md:hidden">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                        

            </div>
                        
        </div>
        <div className='mx-auto hidden md:flex justify-evenly flex-row mx-20 max-w-[750px]'>
            <p>Category 1</p>
            <p>Category 2</p>
            <p>Category 3</p>
            <p>Category 4</p>
            <p>Category 5</p>
            <p>Category 6</p>
            <p>Category 7</p>
        </div>
    </div>
  )
}

export default NavBar

