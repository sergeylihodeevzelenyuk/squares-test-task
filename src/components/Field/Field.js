import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Row from "./Row";
import { modeActions } from "../../store/mode-slise";

import classes from "./Field.module.css";

const Field = () => {
  const dispatch = useDispatch();
  const rowsAmount = useSelector((state) => +state.mode.field);

  const initialState = new Array(rowsAmount).fill(null);
  const cellSize = `${300 / rowsAmount}px`;

  document.documentElement.style.setProperty("--custom-width", cellSize);
  document.documentElement.style.setProperty("--custom-height", cellSize);

  useEffect(() => {
    dispatch(modeActions.toggleIsModeChanged(false));
  }, [dispatch, rowsAmount]);

  return (
    <div className={classes.field}>
      {initialState.map((item, i) => (
        <Row key={++i} rowIndex={++i} />
      ))}
    </div>
  );
};

export default Field;
