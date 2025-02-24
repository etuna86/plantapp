import React, { useState, useRef, useEffect } from 'react';
import { View, Text,FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import { Questions } from '../../../types/questionsTypes';

interface PaSliderProps {
  questions: Questions[];
}

const PaQuestionsSlider: React.FC<PaSliderProps> = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [question, setQuestion] = useState<Questions[]>([...questions, ...questions]);
  const flatListRef = useRef<FlatList<Questions>>(null);

  const handleScrollEnd = () => {
    setQuestion((prev) => [...prev, ...questions]);
  };

  useEffect(() => {
    if (questions.length > 0) {
      setQuestion([...questions, ...questions]);
    }
  }, [questions]);

  const renderItem = ({ item }: { item: Questions }) => {
    const isSelected = item.id === selectedQuestion;

    return (
      <TouchableOpacity
        style={[styles.featureItem, isSelected && styles.selectedQuestion]}
        onPress={() => setSelectedQuestion(item.id)}
      >
        <ImageBackground source={{ uri: item.image_uri }} style={styles.featureImage} resizeMode="cover">
          <View style={styles.overlay}>
            <Text style={styles.featureTitle}>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={question}
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

export default PaQuestionsSlider;
