// Note: This will return false even in case the object is of Error type,
//       if its thrown at iframe or other such boundry
export function isError(error: unknown): error is Error {
  return error instanceof Error
}
