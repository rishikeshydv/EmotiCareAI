"use client";
import { Chatbot } from "../svgs";

const Prof = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:px-32 md:px-20 gap-16 px-7 py-0 items-center justify-between bg-[#EAF2F6]">
      <Chatbot className="lg:w-[900px] lg:h-[900px] md:w-[600px] md:h-[600px] w-[250px] h-[250px]" />
      <div className="shadow-xl py-5 px-4 flex flex-col gap-5 items-center justify-center bg-neutral-100">
        <div className="flex flex-row gap-4 items-start justify-center ">
          <span className="p-3 font-bold text-xl bg-[#306E88] text-[#EAF2F6]">
            01
          </span>
          <div className="flex flex-col gap-5 ">
            <h4 className="font-semibold text-neutral-800 text-xl">
              Emotion Coaching
            </h4>
            <p className="text-neutral-500" style={{ lineHeight: "1.5rem" }}>
              This term highlights the app's capability to provide coaching or
              guidance related to emotions. It implies that the app assists
              users in understanding and managing their emotions effectively.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start justify-center ">
          <span className="p-3 font-bold text-xl bg-[#306E88] text-[#EAF2F6]">
            02
          </span>
          <div className="flex flex-col gap-5 ">
            <h4 className="font-semibold text-neutral-800 text-xl">
              Mood Tracking and Support
            </h4>
            <p className="text-neutral-500" style={{ lineHeight: "1.5rem" }}>
              This term implies that the app allows users to track their moods
              and offers support or assistance based on the tracked data
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start justify-center ">
          <span className="p-3 font-bold text-xl bg-[#306E88] text-[#EAF2F6]">
            03
          </span>
          <div className="flex flex-col gap-5 ">
            <h4 className="font-semibold text-neutral-800 text-xl">
              Emotional Awareness Tools
            </h4>
            <p className="text-neutral-500" style={{ lineHeight: "1.5rem" }}>
              Using "Emotional Awareness Tools" conveys that the app provides
              resources and tools to help users become more aware of their
              emotions and how to manage them effectively
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof;
