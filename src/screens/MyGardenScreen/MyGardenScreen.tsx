import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const MyGardenScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Garden Screen</Text>
      <Text style={styles.subtitle}>View and manage your garden here.</Text>
    </View>
  );
};

export default MyGardenScreen;
