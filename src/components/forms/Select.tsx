import * as React from "react";

interface IProps {
  placeholder: string;
  item: { value: string; icon: string }[];
}
export function SelectEl(props: IProps) {
  const { placeholder = "Select element" } = props;
  return (
    <></>
  );
}
