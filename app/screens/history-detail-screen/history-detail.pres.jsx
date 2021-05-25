import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IcSucces from '../../assets/svg/check-circle-green.svg';
import IcPending from '../../assets/svg/ic-pending.svg';
import IcCancel from '../../assets/svg/ic-cancel.svg';
import TimeIcon from '../../assets/svg/access_time1.svg';
import * as Text from '../../component/Text';
import * as Header from '../../component/Header';
import * as Constants from '../../config/constants';
import Style from './history-detail.style';

const HistoryDetailUI = observer(
  ({
    dataHistory,
    dataLap,
    dataJamMain,
    routeName,
    navigation,
    onPressCancel,
    showIndicator,
  }) => {
    return (
      <SafeAreaView style={Style.container}>
        <ScrollView style={Style.container}>
          <Header.Secondary
            routeName={routeName}
            isDetailScreen={false}
            goBack={() => navigation.goBack()}
          />
          <View style={Style.viewBooking}>
            <View style={Style.viewBooking1}>
              <Text.Regular
                styles={{
                  ...Style.textYourBooking,
                  display:
                    dataHistory.status_pembayaran === Constants.SUDAH
                      ? 'flex'
                      : 'none',
                }}>
                Your Reservation is Done!
              </Text.Regular>
              <Text.Regular
                styles={{
                  ...Style.textYourBooking,
                  display:
                    dataHistory.status_pembayaran === Constants.TERTUNDA
                      ? 'flex'
                      : 'none',
                }}>
                Your Reservation is Confirmed!
              </Text.Regular>
              <Text.Regular
                styles={{
                  ...Style.textYourBooking,
                  display:
                    dataHistory.status_pembayaran === Constants.BATAL
                      ? 'flex'
                      : 'none',
                }}>
                Your Reservation is Cancelled!
              </Text.Regular>
              <Text.Regular styles={Style.textReservation}>
                Reservation Number: {dataHistory.id_reservasi}
              </Text.Regular>
              <Text.Regular styles={Style.textBookingDate}>
                Created Date :{'\n'}
                <Text.Regular styles={Style.textPaymentGreen}>
                  {moment(dataHistory.tanggal_dibuat).format(
                    'dddd, Do MMMM YYYY',
                  )}
                </Text.Regular>
              </Text.Regular>
              <Text.Regular styles={Style.textBookingDate}>
                Payment Status :
              </Text.Regular>
              <Text.Regular
                styles={{
                  ...Style.textPaymentGreen,
                  display:
                    dataHistory.status_pembayaran === Constants.SUDAH
                      ? 'flex'
                      : 'none',
                }}>
                Payment Confirmed
              </Text.Regular>
              <Text.Regular
                styles={{
                  ...Style.textPaymentOrange,
                  display:
                    dataHistory.status_pembayaran === Constants.TERTUNDA
                      ? 'flex'
                      : 'none',
                }}>
                Payment Pending
              </Text.Regular>
              <Text.Regular
                styles={{
                  ...Style.textPaymentRed,
                  display:
                    dataHistory.status_pembayaran === Constants.BATAL
                      ? 'flex'
                      : 'none',
                }}>
                Cancelled
              </Text.Regular>
            </View>

            <View style={Style.viewBooking2}>
              <IcSucces
                style={{
                  display:
                    dataHistory.status_pembayaran === Constants.SUDAH
                      ? 'flex'
                      : 'none',
                }}
              />
              <IcPending
                style={{
                  display:
                    dataHistory.status_pembayaran === Constants.TERTUNDA
                      ? 'flex'
                      : 'none',
                }}
              />
              <IcCancel
                style={{
                  display:
                    dataHistory.status_pembayaran === Constants.BATAL
                      ? 'flex'
                      : 'none',
                }}
              />
            </View>
          </View>

          <View style={Style.viewLapangan}>
            <Image source={{uri: dataLap.gambar}} style={Style.image} />
            <View style={Style.viewLapangan0}>
              <View style={Style.viewLapangan1}>
                <Text.Regular styles={Style.textLapangan}>
                  {dataLap.nama_lapangan}
                </Text.Regular>
                <Text.Regular styles={Style.textTanggal}>
                  {moment(dataHistory.tanggal_main).format(
                    'dddd, Do MMMM YYYY',
                  )}
                </Text.Regular>
                {dataJamMain.map((item) => {
                  return (
                    <View style={Style.viewDetailJam} key={item.id_jam_main}>
                      <View style={Style.viewDetailJam1}>
                        <TimeIcon />
                      </View>
                      <View style={Style.viewDetailJam2}>
                        <Text.Regular styles={Style.textJam}>
                          {item.jam}
                        </Text.Regular>
                      </View>
                    </View>
                  );
                })}
              </View>
              <View style={Style.viewLapangan2}>
                <View style={Style.viewOval}>
                  <Text.Regular styles={Style.textJenisLap}>
                    {dataLap.jenis_lapangan}
                  </Text.Regular>
                </View>
              </View>
            </View>
          </View>

          <View style={Style.viewTotal}>
            <View style={Style.viewTotal1}>
              <Text.Regular styles={Style.textTotal}>Total</Text.Regular>
            </View>
            <View style={{...Style.viewTotal1, alignItems: 'flex-end'}}>
              <Text.Regular styles={Style.textTotal}>
                Rp {dataHistory.total_pembayaran}
              </Text.Regular>
            </View>
          </View>

          <TouchableOpacity
            onPress={onPressCancel}
            style={{
              ...Style.buttonCancel,
              display:
                dataHistory.status_pembayaran === Constants.TERTUNDA
                  ? 'flex'
                  : 'none',
            }}>
            <Text.Regular styles={Style.textCancelBtn}>
              Cancel Reservation
            </Text.Regular>
          </TouchableOpacity>
          <View style={Style.viewIndicator}>
            {showIndicator && (
              <ActivityIndicator size="large" color="#006F57" />
            )}
          </View>

          <View style={{height: 30}} />
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default HistoryDetailUI;
