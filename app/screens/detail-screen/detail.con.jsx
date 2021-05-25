/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {BackHandler} from 'react-native';
import {observer} from 'mobx-react-lite';
import moment from 'moment';
import * as Constant from '../../config/constants';
import * as Resources from '../../resources/resources';
import rootStore from '../../models/root';
import DetailUI from './detail.pres';

const Detail = observer(({route, navigation}) => {
  const {dataLap} = route.params;
  const [dataPlayHour, setDataPlayHour] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateString, setSelectedDateString] = useState('');
  const [selectedJam, setSelectedJam] = useState([]);
  const [showDate, setShowDate] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [showJam, setShowJam] = useState(false);
  const [subscribeJamMain, setSubscribeJamMain] = useState(false);

  useEffect(() => {
    rootStore.jamMain.removeAll();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (subscribeJamMain) {
        getJamByIdLapTgl(selectedDateString);
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [subscribeJamMain, selectedDateString]);

  useEffect(() => {
    const backAction = () => {
      if (selectedJam.length > 0) {
        alert('uncheck the time that has been selected');
      } else {
        navigation.navigate('Bottom Tabs');
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [selectedJam]);

  const getJamByIdLapTgl = (tanggal) => {
    if (tanggal !== '') {
      Resources.getJamByIdLapTgl(dataLap.id_lapangan, tanggal)
        .then((res) => {
          setDataPlayHour(res);
          setShowIndicator(false);
        })
        .catch((err) => {
          console.log(err);
          setDataPlayHour([]);
          setSubscribeJamMain(false);
          setShowIndicator(false);
        });
    }
  };

  const putJamMain = (jamMainId, terpesan) => {
    setShowIndicator(true);
    Resources.putJamMain(jamMainId, terpesan)
      .then(() => {
        setShowIndicator(false);
      })
      .catch((err) => {
        console.log(err);
        setShowIndicator(false);
      });
  };

  const changeShowDate = () => {
    setShowDate(!showDate);
  };

  const changeShowDatePicker = () => {
    if (selectedJam.length > 0) {
      alert(
        'Please uncheck the time that has been selected before change date time',
      );
    } else {
      setShowDatePicker(!showDatePicker);
    }
  };

  const changeShowJam = () => {
    setShowJam(!showJam);
  };

  const onChangeSelectedDate = (value) => {
    setShowDatePicker(false);

    if (value === undefined) {
      setSelectedDate(selectedDate);
    } else {
      setSelectedDate(value);
      const values = moment(value).format('YYYY-MM-DD');
      setSelectedDateString(values.toString());
      setSubscribeJamMain(true);
    }
  };

  const onPressSelectedJam = (item) => {
    if (selectedJam.includes(item.id_jam_main)) {
      const filteredArr = selectedJam.filter((e) => e !== item.id_jam_main);
      setSelectedJam(filteredArr);
      putJamMain(item.id_jam_main, Constant.TIDAK);

      rootStore.totalPrice.subTotalPrice(item.biaya_reservasi);
      rootStore.jamMain.items.map((data, index) => {
        if (data.id_jam_main === item.id_jam_main) {
          rootStore.jamMain.items[index].remove();
        }
        return true;
      });
    } else {
      setShowIndicator(true);
      Resources.getJamById(item.id_jam_main)
        .then((res) => {
          setShowIndicator(false);
          if(res.terpesan === Constant.TIDAK){
            setSelectedJam([...selectedJam, item.id_jam_main]);
            putJamMain(item.id_jam_main, Constant.YA);
      
            rootStore.totalPrice.addTotalPrice(item.biaya_reservasi);
            rootStore.jamMain.addJamMainItem(item);
          } else if (res.terpesan === Constant.YA) {
            alert('This playtime has been reserved');
          }
        })
        .catch((err) => {
          console.log(err);
          setShowIndicator(false);
        });
    }
  };

  const moveToPayment = () => {
    if (selectedJam.length > 0) {
      navigation.navigate('Reservation Detail', {
        dataLap,
        selectedDate: selectedDateString,
      });
    } else {
      alert('You have not selected a reservation time');
    }
  };

  return (
    <DetailUI
      routeName={route.name}
      dataLap={dataLap}
      dataPlayHour={dataPlayHour}
      moveToPayment={moveToPayment}
      onPressSelectedJam={onPressSelectedJam}
      onChangeSelectedDate={onChangeSelectedDate}
      navigation={navigation}
      showDate={showDate}
      showDatePicker={showDatePicker}
      showIndicator={showIndicator}
      showJam={showJam}
      selectedDate={selectedDate}
      selectedDateString={selectedDateString}
      selectedJam={selectedJam}
      changeShowDate={changeShowDate}
      changeShowDatePicker={changeShowDatePicker}
      changeShowJam={changeShowJam}
    />
  );
});

export default Detail;
