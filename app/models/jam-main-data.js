/* eslint-disable no-param-reassign */
import {types as t, destroy, getParent} from 'mobx-state-tree';

const JamMainItem = t
  .model('JamMainItem', {
    id_jam_main: t.optional(t.number, 0),
    id_lapangan: t.optional(t.number, 0),
    tanggal: t.optional(t.maybeNull(t.string), ''),
    jam: t.optional(t.maybeNull(t.string), ''),
    terpesan: t.optional(t.string, ''),
    biaya_reservasi: t.optional(t.number, 0),
  })
  .actions((self) => ({
    remove() {
      getParent(self, 2).remove(self);
    },
  }));

const JamMain = t
  .model('JamMain', {
    items: t.optional(t.array(JamMainItem), []),
  })
  .actions((self) => ({
    addJamMainItem(jamMainItem) {
      self.items.push(jamMainItem);
    },
    remove(item) {
      destroy(item);
    },
    removeAll() {
      self.items = [];
    },
  }));

export default JamMain;
