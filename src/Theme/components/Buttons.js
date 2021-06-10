import { StyleSheet } from 'react-native'

export default function ({ Colors, Gutters, Layout }) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 53,
    backgroundColor: Colors.primary,
    borderRadius: 0,
  }
  const rounded = {
    ...base,
    borderRadius: 20,
  }

  const noRounded = {
    borderRadius: 0,
  }

  return StyleSheet.create({
    base,
    rounded,
    noRounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  })
}
