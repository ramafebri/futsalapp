/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import moment from 'moment';
import * as Constants from '../../config/constants';
import * as Resources from '../../resources/resources';
import HistoryDetailUI from './history-detail.pres';
import {
  greaterFromToday,
  tglMainIsToday,
  belowFromJamMain,
} from '../detail-screen/time-function';

export default function HistoryDetail({route, navigation}) {
  const {data} = route.params;
  const [dataLap, setDataLap] = useState(Constants.DATA_LAPANGAN);
  const [dataJamMain, setDataJamMain] = useState([]);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    getLapanganById();
    getResJamMainByReservasiId(data.id_reservasi);
  }, []);

  const getLapanganById = () => {
    Resources.getLapanganById(data.id_lapangan)
      .then((res) => {
        setDataLap(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getResJamMainByReservasiId = (reservasiId) => {
    Resources.getResJamMainByReservasiId(reservasiId)
      .then((res) => {
        setDataJamMain(res);
      })
      .catch((err) => console.log(err));
  };

  const onPressCancel = () => {
    Alert.alert(
      'Are you sure cancel this reservation?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log(''),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => putReservation()},
      ],
      {cancelable: false},
    );
  };

  const putReservation = async () => {
    const tanggalMain = moment(data.tanggal_main).format('YYYY-MM-DD');
    const tanggalDibuat = moment(data.tanggal_dibuat).format('YYYY-MM-DD');
    const datas = {
      ...data,
      tanggal_main: tanggalMain,
      tanggal_dibuat: tanggalDibuat,
      status_pembayaran: Constants.BATAL,
    };

    const greaterValue = greaterFromToday(tanggalMain);

    if (greaterValue) {
      const isTodayValue = tglMainIsToday(tanggalMain);
      if (isTodayValue) {
        const value = belowFromJamMain(dataJamMain[0].jam);
        if (value) {
          putReservationMethod(datas);
        } else {
          alert(`Sorry, maximum reservation is 30 minutes before play hour`);
        }
      } else {
        putReservationMethod(datas);
      }
    } else {
      alert(`Sorry, you cannot cancel yesterday's reservation`);
    }
  };

  const putReservationMethod = (datas) => {
    setShowIndicator(true);
    Resources.putReservasiById(datas)
      .then(() => {
        // console.log(res);
        for (let i = 0; i < dataJamMain.length; i++) {
          putJamMain(dataJamMain[i].id_jam_main, Constants.TIDAK);
        }
        setShowIndicator(false);
        navigation.navigate('Bottom Tabs', {screen: 'History'});
      })
      .catch((err) => {
        console.log(err);
        setShowIndicator(false);
      });
  };

  const putJamMain = (jamMainId, terpesan) => {
    Resources.putJamMain(jamMainId, terpesan)
      .then(() => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <HistoryDetailUI
      routeName={route.name}
      dataHistory={data}
      dataLap={dataLap}
      dataJamMain={dataJamMain}
      navigation={navigation}
      onPressCancel={onPressCancel}
      showIndicator={showIndicator}
    />
  );
}
