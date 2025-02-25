import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { styles } from './styles';

import PaRadioButton from '../../components/RadioButtons/PaRadioButton';
import PaButton from '../../components/Buttons/PaButton';
import PaFeaturesSlider from '../../components/Slider/PaFeaturesSlider/PaFeaturesSlider';
import { Features } from '../../types/featuresTypes';
import { ClosedIcon } from '../../utils/icons/Icons';
import { colors } from '../../theme/colors';

// Features Listesi dummy datası
const features: Features[] = [
  { id: '1', name: 'Unlimited', subtitle: 'Plant Identity', image: require('../../assets/icons/icon1.png') },
  { id: '2', name: 'Faster', subtitle: 'Process', image: require('../../assets/icons/icon2.png') },
  { id: '3', name: 'Platinium', subtitle: 'Process', image: require('../../assets/icons/icon1.png') },
  { id: '4', name: 'Gold', subtitle: 'Process', image: require('../../assets/icons/icon2.png') },
  { id: '5', name: 'Silver', subtitle: 'Process', image: require('../../assets/icons/icon1.png') },
];


type ChooseMembershipNavigationProp = StackNavigationProp<RootStackParamList, 'ChooseMembership'>;

interface ChooseMembershipProps {
  navigation: ChooseMembershipNavigationProp;
}

const ChooseMembershipScreen: React.FC<ChooseMembershipProps> = ({ navigation }) => {
  const [plan, setPlan] = useState<'monthly' | 'yearly' | null>('monthly');

  const handleConfirm = () => {
    navigation.navigate('BottomTabs');
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/paywall/paywall.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      </ImageBackground>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => handleConfirm()}
      >
        <ClosedIcon width={10} height={9} fill={colors.white} />
      </TouchableOpacity>
      <View style={styles.sliderContainer}>
        <View style={styles.sliderHeader}>
          <Text style={styles.title}>
            <Text style={styles.boldText}>PlantApp </Text>
            Premium
          </Text>
          <Text style={styles.subTitle}>
            Access All Features
          </Text>
        </View>
        <View style={styles.slider}>
          <PaFeaturesSlider features={features} />
        </View>
      </View>

      <View style={styles.content}>
        <PaRadioButton
          labelTitle="1 Month"
          labelDesc="$2.99/month, auto renewable"
          selected={plan === 'monthly'}
          onPress={() => setPlan('monthly')}
        />
        <PaRadioButton
          labelTitle="1 Year"
          labelDesc="First 3 days free, then $529,99/year"
          save={true}
          saveText={'Save 50%'}
          selected={plan === 'yearly'}
          onPress={() => setPlan('yearly')}
        />
      </View>
      <View style={styles.bottom}>
        <PaButton title='Try free for 3 days' onPress={handleConfirm} />
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
          </Text>
          <View style={styles.termsLinksContainer}>
            <Text
              style={styles.link}
              onPress={() => openLink('https://your-terms-url.com')}
            >
              Terms{'  '}
            </Text>
            <Text
              style={styles.link}
              onPress={() => openLink('https://your-privacy-policy-url.com')}
            >
              •  Privacy  •
            </Text>
            <Text
              style={styles.link}
              onPress={() => openLink('https://your-privacy-policy-url.com')}
            >
              {'  '}Restore
            </Text>
          </View>

        </View>
      </View>
    </View>
  );
};

export default ChooseMembershipScreen;
