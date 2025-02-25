import { Dimensions, Platform, StatusBar } from "react-native";

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const standartPadding = 24;
export const onBoardingHeaderHeight = height * 0.15;
export const onBoardingBottomHeight = 125;
export const onBoardingImgHeight = height - (onBoardingHeaderHeight + onBoardingBottomHeight);



