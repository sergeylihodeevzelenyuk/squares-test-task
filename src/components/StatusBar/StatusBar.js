import { useSelector } from "react-redux";

import StatusItem from "./StatusItem";

import classes from "./StatusBar.module.css";

const StatusBar = () => {
  const selectedCells = useSelector((state) => state.status.marks);

  let content = (
    <p className={classes["status-item"]}>There is no hovered squares</p>
  );

  if (selectedCells.length > 0) {
    content = selectedCells.map((item, i) => (
      <StatusItem data={item} key={++i} className={classes["status-item"]} />
    ));
  }

  return (
    <div className={classes["status-bar"]}>
      <h1>Hover squares</h1>
      <section className={classes["status-info"]}>{content}</section>
    </div>
  );
};

export default StatusBar;
