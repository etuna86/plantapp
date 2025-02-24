import React from 'react';
import { TouchableOpacity, Text, StyleProp, TextStyle } from 'react-native';
import { styles } from './styles';

interface MyButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
}

const PaButton: React.FC<MyButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.buttonText, style]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaButton;
