import HeaderMobile from "./HeaderMobile";
import { motion } from "framer-motion";
import { Button, CustomSelect } from "../forms";

import Link from "next/link";
import Image from "next/image";
import { navigationLinks as nav } from "@/utils/statics";
import { SelectData } from "@/utils/types";
import { Fragment } from "react";

const selectData: SelectData[] = [
  { label: "Help Center", icon: "/svg/help.svg" },
  { label: "iOS", icon: "/svg/apple.svg" },
  { label: "Android", icon: "/svg/android.svg" },
];
export default function Header() {
  return (
    <Fragment>
      <div>
        <HeaderMobile />
      </div>
      <div className=" px-10 py-6 md:block hidden bg-white w-full">
        <div className="flex justify-between text-black font-bold  text-20  ">
          <div className="">
            <motion.div
              whileHover={{
                backgroundColor: "#0000000d",
                padding: "11px 15px",

                transition: { duration: 0.1, ease: "linear", stiffness: 200 },
              }} // Increase the scale on hover
              className="absolute  rounded-full py-[9px] px-[19px] "
            >
              <Link className="" href={nav.faq.link}>
                {" "}
                {nav.faq.title}
              </Link>
            </motion.div>

            <div className="flex space-x-7">
              <motion.div
                whileHover={{
                  backgroundColor: "#0000000d",
                  padding: "11px 17px",

                  transition: { duration: 0.1, ease: "linear", stiffness: 200 },
                }} // Increase the scale on hover
                className="absolute  left-[7.5%]  rounded-full py-[9px] px-[19px] "
              >
                {" "}
                <Link href={nav.wall.link} className="flex">
                  {nav.wall.title}
                  <span className="pl-1">
                    <Image
                      className="mt-1"
                      src={nav.wall.icon}
                      alt="wall of love"
                      width={16}
                      height={15}
                    />
                  </span>
                </Link>
              </motion.div>

              <Link href="/">
                <CustomSelect title="Resources" data={selectData} />
              </Link>
            </div>
          </div>

          <Link href={nav.logo.link}>
            <Image src={nav.logo.icon} alt="logo" height={30} width={175} />
          </Link>

          <div className="flex space-x-3 font-extrabold">
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
                  className="bg-white px-4 py-6  rounded-full  text-black hover:bg-offwhite font-extrabold  text-[15px]"
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
                  title={nav.register.title}
                  className="bg-yellow px-4 py-6 rounded-full hover:bg-yellow hover:opacity-[0.8]  text-[15px] text-black font-semibold"
                ></Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
