import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  viewCard: {
    width: '90%',
    height: 150,
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewCard1: {
    flex: 6,
    height: 150,
    justifyContent: 'center',
  },
  viewCard2: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPayStatus: {
    width: '100%',
    flexDirection: 'row',
  },
  viewPayStatus1: {
    minWidth: '35%',
  },
  viewPayStatus2: {
    flex: 4,
  },
  viewRow: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  text1: {
    fontWeight: '500',
    fontSize: 18,
    color: '#006F57',
  },
  text2: {
    fontWeight: '500',
    fontSize: 14,
    color: '#505050',
    marginTop: 10,
  },
  text3: {
    fontWeight: '300',
    fontSize: 14,
    color: '#505050',
    marginLeft: 10,
  },
  textArrow: {
    fontWeight: '500',
    fontSize: 18,
    color: '#006F57',
  },
  textPaymentGreen: {
    fontWeight: '500',
    fontSize: 14,
    color: '#006F57',
    marginTop: 10,
  },
  textPaymentOrange: {
    fontWeight: '500',
    fontSize: 14,
    color: '#f26500',
    marginTop: 10,
  },
  textPaymentRed: {
    fontWeight: '500',
    fontSize: 14,
    color: '#CD1624',
    marginTop: 10,
  },
  viewIndicator: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 200,
    alignItems: 'center',
    alignSelf: 'center',
  },
  viewNoReservation: {
    width,
    height,
    alignItems: 'center',
    paddingTop: 150,
  },
  textNoReservation: {
    fontSize: 20,
  },
});

export default main;
