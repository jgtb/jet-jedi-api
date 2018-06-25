const responseSuccessHandler = (status: any, message: any, data: any) => {
  return {
    status,
    message,
    data
  }
}

const responseErrorHandler = (status: any, message: any) => {
  return {
    status,
    message
  }
}

const responseHandler = {
  responseSuccessHandler,
  responseErrorHandler
}

export default responseHandler