import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  topBackgroundStyle: {
    height: 300,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  avatarContainer: {
    marginTop: 70,
  },
  membershipContainer: {
    width: '80%',
    height: 190,
    backgroundColor: Colors.white,
    marginTop: 40,
    alignSelf: 'center',

    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  hairlineStyle: {
    height: 1,
    backgroundColor: Colors.primary,
    alignSelf: 'stretch',
  },
  redemptionValue: {
    backgroundColor: Colors.secondary,
    height: 100,
  },
})
