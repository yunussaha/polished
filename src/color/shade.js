// @flow

import mix from './mix'
import curry from '../internalHelpers/_curry'

/**
 * Shades the provided color by the provided percentage by mixing it with black.
 *
 * `shade` can produce hue shifts, where as `darken` manipulates the luminance channel and therefore doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage: number | string, color: string): string {
  return mix(parseFloat(percentage), color, 'rgb(0, 0, 0)')
}

const curriedShade = curry(shade)
export default curriedShade
