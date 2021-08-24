import Key from "../Key/Key";
import "./ToggleWindow.css";

function ToggleWindow(props) {
  return (
    <div className="ToggleWindow">
      <div>
        <Key value="7" />
        <Key value="8" />
        <Key value="9" />
        <Key value="DEL" cls="blue" />
        <Key value="4" />
        <Key value="5" />
        <Key value="6" />
        <Key value="+" operation="addition" />
        <Key value="1" />
        <Key value="2" />
        <Key value="3" />
        <Key value="-" operation="subtraction" />
        <Key value="." />
        <Key value="0" />
        <Key value="/" operation="division" />
        <Key value="×" operation="multiplication" />
      </div>
      <div>
        <Key value="RESET" cls="blue" />
        <Key value="=" cls="red" />
      </div>
    </div>
  );
}

export default ToggleWindow;
