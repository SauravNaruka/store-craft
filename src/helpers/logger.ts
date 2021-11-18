import * as ErrorHelper from '@helpers/error.helper'

type Logger = (message?: any, ...optionalParams: any[]) => void

export function error(error: unknown, logger?: Logger) {
  const errorLogger = getErrorLogger(logger)
  const errorMessage = getErrorMessage(error)
  errorLogger(errorMessage)
}

function getErrorMessage(error: unknown): string {
  if (ErrorHelper.isError(error)) {
    return `Name: ${error.name}, Message: ${error.message}, Stack: ${error.stack}`
  } else {
    return `Unknown error at ${Error().stack}`
  }
}

function getErrorLogger(logger?: Logger): Logger {
  return logger ? logger : console.error
}

export const forTesting = {
  getErrorMessage,
  getErrorLogger,
}
