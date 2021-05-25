import React, {useState, useEffect} from 'react';
import * as Resources from '../../resources/resources';
import HomeUI from './index.pres';

export default function Home({route, navigation}) {
  const [lapangan, setLapangan] = useState([]);
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    getDataLapangan();
  }, []);

  const getDataLapangan = () => {
    setShowIndicator(true);
    Resources.getAllLapangan()
      .then((res) => {
        setShowIndicator(false);
        setLapangan(res);
      })
      .catch((err) => {
        setShowIndicator(false);
        console.log(err);
      });
  };

  const onPressLapangan = (item) => {
    navigation.navigate('Detail', {dataLap: item});
  };

  return (
    <HomeUI
      routeName={route.name}
      dataLap={lapangan}
      onPressLapangan={onPressLapangan}
      showIndicator={showIndicator}
    />
  );
}
