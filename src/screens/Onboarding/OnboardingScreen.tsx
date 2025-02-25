import React, { useRef, useState } from 'react';
import { View, Text, ScrollView,Image, LayoutChangeEvent } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { width, } from '../../utils/constants';
import PaButton from '../../components/Buttons/PaButton';
import { styles } from './styles';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

interface OnboardingScreenProps {
  navigation: OnboardingScreenNavigationProp;
}


interface Slide {
  id: string;
  title: string;
  boldText: string;
  img: any; 
}

const slides: Slide[] = [
  {
    id: '1',
    title: 'Take a photo identity the plant',
    boldText: 'identity',
    img: require('../../assets/img/onboarding/onboarding1.png'),
  },
  {
    id: '2',
    title: 'Get plant care guides',
    boldText: 'care guides',
    img: require('../../assets/img/onboarding/onboarding2.png'),
  },
];

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const scrollRef = useRef<ScrollView>(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onBoldTextLayout = (event: LayoutChangeEvent) => {
    setUnderlineWidth(event.nativeEvent.layout.width);
  };
  const handleNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      scrollRef.current?.scrollTo({ x: width * (currentSlideIndex + 1), animated: true });
    } else {
      navigation.navigate('ChooseMembership');
    }
  };

  const onScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide) => {
          const parts = slide.title.split(slide.boldText);
          return (
            <View style={[styles.slide, { width }]} key={slide.id}>
              <View style={styles.header}>
                <Text style={styles.title}>
                  {parts[0]}
                  <View style={styles.boldTextContainer}>
                    <Text
                      style={styles.boldText}
                      onLayout={(event: LayoutChangeEvent) => setUnderlineWidth(event.nativeEvent.layout.width)}
                    >
                      {slide.boldText}
                    </Text>
                    <Image
                      source={require('../../assets/img/onboarding/brush.png')}
                      style={[styles.underline, { width: 150 }]}
                      resizeMode="contain"
                    />
                  </View>

                  {parts[1]}
                </Text>

              </View>
              <View style={styles.slideImg}>
                <Image
                  source={slide.img}
                  style={styles.slideImg}
                  resizeMode="cover"
                />
              </View>
            </View>
          )
        })}
      </ScrollView>
      <View style={styles.bottom}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          console.log('Bottom View Height:', height);
          setHeight(height); 
        }}
      >
        <PaButton title='Continue' onPress={handleNextSlide} />
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlideIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
