import { useSelector, useDispatch } from "react-redux";

import { modeActions } from "../../store/mode-slise";
import { statusActions } from "../../store/status-slice";

import DropdownSelect from "./DropdownSelect";
import Button from "../UI/Button";

import classes from "./FieldOptionsForm.module.css";

let enteredField;
let inputId;

const FieldOptionsForm = () => {
  const dispatch = useDispatch();
  const isModeChanged = useSelector((state) => state.mode.isModeChanged);
  const stateField = useSelector((state) => state.mode.field);

  const onInputChangeHandler = (value, id) => {
    enteredField = value;
    inputId = id;
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    if (stateField !== enteredField && enteredField && !isModeChanged) {
      dispatch(modeActions.setField(enteredField));
      dispatch(modeActions.toggleIsModeChanged(true));
      dispatch(modeActions.updateModes(inputId));
      dispatch(statusActions.resetMarks());
    }
  };

  return (
    <form onSubmit={onFormSubmitHandler} className={classes.form}>
      <DropdownSelect onInputChange={onInputChangeHandler} />
      <Button />
    </form>
  );
};

export default FieldOptionsForm;
