
import { StyleSheet } from 'react-native';
import { width } from '../../../utils/constants';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%', 
        backgroundColor: colors.white088, 
        borderRadius: 10, 
        borderWidth: 0.2,
        borderColor: colors.borderColor025,
        paddingHorizontal: 16,
        height: 44,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1, 
        fontSize: 16,
        color: colors.black,
    },
});
