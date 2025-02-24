import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { getQuestions } from '../../services/questionsServices';
import { Questions } from '../../types/questionsTypes';
import { Categories } from '../../types/categoriesTypes';
import { getCategories } from '../../services/categoriesServices';
import { colors } from '../../theme/colors';
import PaSearchInput from '../../components/Inputs/SearchInput/PaSearchInput';
import { standartPadding } from '../../utils/constants';
import GradientText from '../../components/GradientText/PaGradientText';
import Arrow from '../../assets/icons/Arrow.svg';

const HomeScreen: React.FC = () => {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [value, setValue] = useState<string>('');


  useEffect(() => {
    getQuestionsData();
    getCategoriesData();
  }, []);

  const getQuestionsData = async () => {
    try {
      const data = await getQuestions();
      setQuestions(data);
    } catch (error) {
      console.error('Kullanıcıları çekerken hata:', error);
    }
  };

  const getCategoriesData = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Kullanıcıları çekerken hata:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/home/homeheader.png')} // 📌 Arka plan görselini buraya ekle
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
              placeholder='Search for plants'
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
      </View>


      <Text style={styles.title}>Questions</Text>
      {
        questions.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))
      }
      <Text style={styles.title}>Categories</Text>
      {
        categories.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))
      }
    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  header: {
    width: '100%',
    height: 175, // 📌 Arka plan görselinin yüksekliğini ayarla
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingHorizontal: standartPadding,
    paddingVertical: 14,
  },
  title: {
    fontFamily: 'Rubik-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.96,
    letterSpacing: 0.07,
    color: colors.black,
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: 'Rubik-Medium',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.35,
    color: colors.black,
    marginBottom: 15,
  },
  searchContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  content: {

  },
  premiumBoxContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: standartPadding,
  },
  premiumBox: {
    backgroundColor: colors.premiumBg,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    height: 64,
    borderRadius: 12,
    display: 'flex'
  },
  premiumBoxIcon: {
    display: 'flex',
  },
  premiumBoxContent: {
    display: 'flex'
  },
  premiumBoxTitle: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: -0.32,
  },
  premiumBoxDesc: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontWeight: 400,
    fontSize: 13,
    letterSpacing: 0,
  },
  premiumBoxRightIcon: {
    display: 'flex'
  },
});
