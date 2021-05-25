/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {observer} from 'mobx-react-lite';
import * as Resources from '../../resources/resources';
import * as Constant from '../../config/constants';
import rootStore from '../../models/root';
import ReservationUI from './reservation.pres';

const Reservation = observer(({route, navigation}) => {
  const {dataLap, selectedDate} = route.params;
  const [showIndicator, setShowIndicator] = useState(false);
  const [sortedJammain, setSortedJamMain] = useState([]);

  useEffect(() => {
    sortJammain();
  }, []);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const onPressBookingNow = () => {
    const idjamMain = [];
    rootStore.jamMain.items.map((item) => {
      return idjamMain.push(item.id_jam_main);
    });

    const data = {
      id_pengguna: rootStore.userData.id_pengguna,
      id_lapangan: dataLap.id_lapangan,
      tanggal_main: selectedDate,
      tanggal_dibuat: new Date(),
      total_pembayaran: rootStore.totalPrice.totalPrice,
      status_pembayaran: Constant.TERTUNDA,
    };

    setShowIndicator(true);
    Resources.postReservasi(data)
      .then((res) => {
        if (res.id_reservasi > 0) {
          for (let i = 0; i < idjamMain.length; i++) {
            Resources.postResJamMain(res.id_reservasi, idjamMain[i]);
          }
          setShowIndicator(false);
          rootStore.totalPrice.removeTotalPrice();
          navigation.navigate('Reservation Success');
        } else {
          setShowIndicator(false);
          alert('Reservation failed');
        }
      })
      .catch((err) => {
        alert('Reservation failed');
        console.log(err);
        setShowIndicator(false);
      });
  };

  const sortJammain = () =>{
    const data = [];
    rootStore.jamMain.items.map(item => data.push(item.jam))
    data.sort();
    setSortedJamMain(data);
  }


  return (
    <ReservationUI
      dataLap={dataLap}
      navigation={navigation}
      selectedDate={selectedDate}
      sortedJammain={sortedJammain}
      onPressBookingNow={onPressBookingNow}
      routeName={route.name}
      showIndicator={showIndicator}
    />
  );
});

export default Reservation;
