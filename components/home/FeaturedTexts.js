"use client";
import { useEffect } from 'react';
import Typed from 'typed.js';

const Featured = () => {
    useEffect(() => {
        const options = {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            backDelay: 1000,
            loop: true,
            loopCount: 0,
            cursorChar: '_',
        };

        const typed = new Typed('#typed', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="text-zinc-950">
            <div id="typed-strings" className="hidden">
                <p>Websites</p>
                <p>Digital Products</p>
                <p>Android Applications</p>
                <p>UI/UX</p>
                <p>Pretty much everything</p>
            </div>
            <h2 className="text-xl">
                <span id="typed"></span>
            </h2>
        </div>
    );
};

export default Featured;
