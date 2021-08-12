import * as classes from './CardStyles.module.css'
import Image from 'next/image'

const Card = (props) => {

    console.log(props.content.img)

    return(
        <div className={classes.flipCard} >
            <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                    <h2 className='text-text' >{props.content.front} </h2>
                    <Image width='300' height='450' className={'shadow rounded-xl'} src={props.content.img} />
                </div>
                <div className={classes.flipCardBack}>
                    <h2 className='text-text' >{props.content.back}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card