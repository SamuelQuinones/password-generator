import { FC, useState } from "react";
import { UnmountClosed } from "react-collapse";
import Button from "./Button";
import { CaretDown, CaretRight } from "./SVG-Icons";

const DropdownMenu: FC<{ label: string }> = ({ children, label }) => {
  const [open, setOpen] = useState(false);

  //* to be called onRest
  // const scrollToBottom = (condition: boolean) => {
  //   condition &&
  //     window.scrollTo({
  //       top: document.body.scrollHeight,
  //       behavior: "smooth",
  //     });
  // };

  return (
    <>
      <Button
        className={`dropdown-trigger w-full ${open ? "open" : "closed"}`}
        onClick={() => setOpen(!open)}
        type="button"
      >
        {open ? <CaretDown /> : <CaretRight />}
        <span className="ml-3">{label}</span>
      </Button>
      <UnmountClosed isOpened={open}>{children}</UnmountClosed>
    </>
  );
};

export default DropdownMenu;
