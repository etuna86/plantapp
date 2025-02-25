import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';
import { width, onBoardingHeaderHeight, onBoardingImgHeight, onBoardingBottomHeight, standartPadding } from '../../utils/constants';

const underlineheight = 10;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
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
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 500,
    textAlign: 'left',
    fontFamily: "Rubik-Medium",
    lineHeight: 33.18,
    letterSpacing: -1,
  },
  boldTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 800,
    fontSize: 28,
    display: 'flex',
    textAlign: 'left',
    top: 7,
    fontFamily: "Rubik-ExtraBold",
    lineHeight: 33.18,
    letterSpacing: -1,
  },
  underline: {
    height: underlineheight,
    bottom: -16,
    maxWidth: '100%',
    alignSelf: 'center',
    position: 'absolute'
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    paddingVertical: 16,
    height: 10,
    marginTop:16,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: colors.black025,
  },
  activeDot: {
    backgroundColor: colors.black,
    width: 10,
    height: 10,
    borderRadius: 10,
  }
});
