import React from 'react'
import { Transition } from '@headlessui/react'


function MainSlideShow(prop) {
    let currentSlide = 1
    const slideShow = () => {
        let i

    }
  return (
    <div className='flex snap-x snap-mandatory overflow-hidden'>
        {/* <img src='https://via.placeholder.com/1500/' className='w-screen max-h-[90vh]'/> */}
        <div className='snap-start min-w-full h-[300px] max-h-[90vh] flex items-center justify-center' id='slide-1'>Slide 1</div>
        <div className='snap-start min-w-full h-[300px] max-h-[90vh] flex items-center justify-center' id='slide-2'>Slide 2</div>
        <div className='snap-start min-w-full h-[300px] max-h-[90vh] flex items-center justify-center' id='slide-3'>Slide 3</div>
    </div>
  )
}

export default MainSlideShow