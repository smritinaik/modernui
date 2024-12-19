import React from 'react'
import { BackgroundLines } from '@/components/ui/background-lines'

function HeroSection() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-14">
        <div
            className='h-full md:h-[90rem] w-full rounded-md flex flex-col items-center justify-center relative oberflow-hidden mx-auto py-10 md:py-0'
        >
            <div className='p-4 relative z-10 w-full text-center'>
                <h1
                    className='mt-20 md:mt-0 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900'
                >Master the art of modern UI </h1>
                <p
                className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
                >Dive into the art of ui development where ideas meet creation , in real world application with modern Ui so lets start the development now .. thankyou</p>
            </div>

        </div>
         </BackgroundLines>
    )
}

export default HeroSection