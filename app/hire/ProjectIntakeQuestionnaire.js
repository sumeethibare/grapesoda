"use client";
import { useEffect } from 'react';

const ProjectIntakeQuestionnaire = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{ height: '100vh', margin: '0', overflow: 'hidden' }}>
            <iframe
                src="https://tally.so/r/w5k6OQ?transparentBackground=1"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                    margin: 0,
                }}
                title="Project Intake Questionnaire"
            ></iframe>
        </div>
    );
};

export default ProjectIntakeQuestionnaire;
