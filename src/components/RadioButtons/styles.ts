import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        display: 'flex',
    },
    radioButton: {
        flex: 1,
        display: 'flex',
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 2,
        borderColor: colors.white03,
        borderRadius: 14,
        overflow: 'hidden',
        height:60,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        padding: 16,
        backgroundColor: colors.white01,
        borderColor: colors.white03,
    },
    radioButtonActive: {
        backgroundColor: 'transparent',
        borderColor: colors.primary,
    },
    active: {

    },
    gradient: {
        flex: 1,
    },
    outerCircle: {
        width: 24,
        height: 24,
        backgroundColor: colors.white015,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    outerCircleSelected: {
        width: 24,
        height: 24,
        borderWidth: 8,
        borderColor: colors.primary,
        backgroundColor: colors.white,
    },
    innerCircle: {
        width: 5,
        height: 5,
        backgroundColor: colors.white,
        borderRadius: 5,
    },
    label: {

    },
    title: {
        fontFamily: "Rubik-Medium",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 18.96,
        letterSpacing: 0,
        color: colors.white,
    },
    desc: {
        fontFamily: "Rubik-Light",
        fontWeight: 300,
        fontSize: 12,
        lineHeight: 14.22,
        letterSpacing: 0,
        color: colors.white07,
    },
    saveStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        backgroundColor: colors.white03,
        height: 26,
        paddingHorizontal: 10,
        overflow: 'hidden',
    },
    saveStyleText: {
        fontFamily: "Rubik-Medium",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 28,
        letterSpacing: 0,
        color: colors.white,
        height: 26,
    },
    saveStyleActive: {
        backgroundColor: colors.primary,
    }
});
