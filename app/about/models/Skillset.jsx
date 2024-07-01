"use client";
import { useEffect } from 'react';
import Typed from 'typed.js';

const Skillset = () => {
    useEffect(() => {
        const options = {
            stringsElement: '#typed-strings',
            typeSpeed: 10,
            backDelay: 1000,
            loop: false,
            loopCount: 0,
            cursorChar: '_',
        };

        const typed = new Typed('#typed', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>

            <div id="typed-strings" className="hidden">
                <div className="text-zinc-50">
                    <div className="max-w-6xl lg:px-20 px-6">
                        <div className="mb-8">
                            <p className="lg:text-lg text-sm text-zinc-400">
                                <span className="text-blue-400">
                                    class <span className="text-yellow-300">Sumeet Hibare </span>
                                </span>
                                <span className="text-white">&#123; </span>
                                <br />
                                &nbsp;&nbsp;{`// loves to design & code.`}
                                <br />
                                &nbsp;<span className="text-blue-400">constructor</span>
                                <span className="text-white">()</span>
                                <span className="text-white"> &#123; </span>
                                <br />
                                &nbsp;&nbsp;&nbsp;
                                <span>
                                    <span className="text-yellow-300">this</span>
                                    <span className="text-emerald-400">.name</span>
                                    <span className="text-yellow-300"> = </span>
                                    <span className="text-emerald-400">
                                        &apos;sumeet hibare&apos;
                                    </span>
                                </span>
                                <br />
                                &nbsp; &nbsp;
                                <span>
                                    <span className="text-yellow-300">this</span>
                                    <span className="text-emerald-400">.email</span>
                                    <span className="text-yellow-300"> = </span>
                                    <span className="text-emerald-400">
                                        &apos;theforeverfella@gmail.com&apos;
                                    </span>
                                </span>
                                <br />
                                &nbsp;<span className="text-white">&#125;</span>
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="lg:text-lg text-sm text-yellow-300">
                                &nbsp; education <span className="text-white">() &#123;</span>
                            </h2>
                            <p className="lg:text-lg text-sm mb-4">
                                &nbsp;&nbsp;
                                <span className="text-blue-400">
                                    &nbsp; return <span className="text-white">[ </span>
                                </span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&#123;{" "}
                                <span className="text-emerald-400">
                                    &apos;2021-2025&apos; : &apos;Shetty Insittute Of
                                    Technology&apos;
                                </span>{" "}
                                &#125;,
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&#123;{" "}
                                <span className="text-emerald-400">
                                    &apos;2019-2021&apos; : &apos;Disha Pre University College Of
                                    Science&apos;
                                </span>{" "}
                                &#125;,
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&#123;{" "}
                                <span className="text-emerald-400">
                                    &apos;2006-2019&apos; : &apos;SRN Mehta School&apos;
                                </span>{" "}
                                &#125;
                                <br />
                                &nbsp;&nbsp;&nbsp;<span className="text-white">]</span>
                                <br />
                                <span className="text-white">&#125;</span>
                            </p>
                        </div>
                        <div>
                            <h2 className="lg:text-lg text-sm text-yellow-300">
                                &nbsp; skills <span className="text-white">() &#123; </span>
                            </h2>
                            <p className="lg:text-lg text-sm mb-4">
                                <span className="text-blue-400">
                                    &nbsp;&nbsp;return <span className="text-white">[ </span>
                                </span>
                                <br />
                                &nbsp;&nbsp;&nbsp;
                                <span className="text-emerald-400">
                                    &apos;HTML&apos;, &apos;CSS&apos;, &apos;JS&apos;,
                                    &apos;Node.js&apos;, &apos;Bootstrap&apos;,
                                    &apos;Tailwind&apos;, &apos;Vite&apos;, &apos;PHP&apos;,
                                    &apos;MySQL&apos;, &apos;MongoDB&apos;, &apos;Photoshop&apos;,
                                    &apos;UI/UX&apos;, &apos;C#&apos;,&apos;TypeScript&apos;,
                                    &apos;NextJS&apos;, &apos;Git/GitHub &apos;, &apos;React
                                    Js&apos;, &apos;Python & Frameworks&apos;...
                                </span>
                                <span className="text-white"> ]</span>
                                <br />
                                <span className="text-white">&nbsp;&nbsp;&#125;</span>
                                <br />
                                <span className="text-white">&#125;</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <h2 className="text-xl">
                    <span id="typed"></span>
                </h2>
            </div >

        </>
    );
};

export default Skillset;
