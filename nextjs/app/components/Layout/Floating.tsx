import Image from "next/image";
import { Mindful, Positive, Support, Progress } from "../svgs";


const FloatingBot = () => {
  return (
    <div
      className="flex
        lg:flex-row flex-col lg:px-32 md:px-20 gap-16 px-7 py-20
        items-start justify-between"
    >
      <Image
        src="/images/Chat bot.gif"
        alt="Picture of a robot"
        width={500}
        height={500}
        unoptimized={true}
      />
      <div className="flex flex-col gap-4">
        <h4 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-neutral-700 font-bold">
          Emotional Well-being Support System
        </h4>
        <p className="text-neutral-500" style={{ lineHeight: "1.5rem" }}>
          Harness the power of emotions for personalized growth. EmoticareAI
          empowers users to define their emotional goals and creates
          personalized roadmaps to achieve them effectively.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-row gap-3 items-center">
            <span className="p-2 bg-[#306E88]">
              <Mindful color="white" className="w-6 h-6 text-neutral-100" />
            </span>
            <p className="text-sm text-neutral-500">
              Create a supportive community where users can share their
              emotional experiences and support each other.
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <span className="p-2 bg-[#306E88]">
              <Support color="white" className="w-6 h-6 text-neutral-100" />
            </span>
            <p className="text-sm text-neutral-500">
              Provide mindfulness exercises and techniques to help users manage
              stress and increase emotional awareness
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <span className="p-2 bg-[#306E88]">
              <Progress color="white" className="w-6 h-6 text-neutral-100" />
            </span>
            <p className="text-sm text-neutral-500">
              Enable users to monitor their emotional growth and progress
              towards their emotional goals.
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <span className="p-2 bg-[#306E88]">
              <Positive color="white" className="w-6 h-6 text-neutral-100" />
            </span>
            <p className="text-sm text-neutral-500">
              Share daily positive affirmations to promote a positive mindset
              and emotional well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBot;
