"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components";
import Image from "next/image";
import { Header } from "@/components";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Link from "next/link";
import ANIMATION from "@/utils/framer-motion";

export default function Home() {
  const [bgColor, setBgColor] = useState("white");
  const [transateCardX, setTranslateCardX] = useState(0);

  const handleScroll = () => {
    const scrollPosition = scrollY;

    if (scrollPosition > 10) {
      setBgColor("#0000000d");
    } else {
      setBgColor("white");
    }

    if (!scrollPosition) return;
    if (scrollPosition === 0) {
      setTranslateCardX(0);
      return;
    }
    setTranslateCardX(-(scrollPosition - 7));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Header />

      <div
        className="relative py-16 text-center text-black h-[1400px] overflow-x-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute w-full top-5 left-0  md:block sm:block lg:block hidden z-50">
          <div className="w-full flex  justify-between  ">
            <motion.div
              animate={{
                x: transateCardX,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                initial={{ x: 10, rotate: 1, opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    duration: 0.4,
                    ease: "easeIn",
                  },
                }}
              >
                <Link href="single-card/id">
                  <Image
                    className="shadow-lg rounded-[25px]"
                    src="/png/card-1.png"
                    alt="card"
                    width={190}
                    height={190}
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ rotate: -3, x: 100, opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.6,
                    ease: "easeIn",
                  },
                }}
              >
                <Link href="single-card/id">
                  <Image
                    src="/png/card-2.png"
                    className="shadow-lg rounded-[25px]"
                    alt="card"
                    width={190}
                    height={190}
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ rotate: 10, x: -2, y: 30, opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                    duration: 0.8,
                    ease: "easeIn",
                  },
                }}
              >
                <Link href="single-card/id">
                  <Image
                    src="/png/card-3.png"
                    className="shadow-lg rounded-[25px]"
                    alt="card"
                    width={190}
                    height={190}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                x: -transateCardX,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <motion.div
                initial={{ rotate: 14, x: -140, opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1.3,
                    duration: 0.1,
                    ease: "easeIn",
                  },
                }}
              >
                <Link href="single-card/id">
                  <Image
                    className="shadow-lg rounded-[25px]"
                    src="/png/card-4.png"
                    alt="card"
                    width={190}
                    height={190}
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ rotate: 9, y: 19, opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1.0,
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
              >
                <Link href="single-card/id">
                  <Image
                    src="/png/card-5.png"
                    className="shadow-lg rounded-[25px]"
                    alt="card"
                    width={190}
                    height={190}
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ rotate: -2, y: 19, x: -120, opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    duration: 0.3,
                    ease: "easeIn",
                  },
                }}
                className="shadow-lg"
              >
                <Link href="single-card/id">
                  <Image
                    src="/png/card-6.png"
                    className="rounded-lg"
                    alt="card"
                    width={190}
                    height={190}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="space-x-1 flex">
            {Array.from([1, 2, 3, 4, 5]).map((data, index) => {
              return (
                <img
                  key={index}
                  src="/svg/star.svg"
                  alt="star"
                  className="lg:h-[24px] lg:w-[24px] md:h-[24px] md:w-[24px] h-[16px] w-[16px]"
                />
              );
            })}
          </div>
          <p className=" lg:text-18 md:text-18 text-[12px] text-[#000000]">
            Loved by 1,000,000+ creators
          </p>
        </div>
        <div className="text-center   md:pt-16  pt-3 space-y-2">
          <p className="font-bold ]    md:text-[90px]  text-[45px]  leading-[58px]   md:leading-[90px]">
            Fund your <br />
            creative work
          </p>
          <p className="text-light md:text-[20px] text-[17px]   md:px-0 px-7 ">
            Accept support. Start a membership. Setup a shop. It’s easier
            <br /> than you think.
          </p>
        </div>

        <div className="w-full flex justify-center ">
          <div className="space-y-4">
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                title="Start my page"
                className="bg-yellow text-[#000000] md:text-[20px] text-[15px] md:mt-12 mt-6 hover:opacity-[0.8]  font-extrabold px-[41px] md:px-[58px] md:py-9  py-6 rounded-full hover:bg-yellow"
              />
            </motion.div>
            <p className="md:text-18 text-[16px]">
              It’s free and takes less than a minute!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
