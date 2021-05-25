import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import * as Styles from '../assets/styles';
import CalendarIcon from '../assets/svg/calendar.svg';
import EyeGrey from '../assets/svg/eye.svg';
import EyeGreen from '../assets/svg/eye-green.svg';
import EyeSlashGrey from '../assets/svg/eye-slash.svg';
import EyeSlashGreen from '../assets/svg/eye-slash-green.svg';
import LockGrey from '../assets/svg/lock.svg';
import LockGreen from '../assets/svg/lock-green.svg';
import PhoneGreen from '../assets/svg/phone-alt.svg';
import PhoneGrey from '../assets/svg/phone-grey.svg';
import UserGrey from '../assets/svg/user.svg';
import UserGreen from '../assets/svg/user-green.svg';

export const PhoneNumber = ({value, onChangeText, placeholder}) => {
  const [color1, setColor1] = useState('#C4C4C4');

  function changeColor1() {
    if (value === '') {
      setColor1('#C4C4C4');
    } else if (value !== '') {
      setColor1('#006F57');
    }
  }

  useEffect(() => {
    changeColor1();
  }, [value]);

  return (
    <View
      style={{
        ...Styles.textInput.container,
        borderBottomColor: color1,
      }}>
      <View style={{...Styles.textInput.view1}}>
        <PhoneGrey style={{display: value === '' ? 'flex' : 'none'}} />
        <PhoneGreen style={{display: value !== '' ? 'flex' : 'none'}} />
      </View>
      <View style={{...Styles.textInput.view2}}>
        <TextInput
          keyboardType="numeric"
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#777777"
          style={{...Styles.textInput.textInput}}
          value={value}
        />
      </View>
    </View>
  );
};

export const Profile = ({value, onChangeText, placeholder}) => {
  const [color1, setColor1] = useState('#C4C4C4');

  function changeColor1() {
    if (value === '') {
      setColor1('#C4C4C4');
    } else if (value !== '') {
      setColor1('#006F57');
    }
  }

  useEffect(() => {
    changeColor1();
  }, [value]);

  return (
    <View style={{...Styles.textInput.container, borderBottomColor: color1}}>
      <View style={{...Styles.textInput.view1}}>
        <UserGrey style={{display: value === '' ? 'flex' : 'none'}} />
        <UserGreen style={{display: value !== '' ? 'flex' : 'none'}} />
      </View>
      <View style={{...Styles.textInput.view2}}>
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#777777"
          style={{...Styles.textInput.textInput}}
          value={value}
        />
      </View>
    </View>
  );
};

export const Password = ({onChangeText, placeholder, value}) => {
  const [secureText, setSecureText] = useState(true);
  const [color1, setColor1] = useState('#C4C4C4');

  function changeColor1() {
    if (value === '') {
      setColor1('#C4C4C4');
    } else if (value !== '') {
      setColor1('#006F57');
    }
  }

  useEffect(() => {
    changeColor1();
  }, [value]);

  return (
    <View
      style={{
        ...Styles.textInput.container,
        borderBottomColor: color1,
      }}>
      <View style={{...Styles.textInput.view1}}>
        <LockGrey style={{display: value === '' ? 'flex' : 'none'}} />
        <LockGreen style={{display: value !== '' ? 'flex' : 'none'}} />
      </View>
      <View style={{...Styles.textInput.view2, width: '80%'}}>
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#777777"
          secureTextEntry={secureText}
          style={{...Styles.textInput.textInput}}
          value={value}
        />
      </View>
      <TouchableOpacity
        style={{...Styles.textInput.view3}}
        onPress={() => setSecureText(!secureText)}>
        <EyeGrey
          style={{
            display: secureText === false && value === '' ? 'flex' : 'none',
          }}
        />
        <EyeGreen
          style={{
            display: secureText === false && value !== '' ? 'flex' : 'none',
          }}
        />
        <EyeSlashGrey
          style={{
            display: secureText === true && value === '' ? 'flex' : 'none',
          }}
        />
        <EyeSlashGreen
          style={{
            display: secureText === true && value !== '' ? 'flex' : 'none',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const Date = ({value, onPressIcon}) => {
  return (
    <View
      style={{
        ...Styles.textInput.containerDate,
      }}>
      <View style={Styles.textInput.view2}>
        <TextInput
          style={{...Styles.textInput.textInput, color: '#000000'}}
          value={value}
          editable={false}
        />
      </View>
      <TouchableOpacity style={Styles.textInput.view1} onPress={onPressIcon}>
        <CalendarIcon />
      </TouchableOpacity>
    </View>
  );
};
