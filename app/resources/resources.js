import {create} from 'apisauce';
import API_URL from '../config/env';
import * as API from '../config/api';

const api = create({baseURL: API_URL});

export const postUser = async (data) => {
  return new Promise((resolve, reject) => {
    api
      .post(API.POST_USER, {
        nama: data.name,
        no_telp: data.phoneNumber,
        password: data.password,
      })
      .then((response) => {
        if (response.ok) {
          resolve(response.data);
        } else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postLogin = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post(API.POST_LOGIN, {
        no_telp: data.phoneNumber,
        password: data.password,
      })
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const putUserById = (data) => {
  return new Promise((resolve, reject) => {
    api
      .put(API.PUT_USER.replace(/{userId}/, data.userId), {
        nama: data.name,
        no_telp: data.phoneNumber,
        password: data.password,
      })
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_USER_BY_ID.replace(/{userId}/, userId))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postReservasi = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post(API.POST_RESERVASI, data)
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const putReservasiById = (data) => {
  return new Promise((resolve, reject) => {
    api
      .put(API.PUT_RESERVASI.replace(/{reservasiId}/, data.id_reservasi), data)
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAllLapangan = () => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_LAPANGAN)
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getLapanganById = (lapanganId) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_LAPANGAN_BYID.replace(/{lapanganId}/, lapanganId))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getReservasiByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_RESERVASI_BY_USERID.replace(/{userId}/, userId))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getInfo = () => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_INFO)
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getTglMainByLapId = (lapanganId) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_TGL_MAIN_BY_LAP_ID.replace(/{lapanganId}/, lapanganId))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getTglMainByDate = (date, idLap) => {
  return new Promise((resolve, reject) => {
    const URL1 = API.GET_TGL_MAIN_BY_DATE_AND_IDLAP.replace(/{date}/, date);
    const URL2 = URL1.replace(/{lapanganId}/, idLap);
    api
      .get(URL2)
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getJamMainByDateId = (dateId) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_JAM_MAIN_BY_TGL_MAIN.replace(/{tglmainId}/, dateId))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const putJamMain = (jamMainId, terpesan) => {
  return new Promise((resolve, reject) => {
    api
      .put(API.PUT_JAM_MAIN.replace(/{jam_mainId}/, jamMainId), {
        terpesan,
      })
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postResJamMain = (resId, jamMainId) => {
  return new Promise((resolve, reject) => {
    api
      .post(API.GET_POST_RESERVASI_JAM_MAIN, {
        id_reservasi: resId,
        id_jam_main: jamMainId,
      })
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getResJamMainByReservasiId = (resId) => {
  return new Promise((resolve, reject) => {
    api
      .get(
        API.GET_RESERVASI_JAM_MAIN_BY_ID_RESERVASI.replace(
          /{reservasiId}/,
          resId,
        ),
      )
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getJamByIdLapTgl = async (idLapangan, tanggal) => {
  return new Promise((resolve, reject) => {
    const URL1 = API.GET_JAM_MAIN_BY_IDLAP_TGL.replace(/{tanggal}/, tanggal);
    const URL2 = URL1.replace(/{id_lapangan}/, idLapangan);
    api
      .get(URL2)
      .then((response) => {
        if (response.ok) {
          resolve(response.data);
        } else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getJamById = async (idJam) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_JAM_MAIN_BY_ID.replace(/{jammainId}/, idJam))
      .then((response) => {
        if (response.ok) {
          resolve(response.data);
        } else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
