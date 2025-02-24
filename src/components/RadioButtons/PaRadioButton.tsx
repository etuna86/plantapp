import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';

interface RadioButtonProps {
    labelTitle: string;
    labelDesc: string;
    selected: boolean;
    save?: boolean;
    saveText?: string,
    onPress: () => void;
}

const PaRadioButton: React.FC<RadioButtonProps> = ({ labelTitle, labelDesc, selected, onPress, save, saveText }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.radioButton, selected && styles.radioButtonActive]}>
                <LinearGradient
                    colors={[colors.primary0, colors.primary024]} // Gradyan renkleri (Turuncu Tonları)
                    start={{ x: 0, y: 0 }} // Başlangıç noktası (Sol Üst)
                    end={{ x: 1, y: 1 }} // Bitiş noktası (Sağ Alt)
                    style={styles.gradient}
                >
                    <View style={[styles.radioButtonContainer, selected && styles.radioButtonActive]}>
                        {save && <View style={[styles.saveStyle, selected && styles.saveStyleActive]}>
                            <Text style={styles.saveStyleText}>{saveText}</Text>
                        </View>}
                        <View style={[styles.outerCircle, selected && styles.outerCircleSelected]}>
                            {selected && <View style={styles.innerCircle} />}
                        </View>
                        <View style={styles.label}>
                            <Text style={styles.title}>
                                {labelTitle}
                            </Text>
                            <Text style={styles.desc}>
                                {labelDesc}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>

        </TouchableOpacity>

    );
};

export default PaRadioButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        display: 'flex',
        // marginVertical: 8,
    },
    radioButton: {
        flex: 1,
        display: 'flex',
        marginVertical: 8,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.white03,
        borderRadius: 14,
        overflow: 'hidden',
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
        flex: 1, // Ekranın tamamını kaplasın
        // justifyContent: 'center',
        // alignItems: 'center',

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
        borderBottomLeftRadius: 14,
        backgroundColor: colors.white03,
        height: 26,
        paddingHorizontal: 16,
        overflow: 'hidden'
    },
    saveStyleText: {
        fontFamily: "Rubik-Medium",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0,
        color: colors.white,
    },
    saveStyleActive: {
        backgroundColor: colors.primary,
    }
});
