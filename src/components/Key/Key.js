import "./Key.css";

function Key(props) {
  const inputClasses = ["Key"];

  if (props.cls == "red") {
    inputClasses.push("red");
  } else if (props.cls == "blue") {
    inputClasses.push("blue");
  } else {
    inputClasses.push("white");
  }

  return <button className={inputClasses.join(" ")}>{props.value}</button>;
}

export default Key;
