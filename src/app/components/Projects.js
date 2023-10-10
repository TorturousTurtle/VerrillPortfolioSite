"use client";
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="mx-auto inline-block w-10 mb-4"
            size="2x"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Ready to dive into the digital deep end? Check out my handcrafted
            software projects. Each one&apos;s a testament to my love for
            design, coding, and most of all, building. Enjoy the tour!
          </p>
        </div>
        <Carousel
          showArrows
          showIndicators
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          className="carousel"
          renderIndicator={(clickHandler, isSelected, index) => (
            <button
              className={`indicator ${isSelected ? "active" : ""}`}
              onClick={clickHandler}
              key={index}
            />
          )}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full p-4">
              <a href={project.link} className="flex flex-col items-center">
                <h1 className="title-font text-4xl font-bold text-gray-900 mb-3 text-center">
                  {project.title}
                </h1>
                <div className="relative flex justify-center w-full p-4 space-x-4">
                  {project.image.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="w-1/3 flex justify-center items-center my-4 shadow-lg"
                    >
                      <Image
                        className="object-cover object-center rounded"
                        alt={project.alt}
                        src={image}
                        width={150}
                        height={150}
                      />
                    </div>
                  ))}
                </div>
                <div className="project-info">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                </div>
              </a>
              <div className="flex">
                {project.description.length > 100 ? (
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 pr-2">
                      <p
                        className="leading-relaxed text-left"
                        dangerouslySetInnerHTML={{
                          __html: project.description.slice(
                            0,
                            project.description.lastIndexOf(
                              " ",
                              project.description.length / 2
                            )
                          ),
                        }}
                      ></p>
                    </div>
                    <div className="w-full md:w-1/2 pl-2">
                      <p
                        className="leading-relaxed text-left"
                        dangerouslySetInnerHTML={{
                          __html: project.description.slice(
                            project.description.lastIndexOf(
                              " ",
                              project.description.length / 2
                            )
                          ),
                        }}
                      ></p>
                    </div>
                  </div>
                ) : (
                  <p
                    className="leading-relaxed text-left"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
