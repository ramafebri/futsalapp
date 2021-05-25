import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageCard: {
    width: '100%',
    height: 140,
  },
  viewText: {
    width,
    minHeight: 126,
    backgroundColor: '#006F57',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  viewList: {
    width,
    alignItems: 'center',
    paddingBottom: 15,
  },
  viewIndicator: {
    width,
    height: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    alignSelf: 'center',
  },
  viewCard: {
    width: '90%',
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  viewCardRow: {
    width: '100%',
    height: 60,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    padding: 8,
    flexDirection: 'row',
  },
  viewCardRow1: {
    width: '50%',
    height: 60,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  text2: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
    textAlign: 'left',
  },
  textLap: {
    fontSize: 14,
    fontWeight: '500',
    color: '#242424',
  },
  textJenisLap: {
    fontSize: 12,
    fontWeight: '500',
    color: '#818181',
  },
  textPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#23856D',
    textAlign: 'right',
    marginTop: 16,
    marginRight: 4,
  },
});

export default main;
