import React from 'react';
import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import * as Button from '../../component/Button';
import * as Header from '../../component/Header';
import * as Text from '../../component/Text';
import * as TextInput from '../../component/TextInput';
import Style from './register.style';

export default function RegisterUI({
  name,
  phoneNumber,
  password,
  showIndicator,
  onChangeName,
  onChangePhoneNumber,
  onChangePassword,
  onPressRegister,
  textError,
}) {
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <Header.Login styles={{marginTop: 32}} />
        <View style={{marginTop: 60}}>
          <Text.Bold>Register</Text.Bold>
          <Text.Light>Please fill the details</Text.Light>
        </View>
        <View style={Style.viewIndicator}>
          {showIndicator && <ActivityIndicator size="large" color="#006F57" />}
        </View>

        <View style={Style.viewTextError}>
          <Text.Light
            styles={{
              color: '#BB010B',
            }}>
            {textError}
          </Text.Light>
        </View>

        <View style={Style.viewTextInput}>
          <TextInput.Profile
            value={name}
            onChangeText={onChangeName}
            placeholder="Name"
          />
          <TextInput.PhoneNumber
            value={phoneNumber}
            onChangeText={onChangePhoneNumber}
            placeholder="08xxxx"
          />
          <TextInput.Password
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
          />
          <Button.Regular
            text="Register"
            onPress={onPressRegister}
            styles={{marginTop: 60}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
