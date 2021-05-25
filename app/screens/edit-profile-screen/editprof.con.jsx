import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import * as Constant from '../../config/constants';
import * as Resources from '../../resources/resources';
import * as Validation from '../login-screen/validation';
import rootStore from '../../models/root';
import EditProfileUI from './editprof.pres';

const EditProfile = observer(({route, navigation}) => {
  const [name, setName] = useState(rootStore.userData.nama);
  const [phoneNumber, setPhoneNumber] = useState(rootStore.userData.no_telp);
  const [password, setPassword] = useState('');
  const [textError, setTextError] = useState('');
  const [showIndicator, setShowIndicator] = useState(false);

  const onChangeName = (text) => {
    setName(text);
    setTextError('');
  };

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

  const onPressSubmit = () => {
    if (phoneNumber !== '' && password !== '' && name !== '') {
      if (Validation.checkPhoneValidation(phoneNumber)) {
        if (Validation.checkPassLength(password)) {
          const data = {
            userId: rootStore.userData.id_pengguna,
            name,
            phoneNumber,
            password,
          };
          setShowIndicator(true);
          Resources.putUserById(data)
            .then((res) => {
              setShowIndicator(false);
              rootStore.userData.editUserData(res);
              navigation.navigate('Bottom Tabs', {screen: 'Profile'});
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
    <EditProfileUI
      routeName={route.name}
      name={name}
      navigation={navigation}
      phoneNumber={phoneNumber}
      password={password}
      textError={textError}
      showIndicator={showIndicator}
      onChangeName={onChangeName}
      onChangePhoneNumber={onChangePhoneNumber}
      onChangePassword={onChangePassword}
      onPressSubmit={onPressSubmit}
    />
  );
});

export default EditProfile;
