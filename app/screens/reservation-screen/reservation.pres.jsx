import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import moment from 'moment';
import * as Text from '../../component/Text';
import * as Header from '../../component/Header';
import rootStore from '../../models/root';
import TimeIcon from '../../assets/svg/access_time1.svg';
import Style from './reservation.style';

const ReservationUI = observer(
  ({
    routeName,
    dataLap,
    navigation,
    selectedDate,
    sortedJammain,
    onPressBookingNow,
    showIndicator,
  }) => {
    return (
      <SafeAreaView style={Style.container}>
        <Header.Secondary
          routeName={routeName}
          isDetailScreen={false}
          goBack={() => navigation.goBack()}
        />
        <ScrollView>
          <View style={Style.viewTextOrder}>
            <Text.Regular styles={Style.textOrder}>
              Reservation Detail
            </Text.Regular>
          </View>
          <View style={Style.viewIndicator}>
            {showIndicator && (
              <ActivityIndicator size="large" color="#006F57" />
            )}
          </View>
          <View style={Style.viewLapangan}>
            <Text.Regular styles={Style.textLap}>
              {dataLap.nama_lapangan}
            </Text.Regular>
            <Text.Regular styles={Style.textHari}>
              {moment(selectedDate).format('dddd, D MMMM YYYY')}
            </Text.Regular>
            <Text.Regular styles={Style.textHari}>
              {dataLap.jenis_lapangan}
            </Text.Regular>
            {sortedJammain.map((item) => {
              return (
                <View style={Style.viewDetailJam} key={item}>
                  <View style={Style.viewDetailJam1}>
                    <TimeIcon />
                  </View>
                  <View style={Style.viewDetailJam2}>
                    <Text.Regular styles={Style.textJam}>
                      {item}
                    </Text.Regular>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={Style.viewTotal}>
            <View style={Style.view1}>
              <Text.Regular styles={Style.textOrder}>Total</Text.Regular>
            </View>
            <View style={Style.view2}>
              <Text.Regular styles={Style.textOrder}>
                Rp {rootStore.totalPrice.totalPrice}
              </Text.Regular>
            </View>
          </View>
          <TouchableOpacity
            style={Style.buttonPayment}
            onPress={onPressBookingNow}>
            <Text.Regular styles={Style.textButton}>RESERVE NOW</Text.Regular>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default ReservationUI;
