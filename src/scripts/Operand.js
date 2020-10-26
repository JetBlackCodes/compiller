import { isLetter, isDigit } from "./Utils";
/**
 * Операнд
 * @param code
 * @returns {{identifier: string, letter: *}|{constanta: string, digit: *}}
 * @constructor
 */
export default function Operand(code) {
  if (isLetter(code[0])) {
    return Identifier(code);
  } else if (isDigit(code[0])) {
    return Constanta(code);
  }
}

function Identifier(code) {
  return {
    letter: code[0],
    identifier: code.substring(1),
  };
}

function Constanta(code) {
  return {
    digit: code[0],
    constanta: code.substring(1),
  };
}
