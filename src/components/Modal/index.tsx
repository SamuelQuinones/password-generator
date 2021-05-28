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
  wipeUrlHash = false,
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
        <button
          className="MyModal__Close my-auto"
          onClick={(e) => {
            onRequestClose && onRequestClose(e);
            wipeUrlHash && window.history.replaceState(null, "", " ");
          }}
        >
          <CloseBtn title="Close This Modal" height={18} width={18} />
        </button>
      </div>
      <div className="MyModal__Body relative overflow-y-auto flex-auto">
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
