import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

function IntroCom() {
    return (
        <>
            <div className='relative isolate  h-96 bg-zinc-950 text-zinc-50 w-full flex lg:flex-row flex-col justify-around items-center'>
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="rotate-45 absolute left-[max(50%,25rem)] bottom-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-zinc-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-zinc-950">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className='flex'>
                    <a className='text-7xl'>πQue</a><p>RT</p>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-y-6'>
                    <div className='max-w-sm w-full text-center px-8'>the creator of this community for technology & innovation</div>
                    <a className='rounded-full lg:hover:scale-110 duration-500' href='/community'> <ArrowRightIcon className='size-6' /></a>
                </div>
            </div>

        </>
    )
}

export default IntroCom