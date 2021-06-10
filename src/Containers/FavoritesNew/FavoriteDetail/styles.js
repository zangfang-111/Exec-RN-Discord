import { ColorPropType, StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    zIndex: 1,
  },
  backIconStyle: {
    position: 'absolute',
    top: 50,
    left: 10,
  },
  heartIconStyle: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
  nameContainer: {
    marginTop: -30,
    width: '95%',
    backgroundColor: Colors.white,
  },
  lineStyle: {
    height: 1,
    backgroundColor: '#E2E2E2',
    width: '85%',
    marginLeft: 20,
  },
  priceViewStyle: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  priceHeader: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
  },
  priceRow: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
  },
  benefitsViewStyle: {
    backgroundColor: Colors.secondary,
  },
  titleLineStyle: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.primary,
  },
  bulletPoint: {
    width: 8,
    height: 8,
    backgroundColor: Colors.primary,
    borderRadius: 100,
    marginTop: 6,
  },
  sectionViewStyle: {
    backgroundColor: Colors.transparent,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationViewStyle: {
    width: '100%',
    height: 400,
    marginTop: -10,
  },
  titleStyle: {
    color: Colors.primary,
  },
  buttonStyle: {
    borderColor: Colors.primary,
  },
  containerStyle: {
    borderRadius: 0,
  },
  bookButtonStyle: {
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
  },
  bookTitleStyle: {
    color: Colors.white,
  },
  bookBtnViewStyle: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  codeViewStyle: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.grey,
    // justifyContent: "flex-end",
    flexDirection: "row",
    overflow:"hidden"
  },
  codeTextStyle: {
    
  },
  redeamButtons: { 
    width: 48,
    height: 48,
    borderColor: Colors.red,
    // borderLeftWidth: 1,
    backgroundColor: "#E8E8E8"
  }
})
