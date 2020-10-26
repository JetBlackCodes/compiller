import PropTypes from "prop-types";
import { DeleteWhiteSpaces } from "./Utils";

/**
 * Описание вычислений
 *
 * @param {string} code
 * @returns {{assignments: Array, nextCode: string}}
 */
export default function CalculationsDescription(code) {
  const startBracketIndex = code.indexOf("[");
  const endBracketIndex = code.indexOf("]");
  const calculationsDescriptionCodeBlock = code
    .substring(startBracketIndex + 1, endBracketIndex - 1)
    .trim();

  return {
    assignments: Assignments(calculationsDescriptionCodeBlock), //массив типа [{id, expression}]
    nextCode: code.substring(endBracketIndex + 1),
  };
}

/**
 * Присваивание
 * @param {string} code
 * @returns {{expression: string, id: string}[]}
 * @constructor
 */
function Assignments(code) {
  const preparedCode = DeleteWhiteSpaces(code);
  const assignmentsArray = preparedCode.split(";");
  return assignmentsArray.map((item) => {
    const separator = item.indexOf("=");
    return {
      id: item.substring(0, separator),
      expression: item.substring(separator + 1),
    };
  });
}

CalculationsDescription.propTypes = {
  code: PropTypes.string.isRequired,
};

Assignments.propTypes = {
  code: PropTypes.string.isRequired,
};
