/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    textTiny: {
      fontSize: FontSize.tiny,
    },
    textSmall: {
      fontSize: FontSize.small,
    },
    textRegularSize: {
      fontSize: FontSize.regular,
    },
    textMedium: {
      fontSize: FontSize.medium,
    },
    textLarge: {
      fontSize: FontSize.large,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
    },
    titleMedium: {
      fontSize: FontSize.medium * 2,
      fontWeight: 'bold',
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textWhite: {
      color: Colors.white,
    },
    textDark: {
      color: Colors.text,
    },
    textGrey: {
      color: Colors.grey,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textSecondary: {
      color: Colors.secondary,
    },
    textBold: {
      fontFamily: 'ProximaNova-Bold',
    },
    textRegular: {
      fontFamily: 'ProximaNova-Regular',
    },
    textBlack: {
      fontFamily: 'ProximaNova-Black',
    },
    textLetterSpacing: {
      letterSpacing: 4,
    },
    textLineHeight: {
      lineHeight: 25,
    },
  })
}
