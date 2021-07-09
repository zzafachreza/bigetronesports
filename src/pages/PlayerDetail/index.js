import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Avatar,
  Accessory,
  Divider,
  ListItem,
  // Icon,
  Button,
} from 'react-native-elements';
import {storeData, getData} from '../../utils/localStorage';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {MyGap} from '../../components';
import * as Progress from 'react-native-progress';

export default function PlayerDetail({navigation, route}) {
  const item = route.params;
  const [user, setUser] = useState({});
  const [iLogo, setiLogo] = useState('');

  navigation.setOptions({
    title: 'PROFILE PLAYER',
  });

  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <View
        style={{
          // backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            // borderWidth: 1,
            backgroundColor: colors.secondary,
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}></View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: fonts.secondary[600],
            top: 10,
            color: colors.primary,
          }}>
          {item.nama}
        </Text>
      </View>
      <MyGap jarak={20} />
      <View
        style={{
          marginBottom: 5,
          padding: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
          }}>
          Full Name
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            color: colors.primary,
          }}>
          {item.nama}
        </Text>
      </View>

      <View
        style={{
          marginBottom: 5,
          padding: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
          }}>
          Gender
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            color: colors.primary,
          }}>
          Wanita
        </Text>
      </View>

      <View
        style={{
          marginBottom: 5,
          padding: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
          }}>
          Birthday
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            color: colors.primary,
          }}>
          21 March 2000
        </Text>
      </View>

      <View
        style={{
          marginBottom: 5,
          padding: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
          }}>
          Role
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            color: colors.primary,
          }}>
          Rusher
        </Text>
      </View>

      <View
        style={{
          marginBottom: 5,
          padding: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            marginBottom: 10,
          }}>
          Comunication (75%)
        </Text>
        <Progress.Bar progress={0.75} width={300} color={colors.success} />
      </View>
      <View
        style={{
          marginBottom: 5,
          padding: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            marginBottom: 10,
          }}>
          Mentality (85%)
        </Text>
        <Progress.Bar progress={0.85} width={300} color={colors.secondary} />
      </View>
      <View
        style={{
          marginBottom: 5,
          padding: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            marginBottom: 10,
          }}>
          Skill Individual (95%)
        </Text>
        <Progress.Bar progress={0.95} width={300} color={colors.primary} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
