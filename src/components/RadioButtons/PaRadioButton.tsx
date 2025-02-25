import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

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
                    colors={[colors.primary0, colors.primary024]} // Gradyan renkleri
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

