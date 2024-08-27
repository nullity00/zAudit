import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

function Button({ text }: { text: string }) {
  return (
    <button className="px-6 py-3 rounded-xl text-sm text-zinc-400 hover:text-violet hover:bg-white hover:bg-opacity-5 duration-700">
      {text}
    </button>
  );
}

export function Navbar({ menuOpen, setMenuOpen }: Props) {
  return (
    <div className="w-full flex h-18 items-center justify-between top-0 p-6">
      <div className="flex flex-row gap-4 text-violet items-center text-xl lg:ml-36">
        <Link to={"/"}>
          <img src="/logo.svg" className="h-10" />
        </Link>
      </div>
      <button
        className="px-8 py-3 rounded-xl lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuOutlined />
      </button>
      <div className="flex flex-row items-center gap-1 sm:hidden md:hidden lg:mr-[8vw]">
        <Link to={"/members"}>
          <Button text={"Members"} />
        </Link>
        <a href="https://reports.yacademy.dev/" target="_blank">
          <Button text={"Reports"} />
        </a>
        <a href="https://proxies.yacademy.dev/" target="_blank">
          <Button text={"Research"} />
        </a>
        <Link to={"/fellowships"}>
          <Button text={"Fellowships"} />
        </Link>
        <Link to={"/contact-us"}>
          <button className="px-8 py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-violet to-blue hover:from-white hover:text-violet duration-700">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

interface MobileProps {
  setMenuOpen: (menuOpen: boolean) => void;
}

export function MobileNavbar({ setMenuOpen }: MobileProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        true &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, setMenuOpen]);
  return (
    <div className="w-full h-full z-40 duration-700" ref={inputRef}>
      <div className="mt-8 mx-auto flex flex-col p-8 gap-2">
        <button
          onClick={() => {
            setMenuOpen(false);
          }}
          className="text-green-400"
        >
          <CloseCircleOutlined style={{ fontSize: "2rem" }} />
        </button>
        <Link to={"/members"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-violet hover:bg-white hover:bg-opacity-5 duration-700"
          >
            Members
          </button>
        </Link>
        <a href="https://reports.yacademy.dev/">
          <button className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-violet hover:bg-blue hover:bg-opacity-5 duration-700">
            Reports
          </button>
        </a>
        <a href="https://proxies.yacademy.dev/">
          <button className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-violet hover:bg-blue hover:bg-opacity-5 duration-700">
            Proxies Research
          </button>
        </a>
        <a href="https://blog.yacademy.dev/">
          <button className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-violet hover:bg-blue hover:bg-opacity-5 duration-700">
            Blog
          </button>
        </a>

        <Link to={"/fellowships"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-violet hover:bg-blue hover:bg-opacity-5 duration-700"
          >
            Fellowships
          </button>
        </Link>

        <Link to={"/zBlock1"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-violet hover:bg-blue hover:bg-opacity-5 duration-700"
          >
            zBlock1
          </button>
        </Link>
        <Link to={"/zBlock2"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-violet hover:bg-blue hover:bg-opacity-5 duration-700"
          >
            zBlock2
          </button>
        </Link>

        <Link to={"/contact-us"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 rounded-xl w-full text-xl text-violet text-bold hover:bg-blue hover:bg-opacity-5 duration-700"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
