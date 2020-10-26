import Operand from "./Operand";
import { DeleteWhiteSpaces } from "./Utils";

const Operators = ["+", "-", "*", "/"];

/**
 * Выражение
 * @param code
 * @returns {{subExpression: void, isUnaryMinus: boolean}}
 * @constructor
 */
export default function Expression(code) {
  const preparedCode = DeleteWhiteSpaces(code);
  const isUnaryMinus = preparedCode[0] === "-";
  return {
    isUnaryMinus: isUnaryMinus,
    subExpression: isUnaryMinus
      ? Subexpression(preparedCode.substring(1))
      : Subexpression(preparedCode.substring(0)),
  };
}

/**
 * Подвыражение
 * @param code
 * @constructor
 */
function Subexpression(code) {
  if (code[0] === "(") {
    const endIndex = code.indexOf(")");
    const preparedCode = code.substring(1, endIndex);
    Expression(preparedCode);
  } else {
    const reducer = (prev, item) => prev || code.includes(item);
    const flag = Operators.reduce(reducer, false);
    if (flag) {
      const plus = code.indexOf("+");
      const minus = code.indexOf("-");
      const multiply = code.indexOf("*");
      const divide = code.indexOf("/");
      const operatorsArray = [plus, minus, multiply, divide]
        .filter((item) => item > 0)
        .sort();
      // console.log(99, operatorsArray);
      const preparedCode = code.substring(0, operatorsArray[0]);
      const nextCode = code.substring(operatorsArray[0] + 1);

      console.log(9.1, code, preparedCode, nextCode);
      console.log(9.2, Operand(preparedCode));

      Subexpression(nextCode);
      return Operand(preparedCode);
    }
  }
}
