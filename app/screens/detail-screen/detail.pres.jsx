/* eslint-disable no-else-return */
import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  greaterFromToday,
  tglMainIsToday,
  greaterFromJamMain,
} from './time-function';
import * as Constant from '../../config/constants';
import * as Text from '../../component/Text';
import * as Header from '../../component/Header';
import * as TextInput from '../../component/TextInput';
import rootStore from '../../models/root';
import Style from './detail.style';

const DetailUI = observer(
  ({
    routeName,
    dataLap,
    dataPlayHour,
    moveToPayment,
    navigation,
    onPressSelectedJam,
    onChangeSelectedDate,
    selectedDate,
    selectedDateString,
    showIndicator,
    selectedJam,
    showDate,
    showDatePicker,
    showJam,
    changeShowDate,
    changeShowDatePicker,
    changeShowJam,
  }) => {
    return (
      <SafeAreaView style={Style.container}>
        <Header.Secondary
          routeName={routeName}
          isDetailScreen
          goBack={() => navigation.goBack()}
        />
        <ScrollView>
          <View>
            <View style={Style.viewIndicator}>
              {showIndicator && (
                <ActivityIndicator size="large" color="#006F57" />
              )}
            </View>
            <Image source={{uri: dataLap.gambar}} style={Style.imageCard} />
            <View style={Style.viewText}>
              <View style={Style.view1}>
                <Text.Regular styles={Style.textLap}>
                  {dataLap.nama_lapangan}
                </Text.Regular>
              </View>
              <View style={Style.view2}>
                <View style={Style.viewJenisLap}>
                  <Text.Regular
                    styles={{...Style.textJenisLap, textAlign: 'center'}}>
                    {dataLap.jenis_lapangan}
                  </Text.Regular>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={Style.viewTanggalSewa}
              onPress={changeShowDate}>
              <View style={{flex: 2}}>
                <Text.Regular styles={Style.textTglSewa}>
                  Select Date
                </Text.Regular>
              </View>
              <View style={{flex: 2}}>
                <Text.Regular
                  styles={{...Style.textTglSewa, textAlign: 'right'}}>
                  &gt;
                </Text.Regular>
              </View>
            </TouchableOpacity>
            <View
              style={{
                ...Style.viewDate,
                display: showDate ? 'flex' : 'none',
              }}>
              <TextInput.Date
                value={selectedDateString}
                onPressIcon={changeShowDatePicker}
              />
              {showDatePicker && (
                <DateTimePickerModal
                  isVisible={showDatePicker}
                  mode="date"
                  onConfirm={onChangeSelectedDate}
                  onCancel={onChangeSelectedDate}
                  date={selectedDate}
                  minimumDate={new Date()}
                />
              )}
            </View>

            <TouchableOpacity
              style={Style.viewTanggalSewa}
              onPress={changeShowJam}>
              <View style={{flex: 2}}>
                <Text.Regular styles={Style.textTglSewa}>
                  Select Time
                </Text.Regular>
              </View>
              <View style={{flex: 2}}>
                <Text.Regular
                  styles={{...Style.textTglSewa, textAlign: 'right'}}>
                  &gt;
                </Text.Regular>
              </View>
            </TouchableOpacity>
            <View
              style={{
                ...Style.viewJam,
                display: showJam ? 'flex' : 'none',
              }}>
              {dataPlayHour.map((item) => {
                if (
                  item.terpesan === Constant.YA &&
                  selectedJam.includes(item.id_jam_main) === false
                ) {
                  return (
                    <View
                      key={item.id_jam_main}
                      style={{
                        ...Style.viewBtnJam,
                        backgroundColor: '#d4d4d4',
                        display: showJam ? 'flex' : 'none',
                      }}>
                      <Text.Regular
                        styles={{
                          color: selectedJam.includes(item.id_jam_main)
                            ? '#ffffff'
                            : '#000000',
                        }}>
                        {`${item.jam} WIB - Rp ${item.biaya_reservasi}`}
                      </Text.Regular>
                    </View>
                  );
                } else if (greaterFromToday(selectedDateString)) {
                  if (tglMainIsToday(selectedDateString)) {
                    if (greaterFromJamMain(item.jam)) {
                      return (
                        <View
                          key={item.id_jam_main}
                          style={{
                            ...Style.viewBtnJam,
                            backgroundColor: '#d4d4d4',
                            display: showJam ? 'flex' : 'none',
                          }}>
                          <Text.Regular
                            styles={{
                              color: selectedJam.includes(item.id_jam_main)
                                ? '#ffffff'
                                : '#000000',
                            }}>
                            {`${item.jam} WIB - Rp ${item.biaya_reservasi}`}
                          </Text.Regular>
                        </View>
                      );
                    }
                  }
                } else if (
                  item.terpesan === Constant.YA &&
                  selectedJam.includes(item.id_jam_main)
                ) {
                  return (
                    <TouchableOpacity
                      key={item.id_jam_main}
                      onPress={() => onPressSelectedJam(item)}
                      style={{
                        ...Style.viewBtnJam,
                        display: showJam ? 'flex' : 'none',
                        backgroundColor: selectedJam.includes(item.id_jam_main)
                          ? '#006F57'
                          : '#ffffff',
                      }}>
                      <Text.Regular
                        styles={{
                          color: selectedJam.includes(item.id_jam_main)
                            ? '#ffffff'
                            : '#000000',
                        }}>
                        {`${item.jam} WIB - Rp ${item.biaya_reservasi}`}
                      </Text.Regular>
                    </TouchableOpacity>
                  );
                }
                return (
                  <TouchableOpacity
                    key={item.id_jam_main}
                    onPress={() => onPressSelectedJam(item)}
                    style={{
                      ...Style.viewBtnJam,
                      display: showJam ? 'flex' : 'none',
                      backgroundColor: selectedJam.includes(item.id_jam_main)
                        ? '#006F57'
                        : '#ffffff',
                    }}>
                    <Text.Regular
                      styles={{
                        color: selectedJam.includes(item.id_jam_main)
                          ? '#ffffff'
                          : '#000000',
                      }}>
                      {`${item.jam} WIB - Rp ${item.biaya_reservasi}`}
                    </Text.Regular>
                  </TouchableOpacity>
                );
              })}
              {dataPlayHour.length === 0 && (
                <Text.Regular styles={{marginTop: 20}}>
                  No Playtime Available
                </Text.Regular>
              )}
            </View>
            <TouchableOpacity
              style={Style.buttonPayment}
              onPress={moveToPayment}>
              <Text.Regular styles={Style.textPayment}>
                GO TO DETAIL RESERVATION
              </Text.Regular>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={Style.viewTotal}>
          <View style={Style.viewTotal1}>
            <Text.Regular styles={Style.textTotal}>Total</Text.Regular>
          </View>
          <View style={Style.viewTotal2}>
            <Text.Regular styles={Style.textTotal}>
              Rp {rootStore.totalPrice.totalPrice}
            </Text.Regular>
          </View>
        </View>
      </SafeAreaView>
    );
  },
);

export default DetailUI;
