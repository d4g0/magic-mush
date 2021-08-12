import Carousel from '../../UI-Components/Carousel/Carousel'

const DemoPreviewSection = (props) => {

    return(
        <div>
            <Carousel story={props.story} />
        </div>
    )
}

export default DemoPreviewSection