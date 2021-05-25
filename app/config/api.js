export const POST_USER = 'users';
export const POST_LOGIN = 'users/login';
export const GET_USER_BY_ID = 'users/{userId}';
export const PUT_USER = 'users/{userId}';

export const GET_LAPANGAN = 'lapangan';
export const GET_LAPANGAN_BYID = 'lapangan/{lapanganId}';

export const GET_RESERVASI_BY_USERID = 'reservasi/user/{userId}';
export const POST_RESERVASI = 'reservasi';
export const PUT_RESERVASI = 'reservasi/{reservasiId}';

export const GET_TGL_MAIN_BY_LAP_ID = 'tglmain/lapangan/{lapanganId}';
export const GET_TGL_MAIN_BY_DATE_AND_IDLAP =
  'tglmain/date/?date={date}&id_lapangan={lapanganId}';

export const GET_JAM_MAIN_BY_TGL_MAIN = 'jammain/tglmain/{tglmainId}';
export const GET_JAM_MAIN_BY_ID = 'jammain/{jammainId}';
export const GET_JAM_MAIN_BY_IDLAP_TGL =
  'jammain/filter/filter?tanggal={tanggal}&id_lapangan={id_lapangan}';
export const PUT_JAM_MAIN = 'jammain/booking/{jam_mainId}';

export const GET_INFO = 'info';

export const GET_POST_RESERVASI_JAM_MAIN = 'resjammain';
export const GET_RESERVASI_JAM_MAIN_BY_ID_RESERVASI =
  'resjammain/reservasi/{reservasiId}';
