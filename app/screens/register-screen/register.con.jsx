import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import AsyncStorage from '@react-native-community/async-storage';
import * as Constant from '../../config/constants';
import * as Resources from '../../resources/resources';
import * as Validation from '../login-screen/validation';
import rootStore from '../../models/root';
import RegisterUI from './register.pres';

const Register = observer(({navigation}) => {
  const [name, setName] = useState('');
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

  const onChangeName = (text) => {
    setName(text);
    setTextError('');
  };

  const onChangePassword = (text) => {
    setPassword(text);
    setTextError('');
  };

  const onPressRegister = () => {
    if (phoneNumber !== '' && password !== '' && name !== '') {
      if (Validation.checkPhoneValidation(phoneNumber)) {
        if (Validation.checkPassLength(password)) {
          const userData = {
            name,
            phoneNumber,
            password,
          };
          setShowIndicator(true);
          Resources.postUser(userData)
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
              setTextError(Constant.ERROR_REGISTER);
            });
        } else {
          setTextError(Constant.ERROR_PASSWORD);
        }
      } else {
        setTextError(Constant.ERROR_PHONE);
      }
    } else {
      setTextError(Constant.FILL_ALL_FORM);
    }
  };

  return (
    <RegisterUI
      name={name}
      phoneNumber={phoneNumber}
      password={password}
      textError={textError}
      showIndicator={showIndicator}
      onChangeName={onChangeName}
      onChangePhoneNumber={onChangePhoneNumber}
      onChangePassword={onChangePassword}
      onPressRegister={onPressRegister}
    />
  );
});

export default Register;
