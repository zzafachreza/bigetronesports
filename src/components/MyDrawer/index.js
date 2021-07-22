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
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleLogout = () => {
    storeData('user', null);

    navigation.replace('GetStarted');
  };

  useEffect(() => {
    axios.get('https://zavalabs.com/bigetronesports/api/game.php').then(res => {
      console.log(res.data);
      setData(res.data);
      // setData(res.data.data);
    });

    getData('user').then(res => {
      console.log(res);
      setUser(res);
      getData('token').then(res => {
        console.log('data token darsi drawer,', res);
        setToken(res.token);
        axios
          .post('https://zavalabs.com/bigetronesports/api/update_token.php', {
            id_member: user.id,
            token: res.token,
          })
          .then(res => {
            console.log('update token', res);
          });
      });
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
            width: 120,
            // backgroundColor: colors.border,
            borderWidth: 2,
            borderColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            height: 120,
            borderRadius: 60,
            marginBottom: 10,
            overflow: 'hidden',
          }}>
          <Image
            source={{
              uri:
                user.foto == ''
                  ? 'https://ayokulakan.com/img/no-images.png'
                  : user.foto,
            }}
            style={{width: 120, height: 120}}
          />
        </View>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 22,
            color: colors.primary,
          }}>
          {user.nama_lengkap}
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 28,
            color: colors.black,
          }}>
          {user.bio}
        </Text>
      </View>
      <MyButton
        onPress={() => navigation.navigate('EditProfile', user)}
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
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Player', {
                  game: item.game,
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
                {item.game}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace('MainApp')}
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
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.facebook.com/bigetronesports')
          }>
          <Icon
            size={40}
            type="ionicon"
            name="logo-facebook"
            color={colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.instagram.com/bigetronesports/')
          }>
          <Icon
            size={40}
            type="ionicon"
            name="logo-instagram"
            color={colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/channel/UC6ZnM9vJ7OFVVvzOACDkfGg',
            )
          }>
          <Icon
            size={40}
            type="ionicon"
            name="logo-youtube"
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        style={{
          flex: 1,
        }}>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() => Linking.openURL(item.link)}
              style={{
                marginTop: -50,
                marginHorizontal: 10,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Image
                resizeMode="contain"
                source={{
                  uri: item.foto,
                }}
                style={{width: 200, aspectRatio: 1}}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <MyButton title="LOGOUT" warna={colors.primary} onPress={handleLogout} />
    </View>
  );
}
