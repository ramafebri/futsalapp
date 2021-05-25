import React from 'react';
import {SafeAreaView} from 'react-native';
import {observer} from 'mobx-react-lite';
import * as Text from '../../component/Text';
import SuccessIcon from '../../assets/svg/check-circle.svg';
import Style from './reservation-success.style';

const ReservationSuccessUI = observer(() => {
  return (
    <SafeAreaView style={Style.container}>
      <Text.Regular styles={Style.textSuccess}>
        Reservation Success
      </Text.Regular>
      <Text.Regular styles={{...Style.textDetail, marginTop: 35}}>
        Thank you for choosing us
      </Text.Regular>
      <Text.Regular styles={Style.textDetail}>
        as your futsal partner
      </Text.Regular>
      <SuccessIcon style={Style.logo} />
      <Text.Regular styles={Style.textTotal}>
        Have Fun and Stay Healthy!
      </Text.Regular>
    </SafeAreaView>
  );
});

export default ReservationSuccessUI;
