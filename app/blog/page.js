
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

const blog = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <div className="flex justify-center items-center h-dvh bg-[#f1f5f9]">
                <iframe
                    src="https://internetdraft.blogspot.com/"
                    className={`lg:mt-14 w-full h-full border-none transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                    title="internet draft blog"
                />
            </div>
        </>
    );
};

export default blog;
