interface HttpError {
  message: string
  status: number
}

export default (error: any) => {
  const response = {} as HttpError

  if (error.response) {
    response.message = error.response.data
    response.status = error.response.status
  } else if (error.request) {
    response.message = error.request
    response.status = 500
  } else {
    response.message = error.message
    response.status = 500
  }

  return response
}
