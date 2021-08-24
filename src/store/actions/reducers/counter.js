import { DEL, ENTER, RESET, REMEMBER, EQUAL } from "../actionTypes";

let mainState = {
  input: "",
  status: false,
  remember: 0,
  action: "",
};

export default function counter(state = mainState, action) {
  switch (action.type) {
    case ENTER:
      if (
        action.value !== "." &&
        (state.input === "0" || state.input === ".")
      ) {
        return {
          ...state,
          input: action.value,
        };
      }

      if (action.value === "." && state.input.includes(".")) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        input: state.input + action.value,
      };

    case DEL:
      return {
        ...state,
        input: state.input.slice(0, -1),
      };

    case RESET:
      return {
        ...state,
        input: "",
        status: false,
        remember: 0,
        action: "",
      };

    case REMEMBER:
      return {
        ...state,
        remember: +state.input,
        action: action.act,
        input: "",
        status: true,
      };

    case EQUAL:
      let answer = 0;
      if (state.status === true) {
        switch (state.action) {
          case "+":
            answer = state.remember + +state.input;
            break;
          case "-":
            answer = state.remember - +state.input;
            break;
          case "/":
            answer = state.remember / +state.input;
            break;
          case "×":
            answer = state.remember * +state.input;
            break;
          default:
            break;
        }

        return {
          ...state,
          input: `${answer}`,
        };
      }

    default:
      break;
  }
  return state;
}
