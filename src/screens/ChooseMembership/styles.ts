import { StyleSheet } from 'react-native';
import { width, height, standartPadding, onBoardingBottomHeight } from '../../utils/constants';
import { colors } from '../../theme/colors';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 27,
    fontWeight: '300',
    textAlign: 'left',
    fontFamily: 'Rubik-Light',
    letterSpacing: 0,
    color: colors.white,
  },
  boldText: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'left',
    fontFamily: 'Rubik-ExtraBold',
    letterSpacing: 0.38,
    color: colors.white,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '300',
    marginBottom: 20,
    textAlign: 'left',
    color: colors.white07,
    fontFamily: 'Rubik-Light',
    letterSpacing: 0.38,
  },
  backgroundImage: {
    width: width,
    height: height * 0.5,
    position: 'absolute',
    top: 0,
  },
  sliderHeader: {
    display: 'flex',
    paddingLeft: standartPadding,
  },
  sliderContainer: {
    justifyContent: 'center',
  },

  slider: {
    display: 'flex',
  },
  content: {
    display: 'flex',
    padding: standartPadding,
  },
  bottom: {
    display: 'flex',
    paddingHorizontal: standartPadding,
    height: onBoardingBottomHeight,
  }
});
