import * as classes from './CardStyles.module.css';
import Image from 'next/image';

const Card = (props) => {

    return(
        <div className={classes.flipCard} >
            <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront }>
                    <h2 className='text-text' >{props.content.front} </h2>
                    <Image width={props.setSize? props.setSize[0] : '400'} height={props.setSize? props.setSize[1] : '550'} className={'shadow rounded-xl'} src={props.content.img} />
                </div>
                <div className={classes.flipCardBack}>
                    <p className='text-text' >{props.content.back}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;

//completar con las opciones para diferentes tipos de layouts de cards, se escoge en las props cual se va usar