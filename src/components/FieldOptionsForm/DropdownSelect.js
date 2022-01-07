import React, { useState } from "react";
import { useSelector } from "react-redux";

import Input from "./Input";
import ArrowIcon from "../../icons/ArrowIcon";

import classes from "./DropdownSelect.module.css";

const DropdownSelect = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const modes = useSelector((state) => state.mode.modes);

  const onSelectClickHandler = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const buttonClassList = !isDropDownOpen
    ? classes.button
    : `${classes.button} ${classes.active}`;

  const iconClassList = !isDropDownOpen
    ? classes.arrow
    : `${classes.arrow} ${classes.active}`;

  const optionsContent = isDropDownOpen && (
    <fieldset className={classes.options}>
      {modes.map((mode) => {
        return (
          <Input
            key={mode.modeName}
            name={mode.modeName}
            field={mode.field}
            onInputChange={props.onInputChange}
            setIsOpen={setIsDropDownOpen}
            isChecked={mode.isChecked}
          />
        );
      })}
    </fieldset>
  );

  return (
    <div className={classes.select}>
      <button
        type="button"
        onClick={onSelectClickHandler}
        className={buttonClassList}
      >
        Pick mode
        <ArrowIcon className={iconClassList} />
      </button>
      {optionsContent}
    </div>
  );
};

export default DropdownSelect;
