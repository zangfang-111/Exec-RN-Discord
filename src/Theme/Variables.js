/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#C97E48',
  secondary: '#F1EADE',
  success: '#28a745',
  error: '#dc3545',
  black: '#000000',
  grey: '#C4C4C4',
}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  regular: 18,
  medium: 25,
  large: 32,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const medium = tiny * 4
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  medium,
  large,
}
