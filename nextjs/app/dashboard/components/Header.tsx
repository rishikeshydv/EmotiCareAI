"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSidebarStore } from "@/app/store/sidebarStore";
import { useRouter, usePathname } from "next/navigation";


const Header = () => {
    const { setOpen, isOpen } = useSidebarStore();
    const pathname = usePathname();

    return (
      <div className="flex flex-row items-center justify-between px-4 py-5 shadow-lg top-0 w-full">
        <div className="flex flex-row gap-3 items-center">
          <span 
          onClick={() => setOpen(!isOpen)}
          className="rounded-lg bg-neutral-300 p-2 cursor-pointer">
            <GiHamburgerMenu color="#0c1c23" size={25} />
          </span>
          <h3 className="text-lg font-semibold">
            {
              pathname === "/dashboard/chat" ? "Journal" : pathname === "/dashboard/video" ? "Video" : "Chat"
            }
          </h3>
        </div>
      </div>
    );
}

export default Header;