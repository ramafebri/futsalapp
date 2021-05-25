import moment from 'moment-timezone';

const convertTimeZone = (date) => {
  const format = 'YYYY-MM-DD';
  return moment.tz(date, 'Asia/Jakarta').format(format);
};

// Check if Tanggal Main is greater than equal today
export const greaterFromToday = (tglMain) => {
  const today = moment(new Date()).format('YYYY-MM-DD');

  // is Tanggal Main is greater than equal today
  const isGreater = tglMain >= today;
  return isGreater;
};

// Check if Tanggal Main is today
export const tglMainIsToday = (tglMain) => {
  const today = moment(new Date()).format('YYYY-MM-DD');

  // is Tanggal Main is today
  const isToday = tglMain === today;
  return isToday;
};

// Check if now hour is below from Jam Main
export const belowFromJamMain = (jamMain) => {
  const d = new Date();
  const nowHour = d.getHours();
  // convert hour to minute
  const minuteFromHour = nowHour * 60;

  const nowMinute = d.getMinutes();
  const minuteTotalNow = nowMinute + minuteFromHour;

  // Jam Main part
  const playHour = getFirstJamMain(jamMain);
  // convert hour to minute
  const minuteFromPlayHour = playHour * 60;

  // maximum 30 minutes before for cancel reservation
  const minuteTotalFromPlayHour = minuteFromPlayHour - 30;

  // is Now Hour is below from jam main
  const isBelow = minuteTotalNow < minuteTotalFromPlayHour;
  return isBelow;
};

// Check if now hour is below from Jam Main
export const greaterFromJamMain = (jamMain) => {
  const d = new Date();
  const nowHour = d.getHours();

  // Jam Main part
  const playHour = getFirstJamMain(jamMain);

  // is Now Hour is greater from jam main
  const isGreater = nowHour > playHour;
  return isGreater;
};

export const getFirstJamMain = (jamMain) => {
  const value = jamMain.slice(0, 2);
  const valueInt = parseInt(value, 10);
  return valueInt;
};

export default convertTimeZone;
