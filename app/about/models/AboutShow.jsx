import React from 'react'
import myimage from '../models/profile.jpg'
import Image from 'next/image'
function AboutShow() {
    return (
        <div className="lg:w-screen">
            <div
                className="lg:h-[500px] h-[650px]">
                <Image src={myimage} className="w-full h-full bg-bottom object-cover bg-no-repeat bg-fixed grayscale" priority={true}
                    alt="sumeet hibare" />
            </div>
        </div>
    )
}

export default AboutShow