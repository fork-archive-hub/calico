import { SimplePseudos } from 'csstype'
import { Style } from 'treat'

type PlainStyle = string | number | null
type StyleArray = PlainStyle[] | readonly PlainStyle[]

type CSSProperty = Exclude<keyof Style, '@media'>
type PsuedoCssProperty = Exclude<
  CSSProperty,
  'selectors' | '@keyframes' | SimplePseudos
>

type PsuedoStyle = Partial<Record<PsuedoCssProperty, PlainStyle | StyleArray>>

export type MqStyles = Partial<
  Record<
    CSSProperty,
    | PlainStyle
    | PsuedoStyle
    | StyleArray
    | Style['selectors']
    | Style['@keyframes']
    | null
  >
>

/**
 * Helper to determine if the provided value is a plain, non-responsive style.
 * @private
 *
 * @param val The value to check.
 * @returns A boolean indicating if the value is a plain style.
 */
const isPlainStyle = (val: unknown) => {
  return !Array.isArray(val) && typeof val !== 'object'
}

/**
 * Helper to determine if the provided value is a psuedo-style.
 * @private
 *
 * @param val The value to check.
 * @returns A boolean indicating if the value is a psuedo-style.
 */
const isPsuedoStyle = (val: unknown) => {
  return !Array.isArray(val) && typeof val === 'object'
}

/**
 * Higher order function to create a function that can be used to
 * create atomic style classNames with responsive arrays.
 *
 * @param breakpoints The breakpoint values to utilize for the
 * responsive array. Must be an array of valid CSS units.
 * @returns A function like the `style` function from `treat` but with
 * support for responsive arrays.
 */
export const createMq = (breakpoints: string[]) => {
  const mq = (mqStyles: MqStyles) => {
    const styles = Object.entries(mqStyles)

    let newObj = { '@media': {} } as any
    let mediaObj = newObj['@media']

    for (const [cssKey, style] of styles) {
      if (cssKey === 'selectors') {
        newObj.selectors = style as Style['selectors']
        continue
      }

      if (cssKey === '@keyframes') {
        newObj['@keyframes'] = style as Style['@keyframes']
        continue
      }

      if (isPlainStyle(style)) {
        newObj[cssKey] = style as PlainStyle
        continue
      }

      if (isPsuedoStyle(style)) {
        const psuedoStyles = Object.entries(style as PsuedoStyle)

        for (const [psuedoCssKey, psuedoValue] of psuedoStyles) {
          if (isPlainStyle(psuedoValue)) {
            newObj[cssKey] = newObj[cssKey] ?? {}
            newObj[cssKey][psuedoCssKey] = psuedoValue as PlainStyle
            continue
          }

          for (const [idx, bpStyle] of (psuedoValue as StyleArray).entries()) {
            if (!bpStyle) continue
            if (idx === 0) {
              newObj[cssKey] = newObj[cssKey] ?? {}
              newObj[cssKey][psuedoCssKey] = bpStyle
              continue
            }

            const mediaQuery = `(min-width: ${breakpoints[idx - 1]})`
            mediaObj[mediaQuery] = mediaObj[mediaQuery] ?? {}
            mediaObj[mediaQuery][cssKey] = mediaObj[mediaQuery][cssKey] ?? {}
            mediaObj[mediaQuery][cssKey][psuedoCssKey] = bpStyle
          }
        }
        continue
      }

      for (const [idx, bpStyle] of (style as StyleArray).entries()) {
        if (!bpStyle) continue
        if (idx === 0) {
          newObj[cssKey] = bpStyle
          continue
        }

        const mediaQuery = `(min-width: ${breakpoints[idx - 1]})`
        mediaObj[mediaQuery] = mediaObj[mediaQuery] ?? {}
        mediaObj[mediaQuery][cssKey] = bpStyle
      }
    }

    return newObj as Style
  }

  return mq
}
