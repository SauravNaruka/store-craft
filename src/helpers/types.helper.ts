import {BasicType} from '../types/interfaces'

export function isBasicType(value: unknown): value is BasicType {
  if (isString(value) || isNumber(value) || isBoolean(value)) {
    return true
  } else {
    return false
  }
}

export function isString(value: unknown): value is string {
  if (typeof value === 'string') {
    return true
  } else {
    return false
  }
}

export function isNumber(value: unknown): value is number {
  if (typeof value === 'number') {
    return true
  } else {
    return false
  }
}

export function isBoolean(value: unknown): value is boolean {
  if (typeof value === 'boolean') {
    return true
  } else {
    return false
  }
}
