import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeroSection = () => {
    return (
        <section id="hero">
            <div className="content-center p-8 mt-4 mb-6 text-lg bg-green-200 md:text-2xl">
                Hi, I'm Fred!
                I'm a
                <span className="font-semibold text-teal-800">
                    {" "}Software Engineer{" "}
                </span>
                based in Toronto, ON.
                <br />
                I'm passionate about crafting elegant solutions to complex problems and turning innovative ideas into reality.
                Feel free to explore my portfolio and connect with me!
                I'm always excited to collaborate and discuss new opportunities.
                <div className="flex gap-5 p-3">
                    <a href="https://www.linkedin.com/in/fredwei2001/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin size={50} />
                    </a>
                    <a href="https://github.com/fredwei-git" target="_blank" rel="noopener noreferrer">
                        <BsGithub size={50} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;