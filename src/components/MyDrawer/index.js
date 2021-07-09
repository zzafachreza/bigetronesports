import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Linking,
  Button,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {getData, storeData} from '../../utils/localStorage';
import {Icon} from 'react-native-elements';
import axios from 'axios';
import Drawer from 'react-native-drawer';
import {MyButton} from '../../components';
import {useNavigation} from '@react-navigation/native';

export default function MyDrawer({closeDrawer}) {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);
  const [token, setToken] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleLogout = () => {
    storeData('user', null);

    navigation.replace('GetStarted');
  };

  useEffect(() => {
    getData('user').then(res => {
      console.log(res);
      setUser(res);
      getData('token').then(res => {
        console.log('data token,', res);
        setToken(res.token);
      });
    });
    axios
      .post('https://zavalabs.com/pembantuku/api/update_token.php', {
        id_member: user.id,
        token: token,
      })
      .then(res => {
        console.log('update token', res);
      });
  }, []);

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: colors.white,
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Image
            source={require('../../assets/logo.png')}
            style={{
              resizeMode: 'contain',
              width: 50,
              height: 50,
              aspectRatio: 1,
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={closeDrawer}>
          <Icon
            size={50}
            type="ionicon"
            name="close-outline"
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          // flex: 1,
          // backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <View
          style={{
            width: 100,
            backgroundColor: colors.border,
            height: 100,
            borderRadius: 50,
            marginBottom: 10,
          }}></View>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 22,
            color: colors.primary,
          }}>
          {user.nama_lengkap}
        </Text>
      </View>
      <MyButton
        onPress={() => navigation.navigate('EditProfile')}
        title="Edit Profile"
        warna={colors.border}
        colorText={colors.secondary}
      />
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: 10,
          borderBottomColor: colors.border,
        }}
      />
      <Text
        style={{
          fontFamily: fonts.secondary[800],
          fontSize: windowWidth / 22,
          color: colors.primary,
        }}>
        Profile Player
      </Text>
      <View
        style={{
          paddingLeft: 20,
          // flex: 1,
          // backgroundColor: 'blue',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Player', {
              game: 'PUBG MOBILE',
            })
          }
          style={{
            marginVertical: 5,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 28,
              color: colors.primary,
            }}>
            PUBG MOBILE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Player', {
              game: 'MOBILE LEGEND BANG-BANG',
            })
          }
          style={{
            marginVertical: 5,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 28,
              color: colors.primary,
            }}>
            MOBILE LEGEND BANG-BANG
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Player', {
              game: 'FREE FIRE',
            })
          }
          style={{
            marginVertical: 5,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 28,
              color: colors.primary,
            }}>
            FREE FIRE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Player', {
              game: 'COD MOBILE',
            })
          }
          style={{
            marginVertical: 5,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 28,
              color: colors.primary,
            }}>
            COD MOBILE
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          marginVertical: 5,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[800],
            fontSize: windowWidth / 22,
            color: colors.primary,
          }}>
          Latest News
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://www.tokopedia.com/bigetron?source=universe&st=product',
          )
        }
        style={{
          marginVertical: 5,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[800],
            fontSize: windowWidth / 22,
            color: colors.primary,
          }}>
          Shops
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={
            {
              // flex: 1,
            }
          }>
          <Icon
            size={50}
            type="ionicon"
            name="logo-facebook"
            color={colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            {
              // flex: 1,
            }
          }>
          <Icon
            size={50}
            type="ionicon"
            name="logo-instagram"
            color={colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            {
              // flex: 1,
            }
          }>
          <Icon
            size={50}
            type="ionicon"
            name="logo-youtube"
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <MyButton title="LOGOUT" warna={colors.primary} onPress={handleLogout} />
    </View>
  );
}
