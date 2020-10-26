import React from "react";
import PropTypes from "prop-types";

export default function VariablesDeclaration(code) {
  const semicolonIndex = code.indexOf(";");
  const variablesCodeBlock = code.substring(0, semicolonIndex - 1).trim();

  if (variablesCodeBlock.substring(0, 3) === "var ") {
    return {
      nextCode: code.substring(semicolonIndex + 1),
      variables: VariableList(variablesCodeBlock.substring(4)),
    };
  } else {
    console.log("Ошибка при объявлении переменных");
  }
}

function VariableList(code) {
  const preparedCode = code.replace(/\s/g, "");
  const variables = preparedCode.split(",");
  return variables;
}

VariablesDeclaration.propTypes = {
  code: PropTypes.string.isRequired,
};
