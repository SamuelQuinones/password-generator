import { FC, useState } from "react";
import Modal from "components/Modal";
//* Translation
import { useTranslation, Trans } from "react-i18next";

const AboutModal: FC = () => {
  const relTarget = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  //* Core
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  //* Translation
  const { t } = useTranslation("about");
  return (
    <div>
      <button className="MyModal__Trigger" onClick={toggleModal}>
        {t("click_trigger")}
      </button>
      <Modal
        contentLabel={t("modal_title")}
        onRequestClose={toggleModal}
        isOpen={modalOpen}
        header={<h2 className="text-center w-full">{t("modal_title")}</h2>}
      >
        <p className="mb-4">{t("p_1")}</p>
        <p className="mb-4">{t("p_2")}</p>
        <p className="mb-4">
          <Trans
            ns="about"
            i18nKey="p_3"
            components={{
              a: (
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a
                  href="https://github.com/SamuelQuinones/password-generator"
                  {...relTarget}
                />
              ),
            }}
          />
        </p>

        <p className="mb-8">
          <Trans
            ns="about"
            i18nKey="p_4"
            components={{
              a: (
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a
                  href="https://www.instagram.com/em_enchanted_emporium/"
                  {...relTarget}
                />
              ),
            }}
          />
        </p>
        {/* General Info */}
        <h2 className="mb-4">
          <em>{t("general_info")}</em>
        </h2>
        <p className="mb-4">
          <Trans ns="about" i18nKey="p_5" />
        </p>
        <p className="mb-3">{t("p_6")}</p>
        <ul className="mb-4 list-disc list-inside">
          {t("i_learned", { returnObjects: true }).map((_, index) => (
            <li className="list-item mb-1" key={index}>
              <Trans
                ns="about"
                //@ts-ignore this key WILL exist
                i18nKey={`i_learned.${index}`}
              />
            </li>
          ))}
        </ul>
        <p className="mb-4">{t("p_7")}</p>
        <p className="mb-4">{t("p_8")}</p>
        <p className="mb-8">{t("p_9")}</p>
        {/* How It works */}
        <h2 className="mb-4">
          <em>{t("how_it_works")}</em>
        </h2>
        <p className="mb-4">More info coming soon...</p>
      </Modal>
    </div>
  );
};

export default AboutModal;
