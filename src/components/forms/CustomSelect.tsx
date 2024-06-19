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
    <div className="relative">
      <motion.div
        whileHover={{
          transition: {
            ease: "easeIn",
          },
        }}
        className=" hover:bg-offwhite rounded-[20px]  "
      >
        <div className="flex " onClick={() => setIsOpen(!isOpen)}>
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
      </motion.div>
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
    </div>
  );
}
