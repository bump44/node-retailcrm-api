export class RetailCRMExtendableError extends Error {}

export class ErrorParameterType extends RetailCRMExtendableError {
  constructor(parameterName, parameterValue, parameterExpectedType) {
    super(`Parameter '${parameterName}' has an unexpected type ${typeof parameterValue} expected ${parameterExpectedType}`);
  }
}

export class ErrorParameterENUM extends RetailCRMExtendableError {
  constructor(parameterName, parameterValue, parameterENUM) {
    super(`Parameter '${parameterName}' has an unexpected value ${parameterValue} expected ${parameterENUM.join('|')}`);
  }
}

export class ErrorParameterInvalid extends RetailCRMExtendableError {
  constructor(parameterName) {
    super(`Parameter '${parameterName}' has an incorrect value`);
  }
}

export class ErrorParameterRequired extends RetailCRMExtendableError {
  constructor(parameterName) {
    super(`Parameter '${parameterName}' is required`);
  }
}
