import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {observer} from 'mobx-react-lite';
import * as Text from '../../component/Text';
import * as Header from '../../component/Header';
import Style from './faq.style';

const FaqUI = observer(({routeName, navigation}) => {
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView style={Style.container}>
        <Header.Secondary
          routeName={routeName}
          isDetailScreen={false}
          goBack={() => navigation.goBack()}
        />
        <View style={Style.viewMain}>
          <View style={Style.view1}>
            <Text.Regular styles={Style.text}>
              Can a reservation be canceled?
            </Text.Regular>
            <Text.Regular styles={Style.text1}>
              Yes, reservation cancellations can be made as long as the payment
              status is pending and the maximum cancellation of the reservation
              is 30 minutes before the reservation time.
            </Text.Regular>
          </View>

          <View style={Style.view1}>
            <Text.Regular styles={Style.text}>
              Can I change the reservation schedule?
            </Text.Regular>
            <Text.Regular styles={Style.text1}>
              Changes to the reservation schedule cannot be made immediately,
              you need to cancel the previous reservation and make a new one.
            </Text.Regular>
          </View>

          <View style={Style.view1}>
            <Text.Regular styles={Style.text}>
              How do I pay for a reservation?
            </Text.Regular>
            <Text.Regular styles={Style.text1}>
              Reservation payments are made directly at the futsal venue.
            </Text.Regular>
          </View>

          <View style={Style.view1}>
            <Text.Regular styles={Style.text}>
              What facilities are available at Futsal Town??
            </Text.Regular>
            <Text.Regular styles={Style.text1}>
              Toilets, canteens and parking lots for car & motorcycle.
            </Text.Regular>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default FaqUI;
