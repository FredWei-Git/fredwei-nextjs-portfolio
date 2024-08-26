import React from 'react';

const skills = ["Java", "Kotlin", "Python", "Go", "JavaScript", "HTML/CSS", "Bootstrap", "React", "SQL",
    "MongoDB", "Jira", "Git", "Android Studio", "Node JS"];

const AboutSection = () => {
    return (
        <section id="about">
            <h1 className="my-10 text-4xl font-bold text-center">
                About
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="px-8 py-3">
                <span className="font-semibold text-teal-800">
                    Education
                </span>
                <br />
                University of Ottawa
                <br />
                Bachelor of Applied Science - BASc, Software Engineering
            </div>
            <div className="px-8 py-3">
                <span className="font-semibold text-teal-800">
                    Skills
                </span>
                <ul className="list-disc list-inside">
                    {skills.map((skill, techIndex) => (
                        <li key={techIndex} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;