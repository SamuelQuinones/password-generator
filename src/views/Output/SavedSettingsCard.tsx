//* Core
import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "components/Card";
import Button from "components/Button";
import useRenderOnMount from "hooks/useRenderOnMount";
//* Translation
import { useTranslation } from "react-i18next";

type SettingsProps = {
  visible: boolean;
  hideCardFunc: () => any;
};

const SavedSettingsCard: FC<SettingsProps> = ({ visible, hideCardFunc }) => {
  //* Core
  const divRef = useRef<HTMLDivElement>(null);
  const mounted = useRenderOnMount();
  //* Translation
  const { t } = useTranslation();

  return mounted ? (
    <CSSTransition
      nodeRef={divRef}
      in={visible}
      timeout={250}
      classNames="fade"
      unmountOnExit
    >
      <div ref={divRef}>
        <Card>
          <div className="flex justify-between items-center">
            <h3>{t("output.saved_settings_card.heading")}</h3>
            <Button className="ml-1 w-24 lg:w-48" onClick={hideCardFunc}>
              {t("output.saved_settings_card.reset")}
            </Button>
          </div>
        </Card>
      </div>
    </CSSTransition>
  ) : (
    <></>
  );
};

export default SavedSettingsCard;
