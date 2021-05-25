import React from 'react';
import FaqUI from './faq.pres';

export default function Faq({route, navigation}) {
  return <FaqUI routeName={route.name} navigation={navigation} />;
}
