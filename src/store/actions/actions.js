import { DEL, ENTER, RESET, REMEMBER, EQUAL } from "./actionTypes";

export function type(value) {
  return {
    type: ENTER,
    value,
  };
}

export function del() {
  return {
    type: DEL,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function save(act) {
  return {
    type: REMEMBER,
    act,
  };
}

export function equal() {
  return {
    type: EQUAL,
  };
}
