"use client";
import { useRouter } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Pages",
    href: "/pages",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const NavLinks = () => {
  const router = useRouter();

  return (
    <div className="flex-row gap-6 lg:flex hidden">
      {links.map((link) => (
        <span
          onClick={() => router.push(link.href)}
          key={link.name}
          className="font-semibold text-[#306E88] pb-1 cursor-pointer
                    border-transparent
                    hover:border-[#306E88] duration-500 transition"
          style={{ borderBottomWidth: "4px" }}
        >
          {link.name}
        </span>
      ))}
    </div>
  );
};

export default NavLinks;
