import React from 'react';
import {
  View,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';
import {observer} from 'mobx-react-lite';
import * as Text from '../../component/Text';
import * as Header from '../../component/Header';
import * as Constants from '../../config/constants';
import rootStore from '../../models/root';
import Style from './history.style';

const HistoryUI = observer(
  ({routeName, data, moveToDetail, refreshing, showIndicator, onRefresh}) => {
    return (
      <SafeAreaView style={Style.container}>
        <Header.Regular routeName={routeName} name={rootStore.userData.nama} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {data.map((item) => {
            return (
              <TouchableOpacity
                key={item.id_reservasi}
                style={Style.viewCard}
                onPress={() => moveToDetail(item)}>
                <View style={Style.viewCard1}>
                  <Text.Regular styles={Style.text1}>
                    {moment(item.tanggal_dibuat).format('dddd, Do MMMM YYYY')}
                  </Text.Regular>
                  <Text.Regular styles={Style.text2}>
                    Reservation No: {item.id_reservasi}
                  </Text.Regular>
                  <Text.Regular styles={Style.text2}>
                    Total: Rp {item.total_pembayaran}
                  </Text.Regular>
                  <View style={Style.viewPayStatus}>
                    <View style={Style.viewPayStatus1}>
                      <Text.Regular styles={Style.text2}>
                        Payment Status:{' '}
                      </Text.Regular>
                    </View>
                    <View style={Style.viewPayStatus2}>
                      <Text.Regular
                        styles={{
                          ...Style.textPaymentGreen,
                          display:
                            item.status_pembayaran === Constants.SUDAH
                              ? 'flex'
                              : 'none',
                        }}>
                        Payment Confirmed
                      </Text.Regular>
                      <Text.Regular
                        styles={{
                          ...Style.textPaymentOrange,
                          display:
                            item.status_pembayaran === Constants.TERTUNDA
                              ? 'flex'
                              : 'none',
                        }}>
                        Payment Pending
                      </Text.Regular>
                      <Text.Regular
                        styles={{
                          ...Style.textPaymentRed,
                          display:
                            item.status_pembayaran === Constants.BATAL
                              ? 'flex'
                              : 'none',
                        }}>
                        Cancelled
                      </Text.Regular>
                    </View>
                  </View>
                </View>
                <View style={Style.viewCard2}>
                  <Text.Regular styles={Style.textArrow}>&gt;</Text.Regular>
                </View>
              </TouchableOpacity>
            );
          })}
          {data.length === 0 && (
            <View style={Style.viewNoReservation}>
              <Text.Regular styles={Style.textNoReservation}>
                No reservation history
              </Text.Regular>
            </View>
          )}
          <View style={Style.viewIndicator}>
            {showIndicator && (
              <ActivityIndicator size="large" color="#006F57" />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default HistoryUI;
