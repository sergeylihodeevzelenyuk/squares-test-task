import { modeActions } from "./mode-slise";
import { uiActions } from "./ui-slice";

export const fetchModedata = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      const response = await fetch("https://demo1030918.mockable.io/");
      const modeData = await response.json();

      return modeData;
    };

    try {
      const modeData = await fetchdata();

      dispatch(modeActions.setModes(modeData));
      dispatch(modeActions.setInitialField());
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          message: error.message,
        })
      );
    } finally {
      dispatch(uiActions.toggle());
    }
  };
};
