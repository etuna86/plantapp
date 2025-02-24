import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    // paddingHorizontal: 16,
    borderRadius: 8,
    width:'100%',
    display:'flex'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
    //fontFamily: 'Rubik-Black',
    //fontFamily: 'Rubik-SemiBold',
  },
});
