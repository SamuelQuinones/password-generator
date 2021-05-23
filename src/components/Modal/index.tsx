import { FC } from "react";
import ReactModal from "react-modal";
import { ReactComponent as CloseBtn } from "../../assets/x-lg.svg";
import { ModalProps, useMaintainScrollbarWidth } from "./Helper";

ReactModal.setAppElement("#root");

const Modal: FC<ModalProps> = ({
  isOpen,
  children,
  contentLabel,
  header,
  overlayRef,
  contentRef,
  onRequestClose,
}) => {
  useMaintainScrollbarWidth(isOpen);

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
