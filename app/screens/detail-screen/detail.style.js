import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageCard: {
    width,
    height: 235,
  },
  viewIndicator: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 300,
    alignItems: 'center',
    alignSelf: 'center',
  },
  viewText: {
    width,
    paddingHorizontal: 25,
    paddingVertical: 25,
    flexDirection: 'row',
  },
  view1: {
    flex: 2,
  },
  view2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewJenisLap: {
    width: 87,
    height: 62,
    backgroundColor: '#23856D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  viewTanggalSewa: {
    width,
    height: 55,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
    paddingHorizontal: 30,
  },
  viewDate: {
    width,
    height: 70,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  viewJam: {
    width,
    minHeight: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingBottom: 15,
  },
  viewBtnJam: {
    width: '85%',
    height: 36,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#006F57',
    marginTop: 15,
    justifyContent: 'center',
  },
  viewTotal: {
    width,
    height: 60,
    backgroundColor: '#CD1624',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    flexDirection: 'row',
  },
  viewTotal1: {
    flex: 1,
    paddingLeft: 35,
    justifyContent: 'center',
  },
  viewTotal2: {
    flex: 1,
    paddingRight: 35,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonPayment: {
    width: '85%',
    height: 36,
    borderWidth: 1,
    borderColor: '#CD1624',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 30,
  },
  textPayment: {
    fontSize: 14,
    fontWeight: '500',
    color: '#CD1624',
  },
  textTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },

  textLap: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#242424',
  },
  textJenisLap: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FAF8F8',
  },
  textPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#818181',
    marginTop: 16,
  },
  textTglSewa: {
    fontSize: 14,
    fontWeight: '500',
    color: '#006F57',
  },
});

export default main;
