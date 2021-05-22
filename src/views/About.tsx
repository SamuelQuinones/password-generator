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
        header={<h2 className="text-center w-full">About This App</h2>}
      >
        <p>Eventually a short summary will go here</p>
      </Modal>
    </div>
  );
};

export default AboutModal;
