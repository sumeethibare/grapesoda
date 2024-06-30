import React from 'react'
import Featured from './FeaturedTexts'

function Impress() {
    return (
        <>
            <div className="flex flex-col justify-center h-screen mx-auto max-w-6xl lg:px-0 px-6">
                <p className="mt-6 text-2xl leading-8 text-zinc-600">
                    <span className='text-rose-600 lg:hover:font-semibold anim'>hello</span> my name is
                </p>
                <h1 className="text-6xl font-black tracking-tight mt-6 text-zinc-900 sm:text-8xl">
                    Sumeet Hibare
                </h1>
                <p className="mt-6 lg:text-2xl text-xl leading-8 text-zinc-600">
                    i ❤️ to <a className='font-serif italic text-zinc-950'>design</a> and <a className='font-serif italic text-zinc-950'>develop</a>
                </p>
                <Featured />
            </div>
        </>
    )
}

export default Impress