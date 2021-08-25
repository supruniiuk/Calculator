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
        <Key value="+" operation="+" />
        <Key value="1" />
        <Key value="2" />
        <Key value="3" />
        <Key value="-" operation="-" />
        <Key value="." />
        <Key value="0" />
        <Key value="/" operation="/" />
        <Key value="×" operation="×" />
      </div>
      <div>
        <Key value="RESET" cls="blue" />
        <Key value="=" cls="red" />
      </div>
    </div>
  );
}

export default ToggleWindow;
