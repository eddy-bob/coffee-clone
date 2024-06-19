import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../forms";
import RenderIf from "./RenderIf";
import Link from "next/link";
import Image from "next/image";
import { navigationLinks as nav } from "@/utils/statics";

export default function Header() {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div className="relative md:hidden block">
      <RenderIf condition={showSideNav}>
        <div className="absolute left-0 bg-white height-[100vh] z-50 width-[100vw] p-4">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <button
                onClick={() => setShowSideNav(false)}
                className="bg-transparent border-none outline-none text-xl"
              >
                X
              </button>
              <Link href={nav.wall.link}>{nav.faq.title}</Link>

              <Link href={nav.wall.link} className="flex">
                {nav.wall.title}
                <span className="pl-1">
                  <Image
                    src={nav.wall.icon}
                    alt="wall of love"
                    width={16}
                    height={15}
                  />
                </span>
              </Link>
              <Link href="/">Help Center</Link>
              <Link href="/" className="flex">
                iOS
                <span className="pl-1">
                  <Image
                    src="/svg/apple.svg"
                    alt="apple"
                    width={16}
                    height={15}
                  />
                </span>
              </Link>
              <Link href="/" className="flex">
                Android
                <span className="pl-1">
                  <Image
                    src="/svg/android.svg"
                    alt="android"
                    width={16}
                    height={15}
                  />
                </span>
              </Link>
            </div>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={nav.register.link}>
                <Button
                  title="Start my page"
                  className="bg-yellow px-4 py-6 rounded-full hover:bg-yellow hover:opacity-[0.8]  text-[15px] text-black font-semibold"
                ></Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </RenderIf>

      <div className=" px-2 py-3 bg-white w-full">
        <div className="flex justify-between text-black font-bold ">
          <div className="space-x-2 flex">
            <button type="button" onClick={() => setShowSideNav(!showSideNav)}>
              <Image
                src="/svg/hambugger.svg"
                alt="menu"
                width={15}
                height={15}
              />
            </button>
            <div>
              <Image
                className="mt-1"
                src="/svg/logo-mobile.svg"
                alt="logo"
                width={23}
                height={23}
              />
            </div>
          </div>

          <div className="flex font-extrabold">
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={nav.login.link}>
                <Button
                  title={nav.login.title}
                  className="bg-white    rounded-full  text-black hover:bg-offwhite font-bold px-[16px] text-[13px]"
                ></Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={nav.register.link}>
                <Button
                  title="Start my page"
                  className="bg-yellow text-[#000000] text-[13px] hover:opacity-[0.8]   font-bold px-[16px]    rounded-full hover:bg-yellow"
                ></Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
