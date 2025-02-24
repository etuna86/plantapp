import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const DiagnoseScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnose Screen</Text>
      <Text style={styles.subtitle}>Analyze or diagnose plants here.</Text>
    </View>
  );
};

export default DiagnoseScreen;
