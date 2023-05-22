"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true after a short delay
  // to trigger the animation
  setTimeout(() => {
    setIsMounted(true);
  }, 1000);

  return (
    <main className="text-gray-400 bg-white body-font">
      <Transition
        show={isMounted}
        enter="transition-transform duration-500 delay-500"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition-transform duration-500"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div>
          <Navbar />
        </div>
      </Transition>
      <Transition
        show={isMounted}
        enter="transition-all duration-1000 delay-5000"
        enterFrom="opacity-0 translate-y-2/3"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-10000"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1/2"
      >
        <div>
          <About />
        </div>
      </Transition>
      <Transition
        show={isMounted}
        enter="transition-transform duration-500 delay-500"
        enterFrom="translate-y-1/2"
        enterTo="translate-y-0"
        leave="transition-transform duration-500"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-1/2"
      >
        <div>
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </Transition>
    </main>
  );
};

export default App;
