const ajaxCall = (settings, successFn, failureFn = null) => {
  //showLoadingAlert();
  return $.ajax(Object.assign({
    headers: {
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
    },
    contentType: 'application/json',
    dataType: 'json',
  }, settings))
  .done((data) => {
    //hideLoadingAlert();
    if (typeof data === 'undefined') {
      throw Errors.EmptyResponseError();
    }
    successFn(data);
  })
  .fail((xhr) => {
    //hideLoadingAlert();
    let error = null;
    const json = xhr.responseJSON || {};
    const message = json.error || xhr.statusText;
    const code = json.code || xhr.status;
    const xhrStatus = xhr.status;

    if (xhrStatus === 0) {
      error = Errors.NetworkError(code, message, json);
    }
    else if (xhrStatus === 400) {
      error = Errors.BadRequestError(code, message, json);
    }
    else if (xhrStatus > 400 && xhrStatus < 500) {
      error = Errors.ClientError(code, message, json);
    }
    else if (xhrStatus > 500) {
      error = Errors.ServerError(code, message, json);
    }

    if (failureFn && typeof failureFn === "function") {
      failureFn(error, json);
    }
  });
};
