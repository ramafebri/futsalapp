import React, {useState, useEffect} from 'react';
import * as Resources from '../../resources/resources';
import ContactUI from './contact.pres';

export default function Contact({route, navigation}) {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getInfoContact();
  }, []);

  const getInfoContact = () => {
    Resources.getInfo()
      .then((res) => {
        setContact(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContactUI
      routeName={route.name}
      dataContact={contact}
      navigation={navigation}
    />
  );
}
