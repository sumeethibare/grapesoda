import React from 'react';

const mark = [
    {
        number: '01',
        title: 'Design',
        description:
            'With a solid track record in designing websites, I deliver strong and user-friendly digital designs.',
    },
    {
        number: '02',
        title: 'Development',
        description:
            'I build scalable websites from scratch that fit seamlessly with design. My focus is on enhancing user experience & usability.',
    },
];

export default function Offerings() {
    return (
        <div className="bg-zinc-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <span className="loading loading-dots loading-xs"></span>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lowercase">Everything You Need, I Got It Covered</h2>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {mark.map((category, index) => (
                        <article key={index} className="flex max-w-xl flex-col items-start justify-top">
                            <div className="flex items-center gap-x-4 text-xs">
                                <p className="text-zinc-500">
                                    {category.number}
                                </p>
                            </div>
                            <div className="w-full border-b-2 my-6"></div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600">
                                    <a>
                                        <span className="absolute inset-0" />
                                        {category.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600">{category.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
