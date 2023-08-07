"use client";
import { Emotion, NLU, Sentiment } from "../svgs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const HomeCards = () => {
  const { ref: topRef, inView: topRefInView } = useInView();
  const { ref: middleRef, inView: middleRefInView } = useInView();
  const { ref: bottomRef, inView: bottomRefInView } = useInView();

  return (
    <div className="flex lg:flex-row flex-wrap lg:px-32 md:px-20 gap-16 px-7 py-20 items-center justify-center ">
      <div
        ref={topRef}
        className={`flex basis-[300px] flex-col gap-4 py-6 px-5 border-[#306E88] border-[4px] h-[400px]
      ${
        topRefInView ? "opacity-100" : "translate-y-20 opacity-0"
      } duration-1000 transition-all`}
      >
        <NLU className="w-14 h-14" />
        <h4 className="text-neutral-700 text-lg">
          Natural Language Understanding (NLU)
        </h4>
        <p className="text-neutral-500 w-[300px]">
          NLU involves the application of machine learning and AI to understand
          and interpret human language. If the app's language processing
          capabilities go beyond just sentiment analysis, NLU could be a
          relevant term to use.
        </p>
        <span className="hover:translate-x-5 cursor-pointer duration-700 transition-all">
          <FaLongArrowAltRight size={30} color="#306E88" />
        </span>
      </div>
      <div
        ref={middleRef}
        className={`flex basis-[300px] flex-col gap-4 py-6 px-5 border-[#306E88] border-[4px] h-[400px]
      ${
        middleRefInView ? "opacity-100" : "translate-y-20 opacity-0"
      } duration-1000 transition-all`}
      >
        <Emotion className="w-14 h-14" />
        <h4 className="text-neutral-700 text-lg">Emotion Recognition</h4>
        <p className="text-neutral-500 w-[300px]">
          Emotion recognition is the process of identifying emotions expressed
          in various forms, such as text, speech, or facial expressions. If the
          app's primary purpose is to recognize emotions in textual content,
          this term could be a good fit.
        </p>
        <span className="hover:translate-x-5 cursor-pointer duration-700 transition-all">
          <FaLongArrowAltRight size={30} color="#306E88" />
        </span>
      </div>
      <div
        ref={bottomRef}
        className={`flex basis-[300px] flex-col gap-4 py-6 px-5 border-[#306E88] border-[4px] h-[400px]
      ${
        bottomRefInView ? "opacity-100" : "translate-y-20 opacity-0"
      } duration-1000 transition-all`}
      >
        <Sentiment className="w-14 h-14" />
        <h4 className="text-neutral-700 text-lg">Sentiment Analysis:</h4>
        <p className="text-neutral-500 w-[300px]">
          Sentiment analysis involves analyzing text to determine the sentiment
          or emotion expressed in it. In the context of the emoticare.ai app,
          this term may be more relevant as it directly relates to the app's
          goal of understanding and responding to emotions
        </p>
        <span className="hover:translate-x-5 cursor-pointer duration-700 transition-all">
          <FaLongArrowAltRight size={30} color="#306E88" />
        </span>
      </div>
    </div>
  );
};

export default HomeCards;
