/* eslint-disable no-param-reassign */
import {types as t} from 'mobx-state-tree';

const TotalPrice = t
  .model('TotalPrice', {
    totalPrice: t.optional(t.number, 0),
  })
  .actions((self) => ({
    addTotalPrice(value) {
      self.totalPrice += value;
    },
    subTotalPrice(value) {
      self.totalPrice -= value;
    },
    removeTotalPrice() {
      self.totalPrice = 0;
    },
  }));

export default TotalPrice;
