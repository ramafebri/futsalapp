/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import ReservationSuccessUI from './reservation-success.pres';

const ReservationSuccess = observer(({navigation}) => {
  const [timeLeft, setTimeLeft] = useState(2);

  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    if (timeLeft === 0) {
      navigation.navigate('Bottom Tabs');
    }
    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  return <ReservationSuccessUI />;
});

export default ReservationSuccess;
