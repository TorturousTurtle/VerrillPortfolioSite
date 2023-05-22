import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const LineBounce = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: [100, 0] }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        repeat: Infinity,
        repeatDelay: 5.0,
        delay: delay,
      }}
    >
      <motion.span>{children}</motion.span>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex justify-center">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mx-auto inline-block w-10 mb-4"
            size="2x"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            Let&apos;s Collaborate!
          </h1>
          <div className="bg-white flex flex-col items-start">
            <p className="text-gray-900 text-2xl font-medium text-left">
              <LineBounce delay={0}>Ben Verrill</LineBounce>
            </p>
            <p className="text-gray-900 leading-relaxed text-left">
              <a
                href="mailto:bverrill88@gmail.com"
                className="hover:text-blue-500 hover:underline"
              >
                <LineBounce delay={0.5}>bverrill88@gmail.com</LineBounce>
              </a>
            </p>
            <p className="text-gray-900 leading-relaxed text-left">
              <a
                href="tel:6036610129"
                className="hover:text-blue-500 hover:underline"
              >
                <LineBounce delay={1}>603.661.0129</LineBounce>
              </a>
            </p>
            <p className="text-gray-900 leading-relaxed text-left">
              <LineBounce delay={1.5}>Hooksett, NH</LineBounce>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
