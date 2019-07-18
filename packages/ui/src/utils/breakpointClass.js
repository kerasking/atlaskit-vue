import { toKebabCase } from './toKebabCase'

/**
 * Convert given class name into dash case and append the given breakpoint string. Required in order to turn camel case
 * props into dash case.
 *
 * @param className
 * @param breakpoint
 * @returns {string}
 */
export const breakpointClass = (className, breakpoint) => {
  if (['string', 'number'].indexOf(typeof breakpoint) > -1 && breakpoint !== '') {
    return `${toKebabCase(className)}-${breakpoint}`
  }

  return toKebabCase(className)
}
