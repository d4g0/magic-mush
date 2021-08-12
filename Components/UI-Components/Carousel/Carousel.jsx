import { useEmblaCarousel } from 'embla-carousel/react'

import * as classes from './CarouselStyles.module.css'

const Carousel = (props) => {

    const [emblaRef] = useEmblaCarousel()

    return (
        <div className={classes.embla} ref={emblaRef}>
          <div className={classes.embla__container}>
            <div className={classes.embla__slide + ' bg-blue-500'} >
                <div className='flex' >
                    <div className='flex-1' >
                        Slide 1.1
                    </div>
                    <div className='flex-1' >
                        Slide 1.2
                    </div>
                </div>
            </div>
            <div className={classes.embla__slide + ' bg-red-500'}>
                Slide 2
            </div>
          </div>
        </div>
    )
}

export default Carousel