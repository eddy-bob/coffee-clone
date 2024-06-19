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
    <div className="relative md:hidden block height-full">
      <RenderIf condition={showSideNav}>
        <div className="absolute left-0 right-0 height-full bg-white font-semibold text-[20px] z-50  p-5">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                easings: ["easeIn", "easeInOut"],
                duration: 0.1,
              },
            }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <button
                  onClick={() => setShowSideNav(false)}
                  className="bg-transparent border-none outline-none text-xl pb-3"
                >
                  X
                </button>
              </div>
              <Link href={nav.wall.link}>{nav.faq.title}</Link>

              <Link href={nav.wall.link} className="flex">
                {nav.wall.title}
                <span className="pl-1 mt-2 ">
                  <Image
                    src={nav.wall.icon}
                    alt="wall of love"
                    width={17}
                    height={17}
                  />
                </span>
              </Link>
              <Link href="/" className="pt-3">
                Help Center
              </Link>
              <Link href="/" className="flex">
                <span className="pr-2 mt-1 ">
                  <Image
                    src="/svg/apple.svg"
                    alt="apple"
                    width={24}
                    height={24}
                  />
                </span>
                iOS
              </Link>
              <Link href="/" className="flex">
                <span className="pr-2 mt-1">
                  <Image
                    src="/svg/android.svg"
                    alt="android"
                    width={24}
                    height={24}
                  />
                </span>
                Android
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
                  className="bg-yellow px-4 py-6 rounded-full hover:bg-yellow hover:opacity-[0.8]  text-[15px] text-[#0000000] font-bold"
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
