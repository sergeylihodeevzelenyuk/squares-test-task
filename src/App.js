import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchModedata } from "./store/mode-actions";
import { useSelector } from "react-redux";

import FieldOptionsForm from "./components/FieldOptionsForm/FieldOptionsForm";
import Field from "./components/Field/Field";
import StatusBar from "./components/StatusBar/StatusBar";
import LoadingIndicator from "./components/UI/LoadingIndicator";
import Cart from "./components/UI/Cart";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const loadingIsvisible = useSelector((state) => state.ui.loadingIsvisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchModedata());
  }, [dispatch]);

  let content = <Field />;

  if (!loadingIsvisible) {
    content = (
      <Cart>
        <LoadingIndicator />
      </Cart>
    );
  }

  if (notification) {
    content = (
      <Cart>
        <p>{notification.message}!</p>
      </Cart>
    );
  }

  return (
    <main className="main">
      <div className="field-wrap">
        <FieldOptionsForm />
        {content}
      </div>
      <StatusBar />
    </main>
  );
}

export default App;
