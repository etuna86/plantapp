import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';
import { width, onBoardingHeaderHeight, onBoardingImgHeight, onBoardingBottomHeight, standartPadding } from '../../utils/constants';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'flex-end',
  },
  header: {
    height: onBoardingHeaderHeight,
    paddingHorizontal: standartPadding,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  slideImg: {
    display: 'flex',
    height: onBoardingImgHeight,
    width: width,
  },
  bottom: {
    height: onBoardingBottomHeight,
    paddingHorizontal: standartPadding,
    position:'absolute',
    bottom:0,
    width:'100%',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 300,
    textAlign: 'left',
    fontFamily: "Rubik-Regular",
    lineHeight: 33.18,
    letterSpacing: 0.07,
    color: colors.black,
    marginBottom: 10,
  },
  boldText: {
    fontSize: 28,
    fontWeight: 600,
    textAlign: 'left',
    fontFamily: "Rubik-SemiBold",
    lineHeight: 33.18,
    letterSpacing: 0.07,
    color: colors.black
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'left',
    fontFamily: "Rubik-Regular",
    lineHeight: 22,
    letterSpacing: 0.07,
    color: colors.black07
  },
  boldTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsContainer: {
    // marginTop:3,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsText: {
    fontSize: 11,
    fontWeight: 400,
    textAlign: 'center',
    fontFamily: "Rubik-Regular",
    lineHeight: 15,
    letterSpacing: 0.07,
    color: colors.termsText,
    width:'70%'
  },
  link: {
    textDecorationLine: 'underline',
    color: colors.termsText
  },


});
