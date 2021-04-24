import { FC, useState } from "react";
import Collapsible from "react-collapsible";
import { ReactComponent as CaretRight } from "../assets/caret-right-fill.svg";
import { ReactComponent as CaretDown } from "../assets/caret-down-fill.svg";

type Props = {
  label: string;
};

const DropdownMenu: FC<Props> = ({ children, label }) => {
  const [open, setOpen] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpening={() => setShowChildren(true)}
      onClose={() => setShowChildren(false)}
      transitionTime={300}
      handleTriggerClick={() => setOpen(!open)}
      triggerTagName="button"
      trigger={
        <>
          {open ? (
            <CaretDown className="inline-block mr-3" />
          ) : (
            <CaretRight className="inline-block mr-3" />
          )}
          {label}
        </>
      }
    >
      {showChildren && children}
    </Collapsible>
  );
};

export default DropdownMenu;
