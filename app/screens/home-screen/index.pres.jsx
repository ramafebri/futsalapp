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
import * as Text from '../../component/Text';
import * as Header from '../../component/Header';
import rootStore from '../../models/root';
import Style from './index.style';

const HomeUI = observer(
  ({routeName, dataLap, onPressLapangan, showIndicator}) => {
    return (
      <SafeAreaView style={Style.container}>
        <Header.Regular routeName={routeName} name={rootStore.userData.nama} />
        <ScrollView>
          <View>
            <View style={Style.viewText}>
              <Text.Regular styles={Style.text}>Welcome!</Text.Regular>
              <Text.Light styles={Style.text2}>
                Here’s how to order :{'\n'}1. Choose your desired field{'\n'}2.
                Choose when and how long do you want to reserve it{'\n'}3. Make
                Reservation
                {'\n'}4. Get some fun with your friends !
              </Text.Light>
            </View>
            <View style={Style.viewList}>
              {dataLap.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id_lapangan}
                    style={Style.viewCard}
                    onPress={() => onPressLapangan(item)}>
                    <Image
                      source={{uri: item.gambar}}
                      style={Style.imageCard}
                    />
                    <View style={Style.viewCardRow}>
                      <View style={Style.viewCardRow1}>
                        <Text.Regular styles={Style.textLap}>
                          {item.nama_lapangan}
                        </Text.Regular>
                        <Text.Regular styles={Style.textJenisLap}>
                          {item.jenis_lapangan}
                        </Text.Regular>
                      </View>
                      <View style={Style.viewCardRow1} />
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={Style.viewIndicator}>
                {showIndicator && (
                  <ActivityIndicator size="large" color="#006F57" />
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default HomeUI;
