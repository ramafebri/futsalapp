import React from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import * as Text from '../../component/Text';
import * as Header from '../../component/Header';
import * as Button from '../../component/Button';

import rootStore from '../../models/root';
import Style from './profile.style';

const ProfileUI = observer(
  ({routeName, moveToEditProfile, moveToContact, moveToFaq, logout}) => {
    return (
      <SafeAreaView style={Style.container}>
        <ScrollView>
          <View>
            <Header.Regular
              routeName={routeName}
              name={rootStore.userData.nama}
              styles={Style.viewHeader}
            />
            <View style={Style.viewMain}>
              <Text.Regular styles={Style.textName}>
                {rootStore.userData.nama}
              </Text.Regular>
              <Text.Regular styles={Style.textPhone}>
                {rootStore.userData.no_telp}
              </Text.Regular>
              <Button.EditProfile
                onPress={moveToEditProfile}
                styles={Style.button}
              />
            </View>
            <TouchableOpacity style={Style.viewContact} onPress={moveToContact}>
              <View style={Style.viewContact1}>
                <Text.Regular styles={Style.textContact}>
                  Contact Information
                </Text.Regular>
              </View>
              <View style={Style.viewContact2}>
                <Text.Regular styles={Style.textContact}>&gt;</Text.Regular>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Style.viewContact} onPress={moveToFaq}>
              <View style={Style.viewContact1}>
                <Text.Regular styles={Style.textContact}>FAQ</Text.Regular>
              </View>
              <View style={Style.viewContact2}>
                <Text.Regular styles={Style.textContact}>&gt;</Text.Regular>
              </View>
            </TouchableOpacity>
            <Button.Logout onPress={logout} styles={Style.buttonLogout} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default ProfileUI;
