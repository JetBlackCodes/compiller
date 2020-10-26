import VariablesDeclaration from "./VariablesDeclaration";
import CalculationsDescription from "./CalculationsDescription";
import Expression from "./Expression";

// const CODE = "var a, b, c; [a=-(c=wx+5y); b=wx+5y;]";
// const CODE = "var a, b, c; [a=-wx+5y; b=wx+5y;]";
const CODE = "var a, b, c; [a=wx+5y;]";

export default function Program() {
  let programObject = {};

  // Объявление переменных
  programObject = { ...programObject, ...VariablesDeclaration(CODE) };
  // console.log(1, programObject);

  // Описание вычислений
  programObject = {
    ...programObject,
    ...CalculationsDescription(programObject.nextCode),
  };
  // console.log(2, programObject);

  const expressions = programObject.assignments.map((item) => {
    Expression(item.expression);
  });
  programObject = {
    ...programObject,
    ...expressions,
  };
  console.log(3, programObject);
}
