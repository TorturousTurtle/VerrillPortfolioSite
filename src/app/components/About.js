import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I&apos;m Ben.
            <br className="hidden lg:inline-block" />I think and I Build Things
          </h1>
          <p className="mb-8 leading-relaxed">
            Over a decade in technology sales? Check. Constant drive to be
            better and continue learning? You bet. But despite the work I was
            doing, a few years back I realized something. I love building.
            There&apos;s just something about turning a spark of an idea into a
            full-blown application that lights me up. It wasn’t enough to simply
            be selling ideas that others turned into things. I wanted to make
            them too!
          </p>
          <p className="mb-8 leading-relaxed">
            Between balancing a full-time gig, chasing around two energetic
            boys, and somehow finding time to pursue a degree, I recently ended
            up getting a Computer Science degree from Southern New Hampshire
            University and graduating summa cum laude. Not too shabby, right?
          </p>
          <p className="mb-8 leading-relaxed">
            Now, I built this portfolio website as my playground. It&apos;s
            where I can show off the projects that I&apos;ve built from scratch
            in the little free time I have available. It&apos;s proof that I
            don&apos;t just code - I think, I design, and most importantly, I
            create. Sure, my sales background gave me some great soft skills.
            But developing and creating? That&apos;s what gets me fired up.
          </p>
          <p className="mb-8 leading-relaxed">
            So go ahead, take a look around. See something you like? Want to
            create something awesome together? Feel free to reach out.
            Can&apos;t wait to see what we&apos;re going to build next.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
          </div>
        </div>
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
