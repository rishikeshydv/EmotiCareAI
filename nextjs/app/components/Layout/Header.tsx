"use client";
import { Logo } from "../svgs";
import NavLinks from "./NavLinks";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname.includes("/dashboard")) return null;

  return (
    <div className="lg:px-32 md:px-20 px-7 flex flex-row items-center justify-between py-8 top-0 ">
      <div className="flex flex-row gap-2">
        <Logo className="text-[#306E88] h-9 w-9" />
        <h4 className="lg:text-2xl md:text-xl text-lg font-bold text-[#306E88]">
          Emoticare AI
        </h4>
      </div>
      <NavLinks />
      <button
        className="text-[#306E88] duration-700 transition border-[#306E88]
        font-semibold border-[4px] py-2 px-4"
        onClick={() => router.push("/auth/signup")}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Header;
