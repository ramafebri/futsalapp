/* eslint-disable no-param-reassign */
import {types as t} from 'mobx-state-tree';

const UserData = t
  .model('UserData', {
    id_pengguna: t.optional(t.number, 0),
    nama: t.optional(t.maybeNull(t.string), ''),
    no_telp: t.optional(t.maybeNull(t.string), ''),
  })
  .actions((self) => ({
    addUserData(data) {
      self.id_pengguna = data.id_pengguna;
      self.nama = data.nama;
      self.no_telp = data.no_telp;
    },
    editUserData(data) {
      self.id_pengguna = data.id_pengguna;
      self.nama = data.nama;
      self.no_telp = data.no_telp;
    },
    deleteUserData() {
      self.id_pengguna = 0;
      self.nama = '';
      self.no_telp = '';
    },
  }));

export default UserData;
