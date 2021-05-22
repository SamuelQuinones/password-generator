import { FC } from "react";
import ReactModal from "react-modal";
import { ReactComponent as CloseBtn } from "../assets/x-lg.svg";

ReactModal.setAppElement("#root");

type ModalProps = {
  isOpen: boolean;
  contentLabel?: string;
  overlayRef?: (instance: HTMLDivElement) => void;
  contentRef?: (instance: HTMLDivElement) => void;
  onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  children,
  contentLabel,
  overlayRef,
  contentRef,
  onRequestClose,
}) => {
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
      <>
        <button className="MyModal__Close" onClick={onRequestClose}>
          <CloseBtn title="Close This Modal" />
        </button>
        {children}
      </>
    </ReactModal>
  );
};

export default Modal;
