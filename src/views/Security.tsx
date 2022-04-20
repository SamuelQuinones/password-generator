import { useState } from "react";
import Modal from "components/Modal";
//* Translation
import { Trans, useTranslation } from "react-i18next";

const SecurityModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  //* Translation
  const { t } = useTranslation("security");
  return (
    <>
      <button className="MyModal__Trigger" onClick={toggleModal}>
        {t("click_trigger")}
      </button>
      <Modal
        wipeUrlHash
        contentLabel={t("content_label")}
        onRequestClose={toggleModal}
        isOpen={modalOpen}
        header={<h2 className="w-full text-center">{t("modal_title")}</h2>}
      >
        <p className="mb-4">{t("p_1")}</p>
        <p className="mb-4">
          <Trans
            ns="security"
            i18nKey="p_2"
            components={{
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              a: <a href="#settings" />,
            }}
          />
        </p>
        <p className="mb-4">{t("p_3")}</p>
        <p className="mb-4">
          <Trans
            ns="security"
            i18nKey="p_4"
            components={{
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              a: <a href="#settings" />,
            }}
          />
        </p>
        <p className="mb-4">
          <Trans ns="security" i18nKey="p_5" />
        </p>
        <p className="mb-4">
          <Trans ns="security" i18nKey="p_6" />
        </p>
        <p className="mb-4">
          <Trans
            ns="security"
            i18nKey="p_7"
            components={{
              u: <u style={{ overflowWrap: "break-word" }} />,
            }}
          />
        </p>
        <p className="mb-4">
          <Trans ns="security" i18nKey="p_8" />
        </p>
        <p className="mb-8">{t("p_9")}</p>
        <h2 id="settings" className="mb-4">
          <em>{t("settings")}</em>
        </h2>
        <p>{t("clarify")}</p>
      </Modal>
    </>
  );
};

export default SecurityModal;
