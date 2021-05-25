import React from 'react';
import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react-lite';
import * as Text from '../../component/Text';
import * as TextInput from '../../component/TextInput';
import * as Button from '../../component/Button';
import * as Header from '../../component/Header';
import Style from './editprof.style';

const EditProfileUI = observer(
  ({
    routeName,
    name,
    navigation,
    phoneNumber,
    password,
    textError,
    showIndicator,
    onChangeName,
    onChangePhoneNumber,
    onChangePassword,
    onPressSubmit,
  }) => {
    return (
      <SafeAreaView style={Style.container}>
        <ScrollView style={Style.container}>
          <Header.Secondary
            routeName={routeName}
            isDetailScreen={false}
            goBack={() => navigation.goBack()}
          />

          <View style={Style.viewMain}>
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
            <View style={Style.viewTextError}>
              <Text.Light
                styles={{
                  color: '#BB010B',
                }}>
                {textError}
              </Text.Light>
            </View>
            <Button.Regular
              text="Submit"
              onPress={onPressSubmit}
              styles={Style.button}
            />
            <View style={Style.viewIndicator}>
              {showIndicator && (
                <ActivityIndicator size="large" color="#006F57" />
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default EditProfileUI;
