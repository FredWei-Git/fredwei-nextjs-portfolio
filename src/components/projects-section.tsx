import React from "react";
import Link from "next/link";

const projects = [
    {
        name: "Personal Website",
        description: "My portfolio is available in two versions: " +
            "a modern Next.js version (current and updated) hosted on Vercel " +
            "and a classic HTML/CSS/JavaScript version hosted on GitHub Pages.",
        image: "",
        links: [
            {
                url: "https://github.com/FredWei-Git/fredwei-nextjs-portfolio",
                text: "Next.js Ver. GitHub",
            },
            {
                url: "https://fredwei.vercel.app/",
                text: "Next.js Ver. Website",
            },
            {
                url: "https://github.com/FredWei-Git/fredwei-git.github.io",
                text: "Classic Ver. GitHub",
            },
            {
                url: "https://fredwei-git.github.io/",
                text: "Classic Ver. Website",
            },
        ],
        technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    },
    {
        name: "Umple: Python Generation Features",
        description: "Implemented features enabling Umple to generate executable Python code " +
            "representing Umple concurrency.",
        image: "",
        links: [
            {
                url: "https://cruise.umple.org/umple/Python.html",
                text: "Umple Python Documentation",
            },
        ],
        technologies: ["Java", "Python", "TXL", "Umple"],
    },
    {
        name: "ChefSwipe",
        description:
            "ChefSwipe is an Android application for browsing recipes from an free online API.",
        image: "",
        links: [
            {
                url: "https://github.com/FredWei-Git/ChefSwipe",
                text: "GitHub",
            },
        ],
        technologies: ["Java", "Android Studio", "Firebase"],
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="my-10 text-4xl font-bold text-center">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="grid gap-6 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="max-w-sm p-4 my-4 bg-green-200 border rounded shadow-lg">
                        <h2 className="text-xl font-bold">{project.name}</h2>
                        <p className="text-sm text-gray-500">{project.description}</p>
                        <h3 className="text-sm font-semibold">Links</h3>
                        <ul className="list-disc list-inside">
                            {project.links.map((link, linkIndex) => (
                                <Link key={linkIndex} href={link.url} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{link.text}</Link>
                            ))}
                        </ul>
                        <h3 className="text-sm font-semibold">Technologies</h3>
                        <ul className="list-disc list-inside">
                            {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;