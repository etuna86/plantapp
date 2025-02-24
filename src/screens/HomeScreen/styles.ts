import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { standartPadding, width } from '../../utils/constants';

export const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    scrollContent: {
        // paddingBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    header: {
        width: '100%',
        height: 175,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    overlay: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: standartPadding,
        paddingVertical: 14,
    },
    title: {
        fontFamily: 'Rubik-Regular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 18.96,
        letterSpacing: 0.07,
        color: colors.black,
        marginBottom: 5,
    },
    subTitle: {
        fontFamily: 'Rubik-Medium',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 28,
        letterSpacing: 0.35,
        color: colors.black,
        marginBottom: 15,
    },
    searchContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    content: {

    },
    premiumBoxContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: standartPadding,
    },
    premiumBox: {
        backgroundColor: colors.premiumBg,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        height: 64,
        borderRadius: 12,
        display: 'flex'
    },
    premiumBoxIcon: {
        display: 'flex',
    },
    premiumBoxContent: {
        display: 'flex'
    },
    premiumBoxTitle: {
        fontFamily: 'SF-Pro-Text-Bold',
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: -0.32,
    },
    premiumBoxDesc: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontWeight: 400,
        fontSize: 13,
        letterSpacing: 0,
    },
    premiumBoxRightIcon: {
        display: 'flex'
    },
    questionsContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    questionsHeader: {
        flexDirection: 'row',
        width: '100%',
    },
    questionsTitle: {
        fontFamily: 'Rubik-Medium',
        fontWeight: 500,
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: -0.24,
        color: colors.black,
        paddingLeft: standartPadding,
    },
    categoriesContainer: {
        paddingHorizontal: 24,
        flexDirection: 'column',
        display: 'flex',
        width: '100%'
    },
    categoryBox: {
        width: (width - (standartPadding * 2 + 6)) / 2,
        height: (width - (standartPadding * 2 + 6)) / 2,
        borderWidth: 0.5,
        borderColor: colors.green018,
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: "hidden",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    categoryImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    categoryOverlay: {
        padding: 16,
        width: (width - (standartPadding * 2 + 6) / 2) / 2.2,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 500,
        color: colors.black,
        fontFamily: 'Rubik-Medium',
        lineHeight: 21,
        letterSpacing: -0.32,

    },
    hiddenBox: {
        opacity: 0,
    },
});
