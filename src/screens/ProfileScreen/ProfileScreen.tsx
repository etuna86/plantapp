import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.subtitle}>User information or settings go here.</Text>
    </View>
  );
};

export default ProfileScreen;
