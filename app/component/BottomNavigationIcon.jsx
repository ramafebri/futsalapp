import React from 'react';
import Home from '../assets/svg/home.svg';
import History from '../assets/svg/history.svg';
import Profile from '../assets/svg/profile.svg';

const HomeIcon = ({color}) => {
  return <Home fill={color} width={22} height={22} />;
};
const HistoryIcon = ({color}) => {
  return <History fill={color} width={22} height={22} />;
};
const ProfileIcon = ({color}) => {
  return <Profile fill={color} width={22} height={22} />;
};

export {HomeIcon, HistoryIcon, ProfileIcon};
