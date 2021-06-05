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
        <p className="mb-4">
          With the click of a button you can generate complex, secure, near
          impossible to guess passwords!
        </p>
        <p className="mb-4">
          For notes about security, please close this modal, scroll to the
          bottom and follow the instructions to open the security modal.
        </p>
        <p className="mb-8">
          For information about contributing to this project, please visit{" "}
          <a
            href="https://github.com/SamuelQuinones/password-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            the project's GitHub
          </a>{" "}
          and view <strong>CONTRIBUTING.md</strong>
        </p>
        {/* General Info */}
        <h2 className="mb-4">
          <em>General Info</em>
        </h2>
        <p className="mb-8">More info coming soon...</p>
        {/* How It works */}
        <h2 className="mb-4">
          <em>How It Works</em>
        </h2>
        <p className="mb-4">More info coming soon...</p>
      </Modal>
    </div>
  );
};

export default AboutModal;
