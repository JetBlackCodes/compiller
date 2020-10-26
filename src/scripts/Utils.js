export function DeleteWhiteSpaces(code) {
  return code.replace(/\s/g, "");
}

export function isLetter(code) {
  return code.length === 1 && /[a-z]/i.test(code);
}

export function isDigit(code) {
  return code.length === 1 && /\d/.test(code);
}
