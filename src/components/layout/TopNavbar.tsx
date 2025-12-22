"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaSearch,
  FaFacebookMessenger,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

import logo from "../../../public/logo/logo.png";
import home from "../../../public/icon/home.png";
import marketplace from "../../../public/icon/maketplace.png";
import group from "../../../public/icon/group.png";
import gaming from "../../../public/icon/gamming.png";
import Button from "../ui/Button";
import { CgMenuGridO } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";

const navigation = [
  { name: "Home", href: "#", icon: home, active: true },
  { name: "Marketplace", href: "#", icon: marketplace },
  { name: "Groups", href: "#", icon: group },
  { name: "Gaming", href: "#", icon: gaming },
];

type IconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const IconButton = ({ children, onClick }: IconButtonProps) => (
  <button
    onClick={onClick}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
  >
    {children}
  </button>
);

export default function TopNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
      <div className="flex h-14 items-center px-3 lg:px-4">
        {/* LEFT */}
        <div className="flex items-center gap-2 w-1/2 lg:w-[320px]">
          <Image src={logo} alt="Facebook" width={40} height={40} priority />

          {/* Mobile Search Icon */}
          <div className="lg:hidden">
            <IconButton>
              <FaSearch size={20} />
            </IconButton>
          </div>

          {/* Desktop Search */}
          <div className="relative hidden lg:block w-full">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              placeholder="Search Facebook"
              className="w-full rounded-full bg-gray-100 pl-10 pr-4 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* CENTER (Desktop only) */}
        <nav className="flex-1 hidden lg:flex justify-center">
          <ul className="flex gap-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-center w-28 h-14 transition ${
                    item.active
                      ? "border-b-[3px] border-blue-600"
                      : "hover:bg-gray-100 rounded-lg"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={26}
                    height={26}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-2 w-1/2 lg:w-[320px] justify-end">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <IconButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaBars size={18} />
            </IconButton>
          </div>
          <Button className="bg-gray-200 rounded-full" >
            <CgMenuGridO size={22} />
          </Button>     
        
          <Button className="bg-gray-200 rounded-full">
            <FaFacebookMessenger size={22} />
          </Button>

          <Button className="bg-gray-200 rounded-full">
            <IoNotifications size={22} />
          </Button >

          <Button className="bg-gray-200 rounded-full">
            <FaUserCircle size={22} className="text-gray-500" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-white shadow-md">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
