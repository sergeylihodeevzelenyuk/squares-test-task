import { useSelector } from "react-redux";

import Cell from "./Cell";

import classes from "./Row.module.css";

const Row = (props) => {
  const cellsAmount = useSelector((state) => +state.mode.field);

  const initialState = new Array(cellsAmount).fill(null);

  return (
    <div className={classes.row}>
      {initialState.map((item, i) => (
        <Cell key={++i} rowIndex={props.rowIndex} cellIndex={++i} />
      ))}
    </div>
  );
};

export default Row;
