export const checkPhoneValidation = (phoneNumber) => {
  if (phoneNumber.length >= 10 && phoneNumber.length <= 13) {
    if (phoneNumber.slice(0, 2) === '08') {
      return true;
    }
    return false;
  }
  return false;
};

export const isNumber = (value) => {
  const reg = new RegExp('^[0-9]*$');
  if (reg.test(value)) {
    return true;
  }
  return false;
};

export const checkPassLength = (password) => {
  if (password.length >= 6) {
    return true;
  }
  return false;
};
