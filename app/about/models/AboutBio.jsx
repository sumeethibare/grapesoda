import { ArrowDownCircleIcon, ArrowDownRightIcon, BarsArrowDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import AboutProfile from './AboutProfile'

function AboutBio() {
    return (
        <>
            <div className='bg-zinc-950'>
                <div className='flex justify-between text-emerald-400 hover:duration-700 duration-500'>
                    <div className='max-w-2xl p-6 lg:p-14 font-semibold'>
                        <p className='tracking-tight lg:text-3xl'>Want to Know More </p>
                        <div className='flex items-end'> <p className='lg:text-9xl text-6xl lg:font-black font-semibold'>About</p><p className='text-3xl lg:p-4 ml-2'>Me ?</p></div>
                    </div>
                    <div className='p-16 lg:flex hidden'>
                        <a href='#profile'>  <ArrowDownRightIcon className='size-40 p-8' /></a>
                    </div>
                </div>
                <div className='max-h-screen lg:px-6 px-4 py-10'>
                    <AboutProfile />
                </div>
            </div>
        </>
    )
}

export default AboutBio