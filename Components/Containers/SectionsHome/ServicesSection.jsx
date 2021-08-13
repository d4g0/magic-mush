import React, { useState } from 'react'

import Image from 'next/image'
import Card from '../../UI-Components/Card/Card'


const ServiceSection = (props) => { 
    
    const [hoverOnService, setHoverOnService] = useState({
        design: {
            container: '',
            header: '',
            text: '',
        },
        dev: {
            container: '',
            header: '',
            text: ''
        },
        sup: {
            container: '',
            header: '',
            text: ''
        }
    }) 

    const hoverServiceHandler = (id) => {
        console.log(id + 'hover')
        setHoverOnService((prevState) => {
            return {
                ...prevState,
                [id]: {
                    container: ' bg-blue-500',
                    header: ' text-white',
                    text: ' text-white',
                } 
            }
        } )
    }

    const noHoverServiceHandler = () => {
        console.log('fuera')
        setHoverOnService((prevState) => {
        return {
                design: {
                    container: '',
                    header: '',
                    text: '',
                },
                dev: {
                    container: '',
                    header: '',
                    text: ''
                },
                sup: {
                    container: '',
                    header: '',
                    text: ''
                }
            }
        })
    }
    return(
        <div className="flex flex-wrap overflow-hidden mt-8">
            <div className={"w-full flex flex-col h-96 pl-24 overflow-hidden transition delay-150 duration-300 ease-in-out " + hoverOnService.design.container}
            onMouseEnter={() => hoverServiceHandler('design')}
            onMouseLeave={noHoverServiceHandler} >
                <h2 className={'ml-20 mt-8 transition delay-150 duration-300 ease-in-out ' + hoverOnService.design.header} > {props.story.service1.Name} </h2>
                <div className='flex w-full '>
                    <div className='flex-1 flex justify-center'><p className={'max-w-screen-sm pt-10 transition delay-150 duration-300 ease-in-out ' + hoverOnService.design.text } >{props.story.service1.Text}</p></div>
                    <div className='flex-1 flex justify-center ml-24' ><Card content={{img: props.story.service1.img.filename, front: '', back: 'DesignServiceBack' }} setSize={['250', '250']} ></Card></div>
                </div> 
            </div>
            <div className={"w-full overflow-hidden transition delay-150 duration-300 ease-in-out " + hoverOnService.dev.container }
            onMouseEnter={() => hoverServiceHandler('dev')}
            onMouseLeave={noHoverServiceHandler}>
                <div className='flex w-full justify-around items-center'>
                    <Image className='shadow rounded-xl' src={props.story.service2.img.filename} height='300' width='300' ></Image>
                    <div>
                        <h2 className={'ml-36 mb-8 transition delay-150 duration-300 ease-in-out ' + hoverOnService.dev.header}> {props.story.service2.Name} </h2>
                        <p className={'pb-8 max-w-screen-sm transition delay-150 duration-300 ease-in-out ' + hoverOnService.dev.text} >{props.story.service2.Text}</p>
                    </div>
                </div> 
            </div>
            <div className={"transition delay-150 duration-300 ease-in-out w-full overflow-hidden flex justify-center  " + hoverOnService.sup.container}
            onMouseEnter={() => hoverServiceHandler('sup')}
            onMouseLeave={noHoverServiceHandler}>
                <div className='flex flex-col w-96 mt-8' >
                    <h2 className={'transition delay-150 duration-300 ease-in-out ' + hoverOnService.sup.header} > {props.story.service3.Name} </h2>
                    <p className={'pb-8 text-center mt-4 transition delay-150 duration-300 ease-in-out ' + hoverOnService.sup.text} > {props.story.service3.Text} </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection

//props.story.service1.Name