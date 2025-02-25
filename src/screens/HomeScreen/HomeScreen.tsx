import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLoading } from '../../redux/slices/loadingSlice';
import { getQuestions } from '../../services/questionsServices';
import { Questions } from '../../types/questionsTypes';
import { Categories } from '../../types/categoriesTypes';
import { getCategories } from '../../services/categoriesServices';
import { colors } from '../../theme/colors';
import PaSearchInput from '../../components/Inputs/SearchInput/PaSearchInput';
import GradientText from '../../components/GradientText/PaGradientText';
import Arrow from '../../assets/icons/Arrow.svg';
import PaQuestionsSlider from '../../components/Slider/PaQuestionsSlider/PaQuestionsSlider';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import LoadingScreen from '../../components/Loading/LoadingScreen';

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  return array.reduce((acc: T[][], _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);
};

const HomeScreen: React.FC = () => {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [value, setValue] = useState<string>('');
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const { showLoading, hideLoading } = useLoading(); // Redux kullanımı

  useEffect(() => {
    getQuestionsData();
    getCategoriesData();
  }, []);

  const getQuestionsData = async () => {
    showLoading();
    try {
      const data = await getQuestions();
      setQuestions(data);
    } catch (error) {
      console.error('Kullanıcıları çekerken hata:', error);
    }
    hideLoading();
  };

  const getCategoriesData = async () => {
    showLoading();
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Kullanıcıları çekerken hata:', error);
    }
    hideLoading();
  };
  const selectCategoryId = async (id: number): Promise<void> => {
    console.log("category id: ", id);
  };
  
  const groupedCategories = chunkArray(categories, 2);

  return (
    <>
      {isLoading ? (<LoadingScreen />) : (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          <View style={styles.container}>
            <ImageBackground
              source={require('../../assets/img/home/homeheader.png')}
              style={styles.header}
              resizeMode="cover"
            >
              <View style={styles.overlay}>
                <Text style={styles.title}>Hi, plant lover!</Text>
                <Text style={styles.subTitle}>Good Afternoon! ⛅</Text>
                <View style={styles.searchContainer}>
                  <PaSearchInput
                    value={value}
                    onChangeText={setValue}
                    placeholder="Search for plants"
                  />
                </View>
              </View>
            </ImageBackground>

            <View style={styles.content}>
              <View style={styles.premiumBoxContainer}>
                <View style={styles.premiumBox}>
                  <View style={styles.premiumBoxIcon}>
                    <Image source={require('../../assets/icons/envelope.png')} />
                  </View>
                  <View style={styles.premiumBoxContent}>
                    <GradientText
                      text={'FREE Premium Available'}
                      colors={[colors.orange, colors.orangeLight]}
                      style={styles.premiumBoxTitle}
                    />
                    <GradientText
                      text={'Tap to upgrade your account!'}
                      colors={[colors.orange, colors.orangeLight]}
                      style={styles.premiumBoxDesc}
                    />
                  </View>
                  <View style={styles.premiumBoxRightIcon}>
                    <Arrow width={7} height={14} fill={colors.arrow} />
                  </View>
                </View>
              </View>

              <View style={styles.questionsContainer}>
                <View style={styles.questionsHeader}>
                  <Text style={styles.questionsTitle}>Get Started</Text>
                </View>
                <PaQuestionsSlider questions={questions} />
              </View>
            </View>
            <View style={styles.categoriesContainer}>
              {groupedCategories.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                  {row.map((item) => (
                    <TouchableOpacity
                      key={item.id} style={styles.categoryBox}
                      onPress={() => selectCategoryId(item.id)}
                    >
                      <View >
                        <ImageBackground
                          source={{ uri: item.image.url }}
                          style={styles.categoryImage}
                          resizeMode="cover"
                        >
                          <View style={styles.categoryOverlay}>
                            <Text style={styles.categoryTitle}>{item.title}</Text>
                          </View>
                        </ImageBackground>
                      </View>
                    </TouchableOpacity>
                  ))}
                  {row.length < 2 && <View style={[styles.categoryBox, styles.hiddenBox]} />}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>)
      }
    </>
  );
};

export default HomeScreen;
