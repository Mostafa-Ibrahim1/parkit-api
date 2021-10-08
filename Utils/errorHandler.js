const errorHandler = (error) => {
  if (error.errors) {
    const errorMessage =
      error.errors[Object.keys(error.errors)[0]].properties.message;
    return errorMessage;
  } else if (!error.errors) {
    const errorMessage = `${Object.keys(error.keyValue)[0]} of value ${
      Object.values(error.keyValue)[0]
    } already exists`;
    return errorMessage;
  } else {
    const errorMessage = undefined;
    return errorMessage;
  }
};
module.exports = errorHandler;
