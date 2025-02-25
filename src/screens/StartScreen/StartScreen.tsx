import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, LayoutChangeEvent, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { styles } from './styles';
import PaButton from '../../components/Buttons/PaButton';
import { onBoardingBottomHeight, width } from '../../utils/constants';

type StartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Start'>;
interface StartScreenProps {
  navigation: StartScreenNavigationProp;
}

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {

  const [underlineWidth, setUnderlineWidth] = useState(0);

  const handleGetStarted = () => {
    navigation.navigate('Onboarding');
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  return (
    <View style={styles.container}>
      <View style={[styles.slide, { width }]} >
        <View style={styles.header}>
          <Text style={styles.title}>
            {'WelCome to '}
            <Text
              style={styles.boldText}
              onLayout={(event: LayoutChangeEvent) => setUnderlineWidth(event.nativeEvent.layout.width)}
            >
              {'PlantApp'}
            </Text>
          </Text>
          <Text style={styles.description}>
            {'Identify more than 3000+ plants and 88% accuracy.'}
          </Text>
        </View>
        <View style={styles.slideImg}>
          <Image
            source={require('../../assets/img/started/started.png')}
            style={styles.slideImg}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <PaButton title='Get Started' onPress={handleGetStarted} />
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By tapping next, you are agreeing to
            {' '}
            <Text
              style={styles.link}
              onPress={() => openLink('https://your-terms-url.com')}
            >
              Terms of Use
            </Text>
            {' '} & {' '}
            <Text
              style={styles.link}
              onPress={() => openLink('https://your-privacy-policy-url.com')}
            >
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
      </View>
    </View >
  );
};

export default StartScreen;
