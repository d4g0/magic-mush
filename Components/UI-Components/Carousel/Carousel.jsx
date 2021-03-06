import { useEmblaCarousel } from 'embla-carousel/react';
import Card from '../Card/Card';

import * as classes from './CarouselStyles.module.css';

//carousel de palo, crear las tallas pa recivir de props cuantos slides y q componentes tirar x carousel

const Carousel = (props) => {

    const [emblaRef] = useEmblaCarousel();

    return (
        <div className={classes.embla} ref={emblaRef}>
          <div className={classes.embla__container}>
            <div className={classes.embla__slide} >
                <div className='flex' >
                    <div className='flex-1 flex flex-col items-center mt-8'>
                        <Card content={{img: props.story.Demo1.img, front: props.story.Demo1.name, back: 'Demo1 Back'}} ></Card>
                    </div>
                    <div className='flex-1 flex flex-col items-center mt-8'>
                        <Card content={{img: props.story.Demo2.img, front: props.story.Demo2.name, back: 'Demo2 Back'}} ></Card>
                    </div>
                </div>
            </div>
            <div className={classes.embla__slide}>
            <div className='flex' >
                    <div className='flex-1 flex flex-col items-center mt-8' >
                        <Card content={{img: props.story.Demo1.img, front: 'Demo 3', back: 'Demo3 Back'}} ></Card>
                    </div>
                    <div className='flex-1 flex flex-col items-center mt-8' >
                        <Card content={{img: props.story.Demo2.img, front: 'Demo 4', back: 'Demo4 Back'}} ></Card>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Carousel;

//separar y crear carousel items
