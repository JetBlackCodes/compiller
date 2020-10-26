import PropTypes from "prop-types";
import { DeleteWhiteSpaces } from "./Utils";

/**
 * Объявление переменных
 *
 * @param {string} code
 * @returns {{variables: Array, nextCode: string}}
 */
export default function VariablesDeclaration(code) {
  const semicolonIndex = code.indexOf(";");
  const variablesCodeBlock = code.substring(0, semicolonIndex).trim();

  if (variablesCodeBlock.substring(0, 4) === "var ") {
    return {
      nextCode: code.substring(semicolonIndex + 1),
      variables: VariableList(variablesCodeBlock.substring(4)),
    };
  } else {
    console.log("Ошибка при объявлении переменных");
  }
}

function VariableList(code) {
  const preparedCode = DeleteWhiteSpaces(code);
  return preparedCode.split(",");
}

VariablesDeclaration.propTypes = {
  code: PropTypes.string.isRequired,
};
