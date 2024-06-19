import React from "react";

import { Button } from "../ui/button";

interface IProps {
  title: string;
  type?: "button" | "reset" | "submit";
  className?: string;
}
export default function CustomButton(props: IProps) {
  const { title, className, type = "button" } = props;
  return (
    <Button type={type} className={className}>
      {title}
    </Button>
  );
}
