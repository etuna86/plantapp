
import { StyleSheet } from 'react-native';
import { width } from '../../../utils/constants';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%', // Ekranın %90'ı genişlikte
        backgroundColor: colors.white088, // Arkaplan rengi
        borderRadius: 10, // Köşeleri yuvarla
        borderWidth: 0.2,
        borderColor: colors.borderColor025,
        paddingHorizontal: 16,
        height: 44,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1, // Genişliği tam olarak doldur
        fontSize: 16,
        color: colors.black,
    },
});
