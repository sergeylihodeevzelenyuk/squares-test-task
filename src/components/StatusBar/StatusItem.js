const StatusItem = (props) => {
  return (
    <p className={props.className}>
      row <span>{props.data.rowIndex}</span> col{" "}
      <span>{props.data.cellIndex}</span>
    </p>
  );
};

export default StatusItem;
