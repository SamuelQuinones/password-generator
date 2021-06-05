import { FC, useState } from "react";
import Modal from "components/Modal";

const SecurityModal: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <div className="inline-block">
      <button className="MyModal__Trigger" onClick={toggleModal}>
        here
      </button>
      <Modal
        wipeUrlHash
        contentLabel="Security and This App"
        onRequestClose={toggleModal}
        isOpen={modalOpen}
        header={<h2 className="text-center w-full">About Security</h2>}
      >
        <p className="mb-4">
          Everything about this app happens localized in your browser, on your
          device, during that session.
        </p>
        <p className="mb-4">
          None of passwords generated are transmitted any way. None of the{" "}
          <a href="#settings">settings</a> with which you use to generate
          passwords are transmitted in any way. The color theme you use is not
          transmitted in any way.
        </p>
        <p className="mb-4">
          None of the passwords generated are saved in any way, to the device,
          to the browser, or otherwise.
        </p>
        <p className="mb-4">
          The <a href="#settings">settings</a> you use to generate a password{" "}
          <strong>
            <em>CAN</em>
          </strong>{" "}
          be saved to the browser's <code>localStorage</code>{" "}
          <strong>
            <em>PROVIDED THE USER OPTS IN TO THAT BEHAVIOR</em>
          </strong>{" "}
          and{" "}
          <strong>
            <em>CAN BE RESET / REMOVED AT ANY TIME</em>
          </strong>
        </p>
        <p className="mb-4">
          This app uses different colored themes to make the experience more
          'fun' and customizable. In order to remember the theme chosen by the
          user the value of the theme is stored in the browser's{" "}
          <code>localStorage</code>.
        </p>
        <p className="mb-4">
          This app's code is{" "}
          <strong>
            <em>Open Source</em>
          </strong>
          , meaning it is available for anyone to see, contribute to, and
          somewhat unfortunately directly steal or copy.
        </p>
        <p className="mb-4">
          <strong>
            Please note that the only official version of this app will only
            ever be hosted at <u>passwordgenerator.samtheq.com</u>
          </strong>
        </p>
        <p className="mb-4">
          The above claims only hold true for the{" "}
          <strong>official version</strong> and I can not make the same claims
          for those who steal the code and redistribute it without my knowledge.
        </p>
        <p className="mb-8">
          If you do see that someone is hosting this app on another domain,
          please open an issue and let me know so that it can be dealt with.
        </p>
        <h2 id="settings" className="mb-4">
          <em>Settings</em>
        </h2>
        <p>
          Settings refers to the configurable options on the app; which types of
          characters to include, password length, etc.
        </p>
      </Modal>
    </div>
  );
};

export default SecurityModal;
