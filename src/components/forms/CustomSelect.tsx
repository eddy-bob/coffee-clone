import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { RenderIf } from "../shared";
import Image from "next/image";
import { SelectData } from "@/utils/types";
interface IProps {
  title: string;
  className?: string;
  data: SelectData[];
}
export default function CustomButton(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, className, data } = props;
  return (
    <motion.div
      whileHover={{
        backgroundColor: "#0000000d",
        transition: { duration: 0.4, ease: "easeIn" },
      }} // Increase the scale on hover
      className="relative  rounded-full py-[9px] px-[19px] "
    >
      <div>
        <div
          className="flex justify-center "
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="">{title}</p>
          <Image
            alt="pointer"
            src={
              isOpen === true ? "/svg/pointer-up.svg" : "/svg/pointer-down.svg"
            }
            height={20}
            width={20}
          />
        </div>
      </div>
      <RenderIf condition={isOpen}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1.03,
            transition: {
              ease: "easeIn",
            },
          }}
          className="bg-white rounded-xl  border p-4 absolute top-[43px]  space-y-2 left-[-8px] shadow-md z-[9999] w-48 font-light font-serif"
        >
          {data.map((content, index) => {
            return (
              <div
                key={index}
                className="flex hover:bg-offwhite rounded-md px-2 d-flex space-x-1 text-[15px] py-2"
              >
                <Image alt="icon" src={content.icon} width={24} height={24} />
                <p>{content.label}</p>
              </div>
            );
          })}
        </motion.div>
      </RenderIf>
    </motion.div>
  );
}
