import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useIsFocused} from '@react-navigation/native';
import * as Resources from '../../resources/resources';
import rootStore from '../../models/root';
import HistoryUI from './history.pres';

const History = observer(({route, navigation}) => {
  const [history, setHistory] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setShowIndicator(true);
      getDataHistory();
    }
  }, [isFocused]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDataHistory();
  }, []);

  const getDataHistory = () => {
    Resources.getReservasiByUserId(rootStore.userData.id_pengguna)
      .then((res) => {
        setHistory(res);
        setRefreshing(false);
        setShowIndicator(false);
      })
      .catch((err) => {
        console.log(err);
        setRefreshing(false);
        setShowIndicator(false);
      });
  };

  const moveToDetail = (data) => {
    navigation.navigate('History Detail', {data});
  };

  return (
    <HistoryUI
      routeName={route.name}
      data={history}
      moveToDetail={moveToDetail}
      refreshing={refreshing}
      showIndicator={showIndicator}
      onRefresh={onRefresh}
    />
  );
});

export default History;
