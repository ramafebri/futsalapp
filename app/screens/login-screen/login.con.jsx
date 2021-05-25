import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import AsyncStorage from '@react-native-community/async-storage';
import * as Constant from '../../config/constants';
import * as Resources from '../../resources/resources';
import * as Validation from './validation';
import rootStore from '../../models/root';
import LoginUI from './login.pres';

const Login = observer(({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [textError, setTextError] = useState('');
  const [showIndicator, setShowIndicator] = useState(false);

  const onChangePhoneNumber = (text) => {
    setTextError('');
    if (Validation.isNumber(text)) {
      setPhoneNumber(text);
    }
  };

  const onChangePassword = (text) => {
    setPassword(text);
    setTextError('');
  };

  const onPressLogin = () => {
    if (phoneNumber !== '' && password !== '') {
      const userData = {
        phoneNumber,
        password,
      };
      setShowIndicator(true);
      Resources.postLogin(userData)
        .then(async (res) => {
          setShowIndicator(false);
          if (res.id_pengguna > 0) {
            await AsyncStorage.setItem(
              Constant.USER_ID,
              res.id_pengguna.toString(),
            );
            rootStore.userData.addUserData(res);
            navigation.replace('Bottom Tabs', {screen: 'Home'});
          }
        })
        .catch((err) => {
          console.log(err);
          setShowIndicator(false);
          setTextError(Constant.ERROR_LOGIN);
        });
    } else {
      setTextError(Constant.FILL_ALL_FORM);
    }
  };

  const moveToRegister = () => {
    navigation.navigate('Register Screen');
  };

  return (
    <LoginUI
      phoneNumber={phoneNumber}
      password={password}
      showIndicator={showIndicator}
      onChangePhoneNumber={onChangePhoneNumber}
      onChangePassword={onChangePassword}
      onPressLogin={onPressLogin}
      moveToRegister={moveToRegister}
      textError={textError}
    />
  );
});

export default Login;
