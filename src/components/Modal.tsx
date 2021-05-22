import { FC, ReactNode, useEffect } from "react";
import ReactModal from "react-modal";
import { ReactComponent as CloseBtn } from "../assets/x-lg.svg";

ReactModal.setAppElement("#root");

type ModalProps = {
  isOpen: boolean;
  contentLabel?: string;
  header?: ReactNode;
  overlayRef?: (instance: HTMLDivElement) => void;
  contentRef?: (instance: HTMLDivElement) => void;
  onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  children,
  contentLabel,
  header,
  overlayRef,
  contentRef,
  onRequestClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ReactModal
      contentLabel={contentLabel}
      isOpen={isOpen}
      overlayRef={overlayRef}
      contentRef={contentRef}
      onRequestClose={onRequestClose}
      overlayClassName="MyModal__Overlay"
      className="MyModal__Content"
      closeTimeoutMS={250}
    >
      <div className="flex MyModal__Header relative">
        {header}
        <button className="MyModal__Close my-auto" onClick={onRequestClose}>
          <CloseBtn title="Close This Modal" />
        </button>
      </div>
      <div className="relative MyModal__Body overflow-y-auto flex-auto">
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
