import React, { useState, useRef } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { styles } from './styles';
import { Features } from '../../../types/featuresTypes'; 

interface PaSliderProps {
  features: Features[];
}

const PaFeaturesSlider: React.FC<PaSliderProps> = ({ features }) => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [feature, setFeature] = useState<Features[]>([...features, ...features]);
  const flatListRef = useRef<FlatList<Features>>(null);

  const handleScrollEnd = () => {
    setFeature((prev) => [...prev, ...features]);
  };

  const renderItem = ({ item }: { item: Features }) => {
    const isSelected = item.id === selectedFeature;

    return (
      <TouchableOpacity
        style={[styles.featureItem, isSelected && styles.selectedFeature]}
        onPress={() => setSelectedFeature(item.id)}
      >
        <Image source={item.image} style={styles.featureImage} />
        <Text style={styles.featureTitle}>{item.name}</Text>
        <Text style={styles.featureText}>{item.subtitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={feature}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        onEndReached={handleScrollEnd}
        onEndReachedThreshold={0.1} 
      />
    </View>
  );
};

export default PaFeaturesSlider;
