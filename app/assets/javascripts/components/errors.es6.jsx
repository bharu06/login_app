class Errors {
  constructor(code, message, json) {
    this.code = code;
    this.message = message;
    this.json = json || {};
  }
}


Errors.NetworkError = (code=0, message="Network Error", json) => {
  return new Errors(code, message, json);
}

Errors.BadRequestError = (code=400, message="Bad Request", json) => {
  return new Errors(code, message, json)
}

Errors.ClientError = (code="4xx", message="Client Error", json) => {
  return new Errors(code, message, json);
}

Errors.ServerError = (code="5xx", message="Server Error", json) => {
  return new Errors(code, message, json);
}
