import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image1: {
    width: 150,
    height: 150,
  },
  image2: {
    width: 260,
    height: 60,
    marginTop: 20,
  },
});

const text = StyleSheet.create({
  regular: {
    fontSize: 16,
    color: '#006F57',
    letterSpacing: 0.3,
  },
  light: {
    fontSize: 14,
    fontWeight: '300',
    color: '#006F57',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  bold: {
    fontSize: 30,
    fontWeight: '500',
    color: '#006F57',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});

const button = StyleSheet.create({
  regular: {
    width: 280,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#006F57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  logout: {
    width: 280,
    height: 36,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#BB010B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonLogout: {
    fontSize: 18,
    fontWeight: '500',
    color: '#BB010B',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  editProfile: {
    width: 108,
    height: 36,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#006F57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonEditProfile: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FAF8F8',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});

const textInput = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  containerDate: {
    width: '85%',
    borderColor: '#006F57',
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  view1: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    width: '90%',
    height: '100%',
  },
  view3: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    color: '#006F57',
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 0.3,
  },
});

const headerLogin = StyleSheet.create({
  container: {
    width,
    height: 60,
    flexDirection: 'row',
    paddingLeft: 28,
  },
  view1: {
    width: '15%',
    height: '100%',
  },
  view2: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 7,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    color: '#006F57',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

const header = StyleSheet.create({
  container: {
    width,
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#006F57',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    paddingHorizontal: 10,
  },
  view1: {
    width: '10%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    width: '23%',
    height: 70,
    justifyContent: 'center',
  },
  view3: {
    width: '67%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 70,
    height: 70,
  },
  image1: {
    width: 50,
    height: 50,
  },
  textRegular: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.3,
    marginLeft: 10,
  },
  textLight: {
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});

export {main, text, button, textInput, headerLogin, header};
