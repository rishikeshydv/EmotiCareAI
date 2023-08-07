"use client";
import { useRouter } from "next/navigation";
import { Logo } from "@/app/components/svgs";
import { motion } from "framer-motion";
import { useSidebarStore } from "@/app/store/sidebarStore";
import { IoCloseSharp } from "react-icons/io5";

const SideBar = () => {
  const router = useRouter();
  const { isOpen, setOpen } = useSidebarStore();

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: isOpen ? 0 : -1000 }}
      transition={{ duration: 0.5 }}
      className="flex-col gap-6 bg-[#0c1c23] h-screen fixed top-0 left-0 z-50 shadow-lg px-5"
    >
      <div className="flex flex-col items-center justify-between py-16 px-4 gap-5">
        <span
          className="w-full flex justify-end cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <IoCloseSharp size={23} color="white" />
        </span>
        <div className="flex flex-row gap-2 mb-5">
          <Logo className="text-[#306E88] h-7 w-7" />
          <h4 className="lg:text-xl md:text-lg text-lg font-semibold text-[#fff]">
            Emoticare
          </h4>
        </div>
        <span
          onClick={() => router.push("/dashboard/chat")}
          className="w-full text-lg cursor-pointer  text-neutral-200 hover:text-[#306E88] transition duration-300"
        >
          Chat
        </span>
        <span
          onClick={() => router.push("/dashboard/video")}
          className="w-full text-lg cursor-pointer  text-neutral-200 hover:text-[#306E88] transition duration-300"
        >
          Video
        </span>
        <span
          onClick={() => router.push("/dashboard/journal")}
        className="w-full text-lg cursor-pointer  text-neutral-200 hover:text-[#306E88] transition duration-300">
          Journal
        </span>
      </div>
    </motion.div>
  );
};

export default SideBar;
