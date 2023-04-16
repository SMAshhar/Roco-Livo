import Image from 'next/image'
import React from 'react'

export default function SlideShow() {
    return (
        <div className='flex w-screen h-screen justify-center items-center'>

            <div className='flex w-4/5 rounded-lg bg-stone-200 '>
                <div className='w-1/2'>
                    <Image src='/city3.jpg' alt='city3.jpg' width={1100} height={500} className='rounded-l-lg' />
                </div>

                <div className='w-1/2 flex flex-col justify-left mx-4 mt-8'>
                    <h1 className='text-3xl font-bold'>Somethings are worth <h1 className='text-blue-500'>dying</h1> for...</h1>
                    <p className='font-light italic my-4'>A documentation about something awefull</p>
                    <p className='my-8'>A documentation about something awefull. THe lines are going everyehwere, the problem is persistant, the awesfull awefull smell. This is enough to kill someone. A documentation about something awefull. THe lines are going everyehwere, the problem is persistant, the awesfull awefull smell. This is enough to kill someone. </p>
                </div>
            </div>
        </div>
    )
}