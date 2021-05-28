import {
  ReactNode,
  MouseEvent as ReactMouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
} from "react";

export type ModalProps = {
  isOpen: boolean;
  contentLabel?: string;
  header?: ReactNode;
  wipeUrlHash?: boolean;
  overlayRef?: (instance: HTMLDivElement) => void;
  contentRef?: (instance: HTMLDivElement) => void;
  onRequestClose?: (event: ReactMouseEvent | ReactKeyboardEvent) => void;
};

const removeBodyStyles = (element: HTMLDivElement) => {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  element.style.right = "";
};

const addBodyStyles = (element: HTMLDivElement, scrollBarDif: number) => {
  document.body.style.overflow = "hidden";
  if (scrollBarDif > 0) {
    document.body.style.paddingRight = `${scrollBarDif}px`;
    element.style.right = `calc(0.5rem + ${scrollBarDif}px)`;
  }
};

export const useMaintainScrollbarWidth = (isOpen: boolean) => {
  useEffect(() => {
    const PR = window.innerWidth - document.documentElement.clientWidth;
    const TSM = document.querySelector(
      ".theme-changer-master"
    ) as HTMLDivElement;

    if (isOpen) {
      addBodyStyles(TSM, PR);
    } else {
      removeBodyStyles(TSM);
    }
    return () => removeBodyStyles(TSM);
  }, [isOpen]);
};
