import Image from 'next/image'

const Card = (props) => {

    return(
        <div className={props.parentClasses} >
            <Image className={props.imageClasses} />
            <p className={props.textClasses} >

            </p>
        </div>
    )
}

export default Card