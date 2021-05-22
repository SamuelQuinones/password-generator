import { FC, useState } from "react";
import Modal from "components/Modal";

const AboutModal: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <div>
      <button className="MyModal__Trigger" onClick={toggleModal}>
        About
      </button>
      <Modal
        contentLabel="About This App"
        onRequestClose={toggleModal}
        isOpen={modalOpen}
      >
        <h2 className="text-center">About This App</h2>
      </Modal>
    </div>
  );
};

export default AboutModal;
