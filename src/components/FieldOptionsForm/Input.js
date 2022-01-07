import { useRef } from "react";

import toSeparateString from "../../helpers/toSeparateString";
import CheckedIcon from "../../icons/CheckedIcon";

import classes from "./Input.module.css";

const Input = (props) => {
  const inputeRef = useRef();

  const name = toSeparateString(props.name);

  const onInputeChange = () => {
    props.onInputChange(+inputeRef.current.value, inputeRef.current.id);
    props.setIsOpen(false);
  };

  return (
    <div className={classes.control}>
      <label htmlFor={props.name}>{name}</label>
      <input
        type="radio"
        value={props.field}
        name="mode"
        id={props.name}
        ref={inputeRef}
        onChange={onInputeChange}
      />
      {props.isChecked && <CheckedIcon />}
    </div>
  );
};

export default Input;
