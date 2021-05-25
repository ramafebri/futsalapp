import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTextOrder: {
    width,
    height: 65,
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
    justifyContent: 'center',
  },
  viewIndicator: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 300,
    alignItems: 'center',
    alignSelf: 'center',
  },
  viewLapangan: {
    width,
    minHeight: 205,
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
    paddingVertical: 25,
    justifyContent: 'center',
    marginTop: 7,
  },
  viewDetailJam: {
    width,
    flexDirection: 'row',
    marginTop: 10,
  },
  viewDetailJam1: {
    flex: 1,
    justifyContent: 'center',
  },
  viewDetailJam2: {
    flex: 12,
    justifyContent: 'center',
    bottom: 6,
  },
  viewTotal: {
    width,
    height: 65,
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
    marginTop: 7,
    flexDirection: 'row',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  buttonPayment: {
    width: '85%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006F57',
    marginTop: 90,
    marginBottom: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  textOrder: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#242424',
  },
  textLap: {
    fontSize: 18,
    fontWeight: '500',
    color: '#006F57',
  },
  textHari: {
    fontSize: 14,
    fontWeight: '500',
    color: '#505050',
    marginTop: 10,
  },
  textJam: {
    fontSize: 14,
    fontWeight: '300',
    color: '#505050',
    marginTop: 10,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default main;
