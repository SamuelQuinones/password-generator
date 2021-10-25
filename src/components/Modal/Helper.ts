import {
  ReactNode,
  MouseEvent as ReactMouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
} from "react";
import {
  getWidth,
  resetElementStyles,
  setElementStyles,
} from "util/dom-helper";

export type ModalProps = {
  isOpen: boolean;
  contentLabel?: string;
  header?: ReactNode;
  wipeUrlHash?: boolean;
  overlayRef?: (instance: HTMLDivElement) => void;
  contentRef?: (instance: HTMLDivElement) => void;
  onRequestClose?: (event: ReactMouseEvent | ReactKeyboardEvent) => void;
};

/** Used to find items that are fixed and positioned to the right */
const FixedRightSelector = "[class*='right-'].fixed";

const removeOverlayStyles = () => {
  document.body.style.overflow = "";
  resetElementStyles("body", "paddingRight");
  resetElementStyles(FixedRightSelector, "paddingRight");
};

const addOverlayStyles = (scrollBarDif: number) => {
  document.body.style.overflow = "hidden";
  if (scrollBarDif > 0) {
    setElementStyles("body", "paddingRight", (calc) => calc + scrollBarDif);
    setElementStyles(
      FixedRightSelector,
      "paddingRight",
      (calc) => calc + scrollBarDif
    );
  }
};

export const useMaintainScrollbarWidth = (isOpen: boolean) => {
  useEffect(() => {
    const PR = getWidth();

    if (isOpen) {
      addOverlayStyles(PR);
    } else {
      removeOverlayStyles();
    }
    return () => {
      removeOverlayStyles();
    };
  }, [isOpen]);
};
