import { CodeIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

const Skills = () => {
    return (
        <section id="skills">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <ChipIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
                Skills &amp; Technologies
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              From Python to JavaScript, Docker to AWS, this section showcases all of the languages and tools I&apos;ve worked with. Here, you&apos;ll find the core of my coding competence and the building blocks I use to turn my ideas into reality.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-4 m-2 rounded-lg shadow-md hover:shadow-xl"
            >
              <div className="flex items-center mb-2">
                <CodeIcon className="w-6 h-6 text-green-500 mr-2" />
                <h2 className="text-white text-lg font-medium">{skill}</h2>
              </div>
            </div>
          ))}
            </div>
          </div>
        </section>
      );
}

export default Skills;