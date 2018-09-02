import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import App from '././App';

const NavigationPages = StackNavigator({
  AuctionGrabber: { screen: AuctionGrabber },
  AuctionDetails: { screen: AuctionDetails }
});

export default NavigationPages;
