import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import AuctionDetails from './app/components/Body/Details';
import AuctionGrabber from './app/components/Body';

export default createStackNavigator({
  Home: AuctionGrabber,
  Details: AuctionDetails,
});
