import React from 'react'
import { Menu, Transition } from '@headlessui/react'

function NavBar(props) {
    const handleClick = () => {
        props.setNavOpen(!props.navOpen)
        console.log(props.navOpen)
    }
  return (
    <div className='md:flex-col justify-center relative z-40'>
        <div className='flex flex-row justify-between py-4 items-center'>
            <div className='md:hidden'>
                <Menu >
                    <Menu.Button as='div'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-8 w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                    </Menu.Button>

                    <Transition
                        enter="transition duration-150 ease-out"
                        enterFrom="transform scale-95 opacity-0 -translate-x-500"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0 -translate-x-500"
                        as='div' className={`absolute m-0 top-0 min-h-screen w-96 bg-white`}
                    >

                    <Menu.Items >
                      <Menu.Item>
                        {({ active }) => (

                            
                            <ul>
                              <li>
                                <input type="checkbox" checked />
                                <i></i>
                                <h2>Languages Used</h2>
                                <p>This page was written in HTML and CSS. The CSS was compiled from SASS. I used Normalize as my CSS reset and -prefix-free to save myself some headaches. I haven't quite gotten the hang of Slim for compiling into HTML, but someday I'll use it since its syntax compliments that of SASS. Regardless, this could all be done in plain HTML and CSS.</p>
                              </li>
                              <li>
                                <input type="checkbox" checked />
                                <i></i>
                                <h2>How it Works</h2>
                                <p>Using the sibling and checked selectors, we can determine the styling of sibling elements based on the checked state of the checkbox input element. One use, as demonstrated here, is an entirely CSS and HTML accordion element. Media queries are used to make the element responsive to different screen sizes.</p>
                              </li>
                              <li>
                                <input type="checkbox" checked />
                                <i></i>
                                <h2>Points of Interest</h2>
                                <p>By making the open state default for when :checked isn't detected, we can make this system accessable for browsers that don't recognize :checked. The fallback is simply an open accordion. The accordion can be manipulated with Javascript (if needed) by changing the "checked" property of the input element.</p>
                              </li>
                            </ul>
                        )}
                      </Menu.Item>
                        
                    </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hidden md:block mx-8">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>
                        


                        
            <div className='text-4xl font-light'>Beans Shop</div>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 block md:hidden ">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                        

            </div>
                        
        </div>
        <div className='mx-auto hidden md:flex flex-row justify-evenly max-w-[750px] my-6'>
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

