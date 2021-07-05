import { FC, useState } from "react";
import Modal from "components/Modal";
//* Translation
import { Trans, useTranslation } from "react-i18next";

const SecurityModal: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  //* Translation
  const { t } = useTranslation();
  return (
    <div className="inline-block">
      <button className="MyModal__Trigger" onClick={toggleModal}>
        {t("security.click_trigger")}
      </button>
      <Modal
        wipeUrlHash
        contentLabel={t("security.content_label")}
        onRequestClose={toggleModal}
        isOpen={modalOpen}
        header={
          <h2 className="text-center w-full">{t("security.modal_title")}</h2>
        }
      >
        <p className="mb-4">{t("security.p_1")}</p>
        <p className="mb-4">
          <Trans
            i18nKey="security.p_2"
            components={{
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              a: <a href="#settings" />,
            }}
          />
        </p>
        <p className="mb-4">{t("security.p_3")}</p>
        <p className="mb-4">
          <Trans
            i18nKey="security.p_4"
            components={{
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              a: <a href="#settings" />,
            }}
          />
        </p>
        <p className="mb-4">
          <Trans i18nKey="security.p_5" />
        </p>
        <p className="mb-4">
          <Trans i18nKey="security.p_6" />
        </p>
        <p className="mb-4">
          <Trans
            i18nKey="security.p_7"
            components={{
              u: <u style={{ overflowWrap: "break-word" }} />,
            }}
          />
        </p>
        <p className="mb-4">
          <Trans i18nKey="security.p_8" />
        </p>
        <p className="mb-8">{t("security.p_9")}</p>
        <h2 id="settings" className="mb-4">
          <em>{t("security.settings")}</em>
        </h2>
        <p>{t("security.clarify")}</p>
      </Modal>
    </div>
  );
};

export default SecurityModal;
