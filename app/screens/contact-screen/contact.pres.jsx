import React from 'react';
import {View, SafeAreaView, ScrollView, Image} from 'react-native';
import {observer} from 'mobx-react-lite';
import * as Text from '../../component/Text';
import * as Header from '../../component/Header';
import Style from './contact.style';

const ContactUI = observer(({routeName, dataContact, navigation}) => {
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView style={Style.container}>
        <Header.Secondary
          routeName={routeName}
          isDetailScreen={false}
          goBack={() => navigation.goBack()}
        />
        <View style={Style.viewMain}>
          {dataContact.length > 0 && (
            <View style={Style.view1}>
              <Image
                source={{uri: dataContact[0].logo}}
                style={Style.image}
                resizeMode="contain"
              />
              <Text.Regular styles={Style.text}>
                {dataContact[0].nama}
              </Text.Regular>
              <Text.Regular styles={Style.text1}>
                {dataContact[0].no_telp}
              </Text.Regular>
              <Text.Regular styles={Style.text1}>
                {dataContact[0].alamat}
              </Text.Regular>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default ContactUI;
