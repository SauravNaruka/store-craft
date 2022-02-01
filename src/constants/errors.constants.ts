/**
 * Creating constants instead of custom error class because
 *  - Type script breaking change
 *      - This require to manually adjust the prototype immediately after any super(...) calls with `Object.setPrototypeOf(this, FooError.prototype)`.
 *      - https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 *  - Object.setPrototypeOf has some performance issue in browsers as of 09/Jan/2022
 *      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
 *
 */

export const API_RESPONSE_ERROR =
  'API response error. Either wrong result or missing data'
