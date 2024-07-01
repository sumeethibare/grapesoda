'use client';
import React, { useState } from "react";

const showcase = [
    {
        name: 'Further',
        longname: 'Further - Technical Fest',
        infoco: 'Design & development',
        status: 'completed',
        imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-people-starting-business-project_23-2148843028.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714435200&semt=ais',
        published: 'November 23',
        link: 'https://github.com/sumeethibare/thefurther',
        live: 'https://thefurther.in',
        description: 'The Further is the technical fest of SIT, this project mainly focus on the website for registerations & details for the competitions that are being conducted.'
    },
    {
        name: 'Archives',
        longname: 'Archives - Student Management System',
        infoco: 'Design & development',
        status: 'completed',
        imageUrl: 'https://img.freepik.com/free-vector/preparing-test-together-learning-studying-with-friends-effective-revision-revision-timetables-planning-how-revise-exams-concept_335657-825.jpg',
        published: 'March 2024',
        link: 'https://github.com/sumeethibare/Archives',
        live: '',
        description: 'Project Archives is the 5th Semester DBMS Project which focus on Management of students under the guidance of the professors providing some excellent features for the management.'
    },
    // {
    //     name: 'Patange Store',
    //     longname: 'Patange Store & Electronics',
    //     infoco: 'Work in Progress',
    //     status: 'Developement',
    //     imageUrl: 'https://img.freepik.com/free-vector/active-people-bikes-windmills-house-with-solar-panel-rooftop-flat-illustration_74855-10477.jpg',
    //     published: 'development',
    //     link: '',
    //     live: '',
    //     description: 'Patange Store is an customised e-commerce platform for specific store while is bundled as a web application for users and sellers for goods and services.'
    // },
    {
        name: 'Pokedex',
        longname: 'Pokedex - Mems Sharing Platforom',
        infoco: 'Design & development',
        status: 'Completed',
        imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-digital-natives-illustration_23-2151197121.jpg',
        published: 'June 24',
        link: 'https://github.com/sumeethibare/pokedex',
        live: 'https://github.com/sumeethibare/pokedex/releases/download/pokedex/pokedex.apk',
        description: 'pokedex is an experimental social platform to share mems and have fun, its an android application developed for the students of SGI'
    },
    {
        name: 'Nodes',
        longname: 'Nodes - Projects Made Easy',
        infoco: 'Indeation',
        status: 'Ideation',
        imageUrl: 'https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg',
        published: 'upcoming',
        link: '',
        live: '',
        description: 'Project Nodes is in integrated Desktop and webapp where students can smoothly develope and manage their projects with exclusive features that are not yet been implemented till now.'
    },
];

export default function Showcase() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        const modal = document.getElementById('datamodale');
        if (modal) {
            modal.showModal();
            document.body.classList.add('modal-open');
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
        const modal = document.getElementById('datamodale');
        if (modal) {
            modal.close();
            document.body.classList.remove('modal-open');
        }
    };

    const handleBackdropClick = (e) => {
        const modal = document.getElementById('datamodale');
        if (modal && (e.target === e.currentTarget || e.target === modal)) {
            closeModal();
        }
    };

    return (
        <>
            <div id="projects" title="list" className="max-w-6xl mx-auto py-20 grid lg:grid-cols-2 lg:gap-y-20 gap-y-4 lg:gap-x-10 px-2">
                {showcase.map((work, index) => (
                    <div key={index}>
                        {work.imageUrl && (
                            <div className="carda hover:shadow-2xl hover:shadow-blue-200 duration-500 hover:duration-300 lg:hover:rounded-xl lg:hover:scale-105 transition-all">
                                <figure>
                                    <img className="imga flex-none" src={work.imageUrl} alt={work.name} />
                                </figure>
                                <div className="p-4 py-6">
                                    <a onClick={() => openModal(work)} className="cursor-pointer text-3xl lg:text-5xl leading-6 group-hover:font-bold">{work.name}</a>
                                    <hr className="h-1 mt-4" />
                                    <div className="flex justify-between items-center">
                                        {work.published && (
                                            <p className="mt-1 lg:text-md text-sm text-zinc-800">
                                                <time>{work.published}</time>
                                            </p>
                                        )}
                                        {work.infoco && (
                                            <p className="lg:text-md text-sm text-zinc-800 py-4">{work.infoco}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className="flex items-center gap-x-4 p-6">
                    <span className="loading loading-spinner loading-xs"></span> <p>more projects on the way</p>
                </div>
            </div>

            <dialog id="datamodale" className="modal">
                {selectedProject && (
                    <div className="modal-box w-11/12 max-w-5xl rounded-xl max-h-full lg:p-10">
                        <div>
                            <div className="flex justify-between">
                                <div>
                                    {selectedProject.longname && (
                                        <h3 className="text-3xl lg:text-5xl tracking-tight group-hover:font-bold">{selectedProject.longname}</h3>
                                    )}
                                    {selectedProject.status && (
                                        <ul className="menu bg-base-200 lg:menu-horizontal rounded-2xl my-4 flex flex-row">
                                            <li>
                                                <a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    {selectedProject.status}
                                                </a>
                                            </li>
                                            {selectedProject.link && (
                                                <li>
                                                    <a href={selectedProject.link}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                                        </svg>
                                                        GitHub
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    )}
                                </div>
                                <div>
                                    {selectedProject.live && (
                                        <a href={selectedProject.live} className="btn btn-circle lg:hover:btn-lg hover:duration-5000 duration-500 transition-all hover:text-emerald-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="py-4 max-w-3xl">
                            <div className="text-2xl flex gap-3 items-center tracking-tight font-[500] text-zinc-950 mb-4">About this Project
                            </div>

                            {selectedProject.description && (
                                <p>{selectedProject.description}</p>
                            )}
                        </div>
                    </div>
                )}
                <div className="modal-backdrop" onClick={handleBackdropClick}></div>
            </dialog>
        </>
    );
}
