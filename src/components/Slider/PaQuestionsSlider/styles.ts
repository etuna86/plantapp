import { StyleSheet } from 'react-native';
import { width, standartPadding } from '../../../utils/constants';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    listContainer: {
        paddingLeft: standartPadding,
        paddingRight: width * 0.3,
    },
    selectedQuestion: {

    },
    featureItem: {
        width: width * 0.65,
        height: 164,
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
    featureImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    overlay: {
        padding: 10,
    },
    featureTitle: {
        fontFamily: 'Rubik-Regular',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: -0.24,
        color: colors.white,
    },
    featureText: {
        fontSize: 14,
    },
});