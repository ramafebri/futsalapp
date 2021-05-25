import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBooking: {
    width,
    height: 165,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  viewBooking1: {
    flex: 3,
  },
  viewBooking2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewLapangan: {
    width,
    minHeight: 330,
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: 10,
  },
  viewLapangan0: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 12,
  },
  viewLapangan1: {
    flex: 2,
  },
  viewLapangan2: {
    flex: 1,
    alignItems: 'flex-end',
  },
  viewDetailJam: {
    width: '100%',
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
    paddingLeft: 10,
    bottom: 1,
  },
  viewOval: {
    width: 87,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#006F57',
  },
  viewTotal: {
    width,
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 10,
  },
  viewTotal1: {
    flex: 1,
  },
  viewIndicator: {
    width,
    height: 35,
    position: 'absolute',
    top: 200,
    alignItems: 'center',
    alignSelf: 'center',
  },

  textYourBooking: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#242424',
  },
  textReservation: {
    fontWeight: '500',
    fontSize: 12,
    color: '#242424',
    marginTop: 7,
  },
  textBookingDate: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#505050',
    marginTop: 7,
  },
  textPaymentGreen: {
    fontWeight: '600',
    fontSize: 12,
    color: '#006F57',
  },
  textPaymentOrange: {
    fontWeight: '600',
    fontSize: 12,
    color: '#f26500',
  },
  textPaymentRed: {
    fontWeight: '600',
    fontSize: 12,
    color: '#CD1624',
  },
  textLapangan: {
    fontWeight: '500',
    fontSize: 18,
    color: '#006F57',
  },
  textTanggal: {
    fontWeight: '500',
    fontSize: 14,
    color: '#505050',
    marginTop: 10,
  },
  textJam: {
    fontWeight: '300',
    fontSize: 14,
    color: '#505050',
  },
  textJenisLap: {
    fontWeight: '500',
    fontSize: 14,
    color: '#ffffff',
  },
  textTotal: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#242424',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 162,
  },
  buttonCancel: {
    width: '85%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CD1624',
    marginTop: 20,
    borderRadius: 10,
  },
  textCancelBtn: {
    fontWeight: '500',
    fontSize: 18,
    color: '#ffffff',
  },
});

export default main;
