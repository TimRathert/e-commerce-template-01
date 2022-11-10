import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


function MainSlideShow(prop) {

    const EmblaCarousel = () => {
        const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])
        return (
            <div className="overflow-hidden z-0" ref={emblaRef}>
                <div className="flex">
                   <img src='https://placeimg.com/640/360/people' className="flex-[0_0_100%] aspect-square md:aspect-video object-cover w-screen max-h-[100vh]" />
                   <img src='https://placeimg.com/640/360/people' className="flex-[0_0_100%] aspect-square md:aspect-video object-cover w-screen max-h-[100vh]" />
                   <img src='https://placeimg.com/640/360/people' className="flex-[0_0_100%] aspect-square md:aspect-video object-cover w-screen max-h-[100vh]" />
                </div>
            </div>
        )
    }
    
    return (
    <>
        <EmblaCarousel />
        {/* <img src='https://via.placeholder.com/1500/' className='w-screen max-h-[90vh]'/> */}    
    </>

  )
}

export default MainSlideShow