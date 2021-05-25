import {types, onSnapshot} from 'mobx-state-tree';

import UserData from './user-data';
import JamMain from './jam-main-data';
import TotalPrice from './total-price';

const RootModel = types.model('RootModel', {
  userData: UserData,
  jamMain: JamMain,
  totalPrice: TotalPrice,
});

const rootStore = RootModel.create({
  userData: {},
  jamMain: {items: []},
  totalPrice: {totalPrice: 0},
});

export default rootStore;

onSnapshot(rootStore, (snapshot) =>
  console.log('Snapshot: ', snapshot.jamMain.items),
);
