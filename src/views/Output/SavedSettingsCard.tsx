//* Core
import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "components/Card";
import Button from "components/Button";
import { unSaveFormValues } from "views/Form/Helper";

//* REDUX
import { useAppDispatch } from "store/hooks";
import { userActions } from "store/userSlice";
import { useRenderOnMount } from "util/render-on-mount";

const SavedSettingsCard: FC<{ visible: boolean }> = ({ visible }) => {
  //* Core
  const divRef = useRef<HTMLDivElement>(null);
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  const mounted = useRenderOnMount();

  //* REDUX
  const dispatch = useAppDispatch();

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
            <h3>Using Saved Settings</h3>
            <Button
              className="ml-1 w-24 lg:w-48"
              onClick={() => {
                dispatch(userActions.setSettingsSaved(false));
                unSaveFormValues();
              }}
            >
              Reset
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
