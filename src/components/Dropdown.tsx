import { FC, useState } from "react";
import { UnmountClosed } from "react-collapse";
import { ReactComponent as CaretRight } from "../assets/caret-right-fill.svg";
import { ReactComponent as CaretDown } from "../assets/caret-down-fill.svg";
import Button from "./Button";

const DropdownMenu: FC<{ label: string }> = ({ children, label }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className={`dropdown-trigger ${open ? "open" : "closed"}`}
        onClick={() => setOpen(!open)}
        type="button"
      >
        {open ? (
          <CaretDown className="inline-block mr-3" />
        ) : (
          <CaretRight className="inline-block mr-3" />
        )}
        {label}
      </Button>
      <UnmountClosed isOpened={open}>{children}</UnmountClosed>
    </>
  );
};

export default DropdownMenu;
