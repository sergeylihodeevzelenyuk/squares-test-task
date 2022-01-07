import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { statusActions } from "../../store/status-slice";

import classes from "./Cell.module.css";

const Cell = (props) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const isModeChanged = useSelector((state) => state.mode.isModeChanged);

  useEffect(() => {
    setActive(false);
  }, [isModeChanged]);

  const id = `${props.rowIndex}${props.cellIndex}`;

  const onActiveHandler = () => {
    setActive((currentActiveStatus) => !currentActiveStatus);

    if (active) {
      dispatch(
        statusActions.removeMark({
          id,
        })
      );
    } else {
      dispatch(
        statusActions.addMark({
          rowIndex: props.rowIndex,
          cellIndex: props.cellIndex,
          id,
        })
      );
    }
  };

  let classList = classes.cell;

  if (active) {
    classList = `${classes.cell} ${classes.active}`;
  }

  return (
    <span
      onMouseEnter={onActiveHandler}
      onClick={onActiveHandler}
      className={classList}
    ></span>
  );
};

export default Cell;
