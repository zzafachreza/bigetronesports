import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {MyButton, MyGap} from '../../components';
import {colors} from '../../utils/colors';
import {color} from 'react-native-reanimated';
import {fonts} from '../../utils/fonts';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';

export default function GetStarted({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const bottom = new Animated.Value(windowWidth);
  const opacity = new Animated.Value(0);
  const top = new Animated.Value(0);
  const scaleLogo = new Animated.Value(0.5);

  Animated.timing(scaleLogo, {
    toValue: 1,
    duration: 1000,
  }).start();

  Animated.timing(bottom, {
    toValue: 100,
    duration: 1200,
    useNativeDriver: false,
  }).start();

  Animated.timing(opacity, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  Animated.timing(top, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  return (
    <ImageBackground style={styles.page} resizeMode="cover">
      {/* <StatusBar backgroundColor={colors.secondary} barStyle="light-content" /> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          source={require('../../assets/logo.png')}
          style={{
            resizeMode: 'contain',
            width: 150,
            height: 150,
            aspectRatio: scaleLogo,
            marginBottom: 120,
          }}
        />
      </View>

      <MyButton
        borderSize={1}
        borderColor={colors.white}
        title="LOGIN"
        Icons="log-in"
        warna={colors.primary}
        onPress={() => navigation.navigate('Login')}
      />

      <MyGap jarak={20} />
      <MyButton
        title="SIGN UP"
        Icons="book"
        borderSize={1}
        warna={colors.white}
        iconColor={colors.primary}
        colorText={colors.primary}
        onPress={() => navigation.navigate('Register')}
      />

      <Animated.View style={{height: top}} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
  title: {
    marginTop: 50,
    fontFamily: fonts.secondary[800],
    fontSize: 50,
    color: colors.primary,
  },
});
