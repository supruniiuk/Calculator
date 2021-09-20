import React from "react";
import "./App.css";
import ResultWindow from "./components/Result window/ResultWindow";
import ToggleWindow from "./components/Toggle window/ToggleWindow";
import { connect } from "react-redux";
import { setTheme } from "./store/actions/actions";

function App(props) {
  const classes = ["App"];
  classes.push(props.theme);
  return (
    <div className={classes.join(" ")}>
      <div className="theme">
        <h1>calc</h1>
        <section>
          <h5>theme</h5>
          <select onClick={(e) => props.setTheme(e.target.value)}>
            <option value="blue-theme">1</option>
            <option value="white-theme">2</option>
            <option value="purple-theme">3</option>
          </select>
        </section>
      </div>

      <ResultWindow />
      <ToggleWindow />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.calculator.theme,
    input: state.calculator.input,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (value) => dispatch(setTheme(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
