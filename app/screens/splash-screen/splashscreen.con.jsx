/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import AsyncStorage from '@react-native-community/async-storage';
import SplashUI from './splashscreen.pres';
import * as Constant from '../../config/constants';
import * as Resources from '../../resources/resources';
import rootStore from '../../models/root';

const SplashScreen = observer(({navigation}) => {
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userId = await AsyncStorage.getItem(Constant.USER_ID);
    if (userId) {
      Resources.getUserById(userId)
        .then((res) => {
          rootStore.userData.addUserData(res);
          navigation.replace('Bottom Tabs');
        })
        .catch((err) => console.log(err));
    } else {
      navigation.replace('Login Screen');
    }
  };

  return <SplashUI />;
});

export default SplashScreen;
