import { connect } from "react-redux";
import { del, type, reset, save, equal } from "../../store/actions/actions";
import "./Key.css";

function Key(props) {
  const inputClasses = ["Key"];
  console.log(props);
  if (props.cls === "red") {
    inputClasses.push("red");
  } else if (props.cls === "blue") {
    inputClasses.push("blue");
  } else {
    inputClasses.push("white");
  }

  return (
    <button
      onClick={() =>
        !props.cls && !props.operation
          ? props.type(props.value)
          : props.value === "DEL"
          ? props.del()
          : props.value === "RESET"
          ? props.reset()
          : props.operation
          ? props.save(props.value)
          : props.value === "="
          ? props.equal()
          : ""
      }
      className={inputClasses.join(" ")}
    >
      {props.value}
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.input,
    status: state.counter.status,
    remember: state.counter.remember,
    action: state.counter.action,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    type: (value) => dispatch(type(value)),
    del: () => dispatch(del()),
    reset: () => dispatch(reset()),
    save: (action) => dispatch(save(action)),
    equal: () => dispatch(equal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Key);
