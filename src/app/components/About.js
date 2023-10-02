import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <section className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I&apos;m Ben.
            <br className="hidden lg:inline-block" />I Imagine and then I Build
            Things
          </h1>
          <p className="mb-8 leading-relaxed">
            Over a decade in technology sales? Probably not the first skillset
            you think of when talking about software development, but think
            about the soft skills! How about insatiable drive to understand how the
            technologies and concepts I&apos;m surrounded with actually work?
            You bet. A few years back I realized something as my career in tech
            progressed; I love building. There&apos;s just something about
            turning a spark of an idea into a full-blown application that lights
            me up. It wasn&apos;t enough to simply be selling ideas that others
            turned into things. I wanted to make them too!
          </p>
          <p className="mb-8 leading-relaxed">
            Between balancing a full-time gig, chasing around two energetic
            boys, and somehow finding time to pursue a degree, I recently ended
            up getting a Computer Science degree from Southern New Hampshire
            University and graduating summa cum laude. I take a lot of pride in
            that work ethic!
          </p>
          <p className="mb-8 leading-relaxed">
            This portfolio website is my playground. It&apos;s purpose is to
            show off the projects that I&apos;ve built from scratch in what free
            time I have available to express my love for development and to make
            a career change from selling software to making software. It&apos;s
            proof that I don&apos;t just code - I imagine, I design, and most
            importantly, I create. Sure, my sales background gave me some great
            soft skills, but developing and creating are what get me
            fired up!
          </p>
          <p className="mb-8 leading-relaxed">
            So go ahead, take a look around. See something you like? Want to
            create something awesome together? Feel free to reach out!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
          </div>
        </section>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="It's a pic of me in a suit looking very professional. I'm also very comfortable in a t-shirt!"
            src="/portrait-verrill.jpeg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
