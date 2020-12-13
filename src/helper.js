export let myFunction;
export let myCloseFunction;

export function addMyFunction(callback) {
  myFunction = callback;
}

export function addMyCloseFunction(callback) {
  myCloseFunction = callback;
}
