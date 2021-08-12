import Image from 'next/image'

const LandingSection = (props) => {
    return(
       <div>
            <div className="flex flex-wrap overflow-hidden ">

                <div className="w-full flex-1 overflow-hidden sm:my-8 sm:px-8 md:my-6 md:px-6 lg:my-10 lg:px-10 xl:my-5 xl:px-5 xl:w-1/2 pb-5">
                    <h1 className= 'mt-16 ml-28'>
                        {props.story.content.Title}
                    </h1>
                    <h2 className= 'text-left mt-16 ml-28 tracking-wide pr-24 leading-10' >
                        {props.story.content.Subtitle}
                    </h2>
                    <p className='mt-10 mx-28' >
                        {props.story.content.IntroText}
                    </p>
                </div>
                
                <div className="w-full flex-1 overflow-hidden sm:my-8 sm:px-8 md:my-6 md:px-6 lg:my-10 lg:px-18 xl:my-5 xl:px-5 xl:w-1/2">
                    <div className='flex  justify-center items-center mt-24 mr-12' >
                        <Image width='400' height='550' className='shadow rounded-xl align-middle border-none' src={props.story.content.ProyectImg.filename} />
                    </div>
                </div>

            </div>
       </div> 
    )
}

export default LandingSection
//