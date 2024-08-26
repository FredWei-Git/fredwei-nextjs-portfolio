import React from "react";

const experience = [
    {
        company: "Cisco",
        jobTitle: "Software Engineer Intern",
        location: "Ottawa, ON",
        date: "May 2023 – Sept 2023",
        description: "Routing team in SD-WAN department.",
        technologies: ["Python", "JavaScript", "jQuery (DataTables plug-in)", "Bootstrap"],
    },
    {
        company: "FISPAN",
        jobTitle: "Software Developer Intern",
        location: "Vancouver, BC",
        date: "May 2022 – Aug 2022",
        description: "ERP Team",
        technologies: ["Spring Boot (Kotlin, Java)", "React", "MongoDB", "Kotest"],
    },
    {
        company: "Canadian Bank Note Company, Limited",
        jobTitle: "Software Developer Intern",
        location: "Ottawa, ON",
        date: "Sept 2021 – Dec 2021",
        description: "ERP Team",
        technologies: ["Spring Boot (Kotlin, Java)", "Android Studio"],
    },
    {
        company: "Department of National Defence",
        jobTitle: "Software Engineer Intern",
        location: "Ottawa, ON",
        date: "Jan 2021 – Apr 2021",
        description: "ERP Team",
        technologies: ["Unity", "C#"],
    },
    {
        company: "HCE",
        jobTitle: "Web Developer Intern",
        location: "Toronto, ON",
        date: "June 2020 – Sept 2020",
        description: "ERP Team",
        technologies: ["Wix", "HTML", "CSS"],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience">
            <h1 className="my-10 text-4xl font-bold text-center">
                Experience
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="grid gap-6 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {experience.map((experience, index) => (
                    <div key={index} className="max-w-sm p-4 my-4 bg-green-200 border rounded shadow-lg">
                        <h2 className="text-xl font-bold">{experience.company}</h2>
                        <p className="font-semibold text-gray-700 text-md">{experience.jobTitle}</p>
                        <p className="text-sm text-gray-500">{experience.location}</p>
                        <p className="text-sm text-gray-500">{experience.date}</p>
                        <div>
                            <h3 className="text-sm font-semibold">Technologies</h3>
                            <ul className="list-disc list-inside">
                                {experience.technologies.map((tech, techIndex) => (
                                    <li key={techIndex} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;