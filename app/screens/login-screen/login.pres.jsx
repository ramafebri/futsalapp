import React from 'react';
import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import * as Button from '../../component/Button';
import * as Header from '../../component/Header';
import * as Text from '../../component/Text';
import * as TextInput from '../../component/TextInput';
import Style from './login.style';

export default function LoginUI({
  phoneNumber,
  password,
  showIndicator,
  onChangePhoneNumber,
  onChangePassword,
  onPressLogin,
  moveToRegister,
  textError,
}) {
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <Header.Login styles={{marginTop: 32}} />
        <View style={{marginTop: 60}}>
          <Text.Bold>Welcome!</Text.Bold>
          <Text.Light>Please Login to Continue</Text.Light>
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
            text="Login"
            onPress={onPressLogin}
            styles={{marginTop: 60}}
          />
        </View>

        <View style={Style.viewText}>
          <Text.Regular styles={Style.textDontHave}>
            Don’t have an Account?
          </Text.Regular>
          <Text.Regular
            styles={Style.textRegister}
            onPress={() => moveToRegister()}>
            {' '}
            Register here
          </Text.Regular>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
