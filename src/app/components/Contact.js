import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex justify-center">
        <div className="flex flex-col items-center">
          <a href="mailto:benverrill88@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mx-auto inline-block w-10 mb-4"
              size="2x"
            />
          </a>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            Let&apos;s Collaborate!
          </h1>
          <div className="bg-white flex flex-col items-start">
            <p className="text-gray-900 text-2xl font-medium text-left">
              Ben Verrill
            </p>
            <p className="text-gray-900 leading-relaxed text-left">
              <a
                href="mailto:benverrill88@gmail.com"
                className="hover:text-blue-500 hover:underline"
              >
                bverrill88@gmail.com
              </a>
            </p>
            <p className="text-gray-900 leading-relaxed text-left">
              Hooksett, NH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
