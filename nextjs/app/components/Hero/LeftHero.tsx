"use client";
import { Neural } from "../svgs";
import { useInView } from "react-intersection-observer";



const LeftHero = () => {

    const { ref: topRef, inView: topRefIsVisible } = useInView();
    const { ref: middleRef, inView: middleRefRefIsVisible } = useInView();
    const { ref: bottomRef, inView: bottomRefIsVisible } = useInView();

    return (
      <div className="flex flex-col items-start justify-center gap-5">
        <div className="flex flex-row gap-2 items-center">
          <Neural className="w-8 h-8" />
          <h6 className="font-semibold text-sm text-neutral-100">
            AI-powered Emotional Wellness App
          </h6>
        </div>
        <h3
          ref={middleRef}
          className={`font-bold lg:text-5xl text-neutral-100 md:text-4xl sm:text-3xl text-2xl
        ${
          middleRefRefIsVisible ? "opacity-100" : "-translate-x-14 opacity-0"
        } duration-1000 transition`}
        >
          AI-powered Mental Health Support
        </h3>
        <p
          className={`lg:text-lg text-neutral-200
          ${
            bottomRefIsVisible ? "opacity-100" : "translate-y-14 opacity-0"
          } duration-1000 transition`}
          style={{ lineHeight: "1.7rem" }}
          ref={bottomRef}
        >
          AI-powered Mental Health Support, is a cutting-edge platform designed
          to provide personalized and empathetic assistance for individuals
          seeking mental health care and emotional well-being. Harnessing the
          power of artificial intelligence and advanced algorithms, our
          innovative solution offers a compassionate virtual companion,
          available 24/7, to guide users through their emotional challenges and
          foster a healthier mind
        </p>
        <button
          className="text-neutral-100 duration-700 transition hover:border-purple-100 
        font-semibold border-[2px] border-neutral-100 py-2 px-4"
          style={{ borderWidth: "1px" }}
          onClick={() => {}}
        >
          Experience Empathy
        </button>
      </div>
    );
}

export default LeftHero;